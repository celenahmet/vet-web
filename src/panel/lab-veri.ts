import { guvenliHata } from './guvenli-hata';
import { istemci } from './istemci';

export type LabDurumu = 'requested' | 'accepted' | 'processing' | 'result_ready' | 'reviewed' | 'cancelled';
export type LabSistemTuru = 'external_reference_lab' | 'lis_middleware' | 'in_house_analyzer' | 'manual_file_import';
export type LabDisiplini =
  | 'hematology' | 'biochemistry' | 'urinalysis' | 'blood_gas'
  | 'coagulation' | 'endocrinology' | 'microbiology' | 'pathology';

export type LabIstemi = {
  id: string;
  pet_id: string;
  provider_name: string;
  external_request_id: string | null;
  test_name: string;
  specimen: string | null;
  status: LabDurumu;
  result_value: string | null;
  result_note: string | null;
  reviewed_at: string | null;
  panel_code: string | null;
  lab_system_type: LabSistemTuru | null;
  result_stage: 'pending' | 'partial' | 'final' | 'corrected' | 'cancelled';
  current_result_revision: number;
  created_at: string;
};

export type LabPaneli = {
  code: string;
  discipline: LabDisiplini;
  title_key: string;
  expected_analytes: string[];
  supports_text_results: boolean;
};

export type LabKalitesi = {
  request_id: string;
  panel_code: string | null;
  discipline: LabDisiplini | null;
  expected_count: number;
  received_count: number;
  missing_codes: string[];
  unexpected_codes: string[];
  unknown_codes: string[];
  below_count: number;
  above_count: number;
  text_result_count: number;
  missing_metadata_count: number;
};

export type LabAnaliti = {
  id: string;
  request_id: string;
  analyte_code: string;
  analyte_name: string;
  numeric_value: number | null;
  text_value: string | null;
  unit: string | null;
  reference_low: number | null;
  reference_high: number | null;
  provider_flag: string | null;
  method_name: string | null;
  measured_at: string;
};

export type LabAnalitGirdisi = {
  code: string;
  name: string;
  value?: number | null;
  text_value?: string | null;
  unit?: string | null;
  reference_low?: number | null;
  reference_high?: number | null;
  provider_flag?: string | null;
  method_name?: string | null;
  measured_at?: string | null;
};

export type LabSurumu = {
  id: string;
  request_id: string;
  revision: number;
  stage: 'partial' | 'final' | 'corrected';
  correction_of: string | null;
  source_kind: 'manual' | 'provider' | 'file_import' | 'image_ocr';
  created_at: string;
};

export type LabBulgusu = {
  id: string;
  finding_code: string;
  severity: 'info' | 'attention';
  confidence: 'low' | 'moderate' | 'high';
  source_codes: string[];
  evidence: Record<string, unknown>;
};

export type LabDegerlendirmesi = {
  id: string;
  request_id: string;
  revision: number;
  engine_version: string;
  status: 'draft' | 'accepted' | 'rejected';
  context_snapshot: Record<string, unknown>;
  missing_context: string[];
  generated_at: string;
  review_note: string | null;
  clinic_lab_findings: LabBulgusu[];
};

export type KlinikKaynak = {
  code: string;
  publisher: string;
  title: string;
  url: string;
  version_label: string | null;
};

export type KuralAciklamasi = {
  finding_code: string;
  rationale_key: string;
  differential_keys: string[];
  limitation_key: string;
  next_step_keys: string[];
  source_codes: string[];
  rule_version: number;
  reviewed_on: string;
};

async function rpc<T>(ad: string, parametre: Record<string, unknown>): Promise<T> {
  const { data, error } = await istemci.rpc(ad, parametre);
  if (error) throw guvenliHata(error, ad);
  return data as T;
}

export async function labIstemleriniOku(klinik: string): Promise<LabIstemi[]> {
  const { data, error } = await istemci.from('clinic_lab_requests')
    .select('id,pet_id,provider_name,external_request_id,test_name,specimen,status,result_value,result_note,reviewed_at,panel_code,lab_system_type,result_stage,current_result_revision,created_at')
    .eq('clinic_id', klinik).order('created_at', { ascending: false });
  if (error) throw guvenliHata(error, 'lab_istemleri');
  return (data ?? []) as LabIstemi[];
}

export async function labPanelleriniOku(): Promise<LabPaneli[]> {
  const { data, error } = await istemci.from('lab_panel_catalog')
    .select('code,discipline,title_key,expected_analytes,supports_text_results')
    .eq('is_active', true).order('sort_order');
  if (error) throw guvenliHata(error, 'lab_panelleri');
  return (data ?? []) as LabPaneli[];
}

export async function labKalitesiniOku(klinik: string): Promise<LabKalitesi[]> {
  const satirlar = await rpc<LabKalitesi[]>('get_lab_result_quality', { p_clinic: klinik });
  return (satirlar ?? []).map((satir) => ({
    ...satir,
    expected_count: Number(satir.expected_count),
    received_count: Number(satir.received_count),
    below_count: Number(satir.below_count),
    above_count: Number(satir.above_count),
    text_result_count: Number(satir.text_result_count),
    missing_metadata_count: Number(satir.missing_metadata_count),
  }));
}

export async function labAnalitleriniOku(klinik: string): Promise<LabAnaliti[]> {
  const { data, error } = await istemci.from('clinic_lab_observations')
    .select('id,request_id,analyte_code,analyte_name,numeric_value,text_value,unit,reference_low,reference_high,provider_flag,method_name,measured_at')
    .eq('clinic_id', klinik).order('created_at');
  if (error) throw guvenliHata(error, 'lab_analitleri');
  return ((data ?? []) as LabAnaliti[]).map((satir) => ({
    ...satir,
    numeric_value: satir.numeric_value == null ? null : Number(satir.numeric_value),
    reference_low: satir.reference_low == null ? null : Number(satir.reference_low),
    reference_high: satir.reference_high == null ? null : Number(satir.reference_high),
  }));
}

export async function labSurumleriniOku(klinik: string): Promise<LabSurumu[]> {
  const { data, error } = await istemci.from('clinic_lab_result_revisions')
    .select('id,request_id,revision,stage,correction_of,source_kind,created_at')
    .eq('clinic_id', klinik).order('revision', { ascending: false });
  if (error) throw guvenliHata(error, 'lab_surumleri');
  return (data ?? []) as LabSurumu[];
}

export async function labDegerlendirmeleriniOku(klinik: string): Promise<LabDegerlendirmesi[]> {
  const { data, error } = await istemci.from('clinic_lab_assessments')
    .select('id,request_id,revision,engine_version,status,context_snapshot,missing_context,generated_at,review_note,clinic_lab_findings(id,finding_code,severity,confidence,source_codes,evidence)')
    .eq('clinic_id', klinik).order('revision', { ascending: false });
  if (error) throw guvenliHata(error, 'lab_degerlendirmeleri');
  return (data ?? []) as unknown as LabDegerlendirmesi[];
}

export async function klinikKaynaklariniOku(): Promise<KlinikKaynak[]> {
  const { data, error } = await istemci.from('clinical_knowledge_sources')
    .select('code,publisher,title,url,version_label').eq('is_active', true).order('publisher');
  if (error) throw guvenliHata(error, 'lab_kaynaklari');
  return (data ?? []) as KlinikKaynak[];
}

export async function kuralAciklamalariniOku(): Promise<KuralAciklamasi[]> {
  const { data, error } = await istemci.from('clinical_rule_explanations')
    .select('finding_code,rationale_key,differential_keys,limitation_key,next_step_keys,source_codes,rule_version,reviewed_on')
    .eq('is_active', true).order('finding_code');
  if (error) throw guvenliHata(error, 'lab_kurallari');
  return (data ?? []) as KuralAciklamasi[];
}

export const labIstemiOlustur = (girdi: {
  klinik: string; hasta: string; saglayici: string; panel: string; sistem: LabSistemTuru;
  numune?: string | null; disKimlik?: string | null;
}) => rpc<string>('create_lab_request_v2', {
  p_clinic: girdi.klinik,
  p_pet: girdi.hasta,
  p_provider: girdi.saglayici,
  p_panel: girdi.panel,
  p_system_type: girdi.sistem,
  p_specimen: girdi.numune ?? null,
  p_external_request: girdi.disKimlik ?? null,
});

export const labDurumunuGuncelle = (girdi: {
  istem: string; durum: LabDurumu; sonucNotu?: string | null;
}) => rpc<null>('update_lab_request', {
  p_id: girdi.istem,
  p_status: girdi.durum,
  p_result_value: null,
  p_result_unit: null,
  p_reference_range: null,
  p_result_note: girdi.sonucNotu ?? null,
});

export async function labSonucSurumuKaydet(girdi: {
  istem: string;
  asama: 'partial' | 'final' | 'corrected';
  analitler: LabAnalitGirdisi[];
  duzeltme?: string | null;
  kaynak: 'manual' | 'image_ocr';
}): Promise<string> {
  const v3 = await istemci.rpc('save_lab_result_revision_v3', {
    p_request: girdi.istem, p_stage: girdi.asama, p_observations: girdi.analitler,
    p_correction_of: girdi.duzeltme ?? null, p_source_kind: girdi.kaynak,
  });
  if (!v3.error) return String(v3.data);
  if (v3.error.code !== 'PGRST202') throw guvenliHata(v3.error, 'save_lab_result_revision_v3');

  // 0190 ile v3 yayına alınana kadar yalnız fotoğrafsız v2 kapısına geri düş.
  // Yetki/validasyon/ağ hatalarında geri dönüş yapılmaz; hata görünür kalır.
  const v2 = await istemci.rpc('save_lab_result_revision_v2', {
    p_request: girdi.istem, p_stage: girdi.asama, p_observations: girdi.analitler,
    p_correction_of: girdi.duzeltme ?? null, p_source_image: null,
  });
  if (v2.error) throw guvenliHata(v2.error, 'save_lab_result_revision_v2');
  return String(v2.data);
}

export const labDegerlendirmesiUret = (istem: string) =>
  rpc<string>('generate_lab_assessment', { p_request: istem });

export const labDegerlendirmesiniIncele = (
  degerlendirme: string,
  durum: 'accepted' | 'rejected',
  not?: string | null,
) => rpc<null>('review_lab_assessment', {
  p_assessment: degerlendirme, p_status: durum, p_note: not ?? null,
});
