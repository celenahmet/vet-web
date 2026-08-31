import { guvenliHata } from './guvenli-hata';
import { istemci } from './istemci';

export type EntegrasyonTuru = 'laboratory' | 'sms' | 'whatsapp' | 'official_erx';
export type EntegrasyonDurumu = 'not_configured' | 'pending' | 'ready' | 'paused' | 'error';
export type AdapterTuru = 'rest' | 'soap' | 'hl7_v2' | 'astm' | 'sftp_file' | 'manual_file';

export type KlinikEntegrasyonu = {
  id: string;
  kind: EntegrasyonTuru;
  status: EntegrasyonDurumu;
  provider_name: string | null;
  sender_name: string | null;
  requested_at: string | null;
  provider_code: string | null;
  environment: 'sandbox' | 'production';
  adapter_kind: AdapterTuru | null;
  base_url: string | null;
  public_config: Record<string, unknown>;
  secret_fields_configured: string[];
  secrets_updated_at: string | null;
  configuration_status: 'draft' | 'validation_pending' | 'connected' | 'revalidation_required' | 'revoked';
  health_status: 'not_tested' | 'healthy' | 'degraded' | 'down';
  last_health_checked_at: string | null;
  last_health_error_class: string | null;
  config_version: number;
};

export type EntegrasyonSaglayicisi = {
  code: string;
  kind: 'sms' | 'whatsapp' | 'laboratory';
  display_name: string;
  adapter_kind: AdapterTuru;
  environments: ('sandbox' | 'production')[];
  required_config_fields: string[];
  optional_config_fields: string[];
  required_secret_fields: string[];
  capabilities: string[];
  lab_system_type: 'external_reference_lab' | 'lis_middleware' | 'in_house_analyzer' | 'manual_file_import' | null;
  lab_disciplines: string[];
};

export type IletisimAmaci = 'appointment' | 'care_reminder' | 'lab_result' | 'prescription' | 'announcement';
export type IletisimIzni = {
  id: string;
  user_id: string | null;
  offline_customer_id: string | null;
  purpose: IletisimAmaci;
  channel: 'sms' | 'whatsapp';
  state: 'allowed' | 'denied' | 'revoked';
  source: 'written' | 'import' | 'provider';
  proof_reference: string | null;
  collected_at: string;
  updated_at: string;
};

export type IletisimSablonu = {
  code: string;
  purpose: IletisimAmaci;
  channel: 'sms' | 'whatsapp';
  content_key: string;
  is_marketing: boolean;
};

export type IletisimIsi = {
  id: string;
  user_id: string | null;
  offline_customer_id: string | null;
  template_code: string;
  purpose: IletisimAmaci;
  channel: 'sms' | 'whatsapp';
  status: 'queued' | 'sending' | 'sent' | 'delivered' | 'failed' | 'cancelled';
  normalized_error: string | null;
  requested_at: string;
};

export type IletisimDogrulamasi = {
  id: string;
  user_id: string | null;
  offline_customer_id: string | null;
  channel: 'sms' | 'whatsapp';
  verified_at: string;
  expires_at: string | null;
  revoked_at: string | null;
};

export type ResmiReceteGonderimi = {
  id: string;
  prescription_id: string;
  status: 'prepared' | 'queued' | 'submitted' | 'accepted' | 'rejected' | 'cancelled';
  provider_name: string;
  external_id: string | null;
  last_error_code: string | null;
  updated_at: string;
};

async function rpc<T>(ad: string, parametre: Record<string, unknown>): Promise<T> {
  const { data, error } = await istemci.rpc(ad, parametre);
  if (error) throw guvenliHata(error, ad);
  return data as T;
}

export async function entegrasyonlariOku(klinik: string): Promise<KlinikEntegrasyonu[]> {
  const { data, error } = await istemci.from('clinic_integrations')
    .select('id,kind,status,provider_name,sender_name,requested_at,provider_code,environment,adapter_kind,base_url,public_config,secret_fields_configured,secrets_updated_at,configuration_status,health_status,last_health_checked_at,last_health_error_class,config_version')
    .eq('clinic_id', klinik);
  if (error) throw guvenliHata(error, 'entegrasyonlar');
  return (data ?? []) as KlinikEntegrasyonu[];
}

export async function entegrasyonSaglayicilariniOku(): Promise<EntegrasyonSaglayicisi[]> {
  const { data, error } = await istemci.from('integration_provider_catalog')
    .select('code,kind,display_name,adapter_kind,environments,required_config_fields,optional_config_fields,required_secret_fields,capabilities,lab_system_type,lab_disciplines')
    .eq('is_active', true).order('kind').order('sort_order');
  if (error) throw guvenliHata(error, 'entegrasyon_saglayicilari');
  return (data ?? []) as EntegrasyonSaglayicisi[];
}

export async function entegrasyonAyariniKaydet(girdi: {
  klinik: string;
  tur: 'sms' | 'whatsapp' | 'laboratory';
  saglayici: string;
  ortam: 'sandbox' | 'production';
  temelAdres?: string | null;
  genelAyarlar: Record<string, unknown>;
  sirlar: Record<string, string>;
}): Promise<string> {
  const { data, error } = await istemci.functions.invoke<{ integrationId: string }>(
    'clinic-integration-config', {
      method: 'PUT',
      body: {
        clinicId: girdi.klinik,
        kind: girdi.tur,
        providerCode: girdi.saglayici,
        environment: girdi.ortam,
        baseUrl: girdi.temelAdres ?? null,
        publicConfig: girdi.genelAyarlar,
        secrets: girdi.sirlar,
      },
    },
  );
  if (error || !data?.integrationId) throw guvenliHata(error ?? new Error('integration_setup_failed'), 'entegrasyon_ayari');
  return data.integrationId;
}

export const entegrasyonBaglantisiIste = (
  klinik: string,
  tur: EntegrasyonTuru,
  saglayici?: string | null,
  gonderen?: string | null,
) => rpc<string>('request_clinic_integration', {
  p_clinic: klinik, p_kind: tur, p_provider_name: saglayici ?? null, p_sender_name: gonderen ?? null,
});

export async function iletisimIzinleriniOku(klinik: string): Promise<IletisimIzni[]> {
  const { data, error } = await istemci.from('clinic_communication_permissions')
    .select('id,user_id,offline_customer_id,purpose,channel,state,source,proof_reference,collected_at,updated_at')
    .eq('clinic_id', klinik).order('updated_at', { ascending: false });
  if (error) throw guvenliHata(error, 'iletisim_izinleri');
  return (data ?? []) as IletisimIzni[];
}

export async function iletisimSablonlariniOku(): Promise<IletisimSablonu[]> {
  const { data, error } = await istemci.from('communication_templates')
    .select('code,purpose,channel,content_key,is_marketing').eq('is_active', true).order('code');
  if (error) throw guvenliHata(error, 'iletisim_sablonlari');
  return (data ?? []) as IletisimSablonu[];
}

export async function iletisimIsleriniOku(klinik: string): Promise<IletisimIsi[]> {
  const { data, error } = await istemci.from('clinic_communication_jobs')
    .select('id,user_id,offline_customer_id,template_code,purpose,channel,status,normalized_error,requested_at')
    .eq('clinic_id', klinik).order('requested_at', { ascending: false }).limit(50);
  if (error) throw guvenliHata(error, 'iletisim_isleri');
  return (data ?? []) as IletisimIsi[];
}

export async function iletisimDogrulamalariniOku(klinik: string): Promise<IletisimDogrulamasi[]> {
  return (await rpc<IletisimDogrulamasi[]>('get_clinic_contact_verification_states', { p_clinic: klinik })) ?? [];
}

export const iletisimIzniYaz = (girdi: {
  klinik: string;
  kullanici?: string | null;
  cevrimdisiMusteri?: string | null;
  amac: IletisimAmaci;
  kanal: 'sms' | 'whatsapp';
  durum: 'allowed' | 'denied' | 'revoked';
  kaynak: 'written' | 'import' | 'provider';
  kanit?: string | null;
}) => rpc<string>('set_clinic_communication_permission', {
  p_clinic: girdi.klinik,
  p_user: girdi.kullanici ?? null,
  p_offline_customer: girdi.cevrimdisiMusteri ?? null,
  p_purpose: girdi.amac,
  p_channel: girdi.kanal,
  p_state: girdi.durum,
  p_source: girdi.kaynak,
  p_proof_reference: girdi.kanit ?? null,
  p_collected_at: new Date().toISOString(),
});

export const iletiKuyrukla = (girdi: {
  klinik: string;
  kullanici?: string | null;
  cevrimdisiMusteri?: string | null;
  sablon: string;
  parametreler?: Record<string, string>;
  benzersizAnahtar: string;
}) => rpc<string>('enqueue_clinic_communication', {
  p_clinic: girdi.klinik,
  p_user: girdi.kullanici ?? null,
  p_offline_customer: girdi.cevrimdisiMusteri ?? null,
  p_template: girdi.sablon,
  p_params: girdi.parametreler ?? {},
  p_idempotency_key: girdi.benzersizAnahtar,
});

export const kuyruktakiIletiyiIptalEt = (is: string) =>
  rpc<null>('cancel_queued_clinic_communication', { p_job: is });

export async function resmiReceteGonderimleriniOku(klinik: string): Promise<ResmiReceteGonderimi[]> {
  const { data, error } = await istemci.from('official_prescription_submissions')
    .select('id,prescription_id,status,provider_name,external_id,last_error_code,updated_at')
    .eq('clinic_id', klinik).order('updated_at', { ascending: false });
  if (error) throw guvenliHata(error, 'resmi_recete_gonderimleri');
  return (data ?? []) as ResmiReceteGonderimi[];
}

export const resmiReceteyiHazirla = (recete: string) =>
  rpc<string>('prepare_official_prescription', { p_prescription: recete });
