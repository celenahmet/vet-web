import { istemci } from './istemci';
import type { MusteriAktarimSatiri, MusteriDisAktarimSatiri, MusteriOzelAlan } from './musteri-aktarim';

export type MusteriAktarimAdayi = { id: string; name: string; phone: string | null; email: string | null; archived: boolean };
export type MusteriAktarimSorunu = { row_no: number; kind: string; message: string; candidates: MusteriAktarimAdayi[] };
export type MusteriAktarimSonucu = {
  valid: boolean; replay: boolean; plan_hash: string; batch_id?: string;
  errors: { row_no: number; message: string }[];
  warnings: { row_no: number; message: string }[];
  conflicts: MusteriAktarimSorunu[];
  summary: { rows: number; new_customers: number; updated_customers: number; skipped: number; custom_fields: number };
};

export async function musteriOzelAlanlariniOku(klinik: string): Promise<MusteriOzelAlan[]> {
  const { data, error } = await istemci.rpc('clinic_customer_custom_fields_list', { p_clinic: klinik });
  if (error) throw error;
  return (data as MusteriOzelAlan[] | null) ?? [];
}
export async function musteriAktarimListesiniOku(klinik: string): Promise<MusteriDisAktarimSatiri[]> {
  const { data, error } = await istemci.rpc('clinic_customer_export_rows', { p_clinic: klinik });
  if (error) throw error;
  return (data as MusteriDisAktarimSatiri[] | null) ?? [];
}
export async function musteriDosyasiAktar(girdi: {
  klinik: string; satirlar: MusteriAktarimSatiri[]; kesin: boolean; planHash?: string | null;
  kaynakOzeti: string; dosyaAdi: string; bicim: 'csv' | 'xlsx'; hukukiBeyan: boolean;
}): Promise<MusteriAktarimSonucu> {
  const { data, error } = await istemci.rpc('process_customer_file_import', {
    p_clinic: girdi.klinik, p_rows: girdi.satirlar, p_commit: girdi.kesin,
    p_plan_hash: girdi.planHash ?? null, p_source_digest: girdi.kaynakOzeti,
    p_source_name: girdi.dosyaAdi, p_source_format: girdi.bicim,
    p_legal_attested: girdi.hukukiBeyan,
  });
  if (error) throw error;
  return data as MusteriAktarimSonucu;
}
