import { istemci } from './istemci';
import { guvenliHata } from './guvenli-hata';

export type Konusma = {
  id: string;
  last_message_at: string;
  last_read_at: string | null;
  muted: boolean;
  peer_id: string;
  peer_name: string;
  peer_avatar_url: string | null;
  last_body: string | null;
  last_has_media: boolean;
  unread_count: number;
  peer_state: 'accepted' | 'pending';
};

export type MesajIstegi = Pick<Konusma,
  'id' | 'last_message_at' | 'peer_id' | 'peer_name' | 'peer_avatar_url' | 'last_body' | 'last_has_media'>;

export type KonusmaMesaji = {
  id: string;
  conversation_id: string;
  sender_id: string;
  body: string;
  shared_post_id: string | null;
  created_at: string;
  sender_name: string;
  sender_avatar_url: string | null;
  is_mine: boolean;
  media_count: number;
  first_media_key: string | null;
  first_media_type: 'image' | 'video' | null;
};

async function guvenli<T>(yuzey: string, islem: () => PromiseLike<{ data: T | null; error: unknown }>): Promise<T> {
  const { data, error } = await islem();
  if (error) throw guvenliHata(error, yuzey);
  return data as T;
}

export async function konusmalariOku(): Promise<Konusma[]> {
  return (await guvenli<Konusma[]>('conversation_list', () => istemci
    .from('conversation_list').select('*').order('last_message_at', { ascending: false }))) ?? [];
}

export async function mesajIstekleriniOku(): Promise<MesajIstegi[]> {
  return (await guvenli<MesajIstegi[]>('conversation_request_list', () => istemci
    .from('conversation_request_list').select('*').order('last_message_at', { ascending: false }))) ?? [];
}

export async function mesajIsteginiYanitla(konusma: string, kabul: boolean): Promise<void> {
  await guvenli('respond_to_message_request', () => istemci.rpc('respond_to_message_request', {
    p_conversation: konusma,
    p_accept: kabul,
  }));
}

export async function konusmaMesajlariniOku(konusma: string): Promise<KonusmaMesaji[]> {
  return (await guvenli<KonusmaMesaji[]>('message_list', () => istemci
    .from('message_list').select('*').eq('conversation_id', konusma).order('created_at'))) ?? [];
}

export async function konusmaAc(kisi: string): Promise<string> {
  return guvenli<string>('open_direct_conversation', () => istemci.rpc('open_direct_conversation', { p_other: kisi }));
}

export async function mesajYaz(konusma: string, metin: string): Promise<string> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) throw new Error('Mesaj göndermek için yeniden giriş yapın.');
  const satir = await guvenli<{ id: string }>('messages.insert', () => istemci.from('messages').insert({
    conversation_id: konusma,
    sender_id: kullanici.user.id,
    body: metin.trim(),
  }).select('id').single());
  return satir.id;
}

export async function mesajaGorselEkle(mesaj: string, key: string): Promise<void> {
  await guvenli('message_media.insert', () => istemci.from('message_media').insert({
    message_id: mesaj, storage_key: key, position: 0, media_type: 'image',
  }));
}

export async function mesajiSil(mesaj: string): Promise<void> {
  await guvenli('messages.delete', () => istemci.from('messages').delete().eq('id', mesaj));
}

export async function konusmayiOkunduYap(konusma: string): Promise<void> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) return;
  await guvenli('conversation_participants.read', () => istemci
    .from('conversation_participants')
    .update({ last_read_at: new Date().toISOString() })
    .eq('conversation_id', konusma)
    .eq('user_id', kullanici.user.id));
}

export async function konusmayiSessizeAl(konusma: string, sessiz: boolean): Promise<void> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) return;
  await guvenli('conversation_participants.mute', () => istemci
    .from('conversation_participants')
    .update({ muted: sessiz })
    .eq('conversation_id', konusma)
    .eq('user_id', kullanici.user.id));
}

export async function karsiTarafinOkumaZamani(konusma: string): Promise<string | null> {
  const satirlar = await guvenli<{ peer_last_read_at: string | null }[]>('conversation_peer_info', () =>
    istemci.rpc('conversation_peer_info', { p_conversation: konusma }));
  return satirlar?.[0]?.peer_last_read_at ?? null;
}

export type SikayetSebebi = 'spam' | 'abuse' | 'sale' | 'fake' | 'animal_welfare' | 'other';

export async function icerigiSikayetEt(
  tur: 'message' | 'conversation',
  hedef: string,
  sebep: SikayetSebebi,
  ayrinti?: string,
): Promise<void> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) throw new Error('Şikâyet için yeniden giriş yapın.');
  const { error } = await istemci.from('content_reports').insert({
    reporter_id: kullanici.user.id,
    target_kind: tur,
    target_id: hedef,
    reason: sebep,
    detail: ayrinti?.trim() || null,
  });
  if (error && error.code !== '23505') throw guvenliHata(error, 'content_reports.insert');
}

export async function kullaniciyiEngelle(kisi: string): Promise<void> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) throw new Error('Engellemek için yeniden giriş yapın.');
  if (kullanici.user.id === kisi) throw new Error('Kendi hesabınızı engelleyemezsiniz.');
  const { error } = await istemci.from('user_blocks').insert({
    blocker_id: kullanici.user.id,
    blocked_id: kisi,
  });
  if (error && error.code !== '23505') throw guvenliHata(error, 'user_blocks.insert');
}
