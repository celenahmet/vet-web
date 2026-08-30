import { guvenliHata } from './guvenli-hata';
import { istemci } from './istemci';

export type UrunTuru = 'medicine' | 'consumable' | 'retail';
export type UrunBirimi =
  | 'piece' | 'box' | 'pack' | 'bottle' | 'vial' | 'ampoule' | 'syringe'
  | 'tablet' | 'capsule' | 'dose' | 'tube' | 'can' | 'bag' | 'roll' | 'pair'
  | 'set' | 'ml' | 'l' | 'g' | 'kg';
export type IlacFormu =
  | 'tablet' | 'capsule' | 'oral_solution' | 'suspension' | 'injection'
  | 'cream' | 'ointment' | 'drops' | 'spray' | 'powder' | 'vaccine' | 'other';
export type HareketTuru =
  | 'opening' | 'purchase' | 'use' | 'sale' | 'return_in'
  | 'return_out' | 'waste' | 'count_gain' | 'count_loss';

export type StokUrunu = {
  product_id: string;
  name: string;
  kind: UrunTuru;
  internal_code: string;
  gtin: string | null;
  unit: UrunBirimi;
  lot_tracking: boolean;
  minimum_stock: number;
  internal_label: string;
  current_stock: number;
  next_expiry: string | null;
  medicine_form: IlacFormu | null;
  active_ingredient: string | null;
  strength: string | null;
  manufacturer: string | null;
  package_quantity: number;
  requires_prescription: boolean;
  expired_lot_count: number;
  expiring_lot_count: number;
};

export type StokLotu = {
  id: string;
  product_id: string;
  lot_code: string;
  expires_on: string | null;
  current_stock: number;
  expiry_status: 'expired' | 'expiring' | 'valid' | 'no_expiry';
};

export type KodEslesmesi = {
  product_id: string;
  product_name: string;
  internal_code: string;
  gtin: string | null;
  unit: UrunBirimi;
  lot_tracking: boolean;
  lot_id: string | null;
  lot_code: string | null;
  match_type: 'internal_label' | 'gtin' | 'internal_code' | 'lot_label' | 'linked_code';
  current_stock: number;
};

export type SayimOturumu = {
  id: string;
  status: 'draft' | 'completed' | 'cancelled';
  title: string | null;
  started_at: string;
  updated_at: string;
};

export type SayimSatiri = {
  id: string;
  product_id: string;
  lot_id: string | null;
  expected_quantity: number;
  counted_quantity: number;
  scan_count: number;
  last_code: string | null;
  lot_code: string | null;
};

async function rpc<T>(ad: string, parametre: Record<string, unknown>): Promise<T> {
  const { data, error } = await istemci.rpc(ad, parametre);
  if (error) throw guvenliHata(error, ad);
  return data as T;
}

export async function stokOku(klinik: string): Promise<StokUrunu[]> {
  const satirlar = await rpc<StokUrunu[]>('clinic_inventory_list_v2', { p_clinic: klinik });
  return (satirlar ?? []).map((satir) => ({
    ...satir,
    current_stock: Number(satir.current_stock),
    minimum_stock: Number(satir.minimum_stock),
    package_quantity: Number(satir.package_quantity),
    expired_lot_count: Number(satir.expired_lot_count),
    expiring_lot_count: Number(satir.expiring_lot_count),
  }));
}

export function urunKaydet(girdi: {
  klinik: string;
  id?: string | null;
  ad: string;
  icKod: string;
  tur: UrunTuru;
  birim: UrunBirimi;
  gtin?: string | null;
  lotTakibi: boolean;
  minimum: number;
  ilacFormu?: IlacFormu | null;
  etkenMadde?: string | null;
  guc?: string | null;
  uretici?: string | null;
  paketMiktari: number;
  receteli: boolean;
}): Promise<string> {
  return rpc<string>('upsert_clinic_product_v2', {
    p_clinic: girdi.klinik,
    p_name: girdi.ad,
    p_internal_code: girdi.icKod,
    p_kind: girdi.tur,
    p_unit: girdi.birim,
    p_gtin: girdi.gtin ?? null,
    p_lot_tracking: girdi.lotTakibi,
    p_minimum_stock: girdi.minimum,
    p_medicine_form: girdi.ilacFormu ?? null,
    p_active_ingredient: girdi.etkenMadde ?? null,
    p_strength: girdi.guc ?? null,
    p_manufacturer: girdi.uretici ?? null,
    p_package_quantity: girdi.paketMiktari,
    p_requires_prescription: girdi.receteli,
    p_id: girdi.id ?? null,
  });
}

export function stokHareketiKaydet(girdi: {
  klinik: string;
  urun: string;
  tur: HareketTuru;
  miktar: number;
  lot?: string | null;
  sonKullanma?: string | null;
  not?: string | null;
}): Promise<string> {
  return rpc<string>('record_inventory_movement', {
    p_clinic: girdi.klinik,
    p_product: girdi.urun,
    p_kind: girdi.tur,
    p_quantity: girdi.miktar,
    p_lot_code: girdi.lot ?? null,
    p_expires_on: girdi.sonKullanma ?? null,
    p_note: girdi.not ?? null,
    p_prescription: null,
  });
}

export async function stokLotlariOku(klinik: string, urun: string): Promise<StokLotu[]> {
  const satirlar = await rpc<StokLotu[]>('clinic_inventory_lots', { p_clinic: klinik, p_product: urun });
  return (satirlar ?? []).map((satir) => ({ ...satir, current_stock: Number(satir.current_stock) }));
}

export async function stokKodunuCoz(klinik: string, kod: string): Promise<KodEslesmesi[]> {
  const satirlar = await rpc<KodEslesmesi[]>('resolve_inventory_code', { p_clinic: klinik, p_code: kod });
  return (satirlar ?? []).map((satir) => ({ ...satir, current_stock: Number(satir.current_stock) }));
}

export function stokKodunuBagla(klinik: string, urun: string, kod: string, tur: string): Promise<string> {
  return rpc<string>('link_inventory_code', {
    p_clinic: klinik, p_product: urun, p_code: kod, p_code_type: tur,
  });
}

export async function aktifSayimiOku(klinik: string): Promise<SayimOturumu | null> {
  const { data: kimlik, error: kimlikHatasi } = await istemci.auth.getUser();
  if (kimlikHatasi) throw guvenliHata(kimlikHatasi, 'aktif_sayim_kimligi');
  if (!kimlik.user) return null;
  const { data, error } = await istemci.from('inventory_count_sessions')
    .select('id,status,title,started_at,updated_at')
    .eq('clinic_id', klinik).eq('started_by', kimlik.user.id).eq('status', 'draft')
    .order('started_at', { ascending: false }).limit(1).maybeSingle();
  if (error) throw guvenliHata(error, 'aktif_sayim');
  return data as SayimOturumu | null;
}

export async function sayimSatirlariOku(oturum: string): Promise<SayimSatiri[]> {
  const { data, error } = await istemci.from('inventory_count_entries')
    .select('id,product_id,lot_id,expected_quantity,counted_quantity,scan_count,last_code,inventory_lots(lot_code)')
    .eq('session_id', oturum).order('updated_at', { ascending: false });
  if (error) throw guvenliHata(error, 'sayim_satirlari');
  return ((data ?? []) as unknown as (Omit<SayimSatiri, 'lot_code'> & {
    inventory_lots: { lot_code: string } | null;
  })[]).map(({ inventory_lots, ...satir }) => ({
    ...satir,
    expected_quantity: Number(satir.expected_quantity),
    counted_quantity: Number(satir.counted_quantity),
    scan_count: Number(satir.scan_count),
    lot_code: inventory_lots?.lot_code ?? null,
  }));
}

export const sayimBaslat = (klinik: string) =>
  rpc<string>('start_inventory_count', { p_clinic: klinik, p_title: null });

export const sayimSatiriYaz = (girdi: {
  oturum: string; urun: string; lot?: string | null; miktar: number;
  arttir?: boolean; sonKod?: string | null;
}) => rpc<string>('set_inventory_count_entry', {
  p_session: girdi.oturum, p_product: girdi.urun, p_lot: girdi.lot ?? null,
  p_quantity: girdi.miktar, p_increment: girdi.arttir ?? false, p_last_code: girdi.sonKod ?? null,
});

export const sayimiTemizle = (oturum: string, urun?: string | null, lot?: string | null) =>
  rpc<number>('clear_inventory_count', { p_session: oturum, p_product: urun ?? null, p_lot: lot ?? null });

export const sayimiIptalEt = (oturum: string) =>
  rpc<null>('cancel_inventory_count', { p_session: oturum });

export const sayimiTamamla = (oturum: string) =>
  rpc<number>('complete_inventory_count', { p_session: oturum });
