/**
 * Hukuki belgelerin veri modeli.
 *
 * ⚠️ METİN HAM HTML DEĞİL, YAPILANDIRILMIŞ BLOK. Belgeler `dangerouslySetInnerHTML` ile
 * basılsaydı her metin düzenlemesi bir XSS yüzeyi açardı ve çeviri dosyasına yanlışlıkla
 * yapıştırılan bir etiket sayfayı bozardı. Bloklar React düğümüne çevriliyor; metin
 * içinde yalnız iki işaret tanınıyor (`**kalın**` ve `` `kod` ``), gerisi düz metin.
 *
 * ⚠️ BELGELER ÜRÜNÜN KENDİSİ, dokümantasyon değil. Uygulamada ve mağaza listelemesinde
 * bu adreslere bağlantı veriliyor; metin değişirse yürürlük tarihi de değişir.
 */

export type LegalDocumentId =
  | 'privacy'
  | 'kvkk'
  | 'consent'
  | 'terms'
  | 'service-agreement'
  | 'cookies'
  | 'account-deletion'
  | 'child-safety';

export type LegalBlock =
  | { kind: 'text'; value: string }
  | { kind: 'list'; items: string[] }
  /** Sıralı adım listesi — hesap silme gibi "önce şunu yap" anlatımları için. */
  | { kind: 'steps'; items: string[] }
  /** Vurgulu kutu: uyarı ya da özet. Sayfanın geri kalanından ayrılır. */
  | { kind: 'callout'; value: string }
  | { kind: 'table'; columns: string[]; rows: string[][] };

export interface LegalSection {
  /** Kaynak belgedeki numaralandırma: '1', '2.1' gibi. */
  number?: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  id: LegalDocumentId;
  /** Adres yolu — `/privacy`, `/account-deletion`. Tek kaynak burası. */
  slug: string;
  title: string;
  /** Toplu sayfadaki kartın altına yazılan tek cümle. */
  summary: string;
  /** Yürürlük tarihi. Metin değişirse bu da değişir. */
  effectiveDate: string;
  intro: LegalBlock[];
  sections: LegalSection[];
  closing?: LegalBlock[];
  related: LegalDocumentId[];
  /**
   * Zorunlu belge mi?
   *
   * ⚠️ `false` olan belge toplu sayfada AYRI bir başlık altında listeleniyor. Çocuk
   * güvenliği metni bugün için opsiyonel: uygulama çocuklara yönelik değil ve mağaza
   * beyanında da öyle işaretlenecek. Metni yine de yayımlıyoruz — Google Play'in
   * çocuk güvenliği standartları politikası, çocuklara yönelik OLMAYAN uygulamalardan
   * da bir beyan isteyebiliyor ve o an hazır olmak, o an yazmaktan iyidir.
   */
  required: boolean;
}

export type LegalDocumentSet = Record<LegalDocumentId, LegalDocument>;

/** Toplu sayfadaki ve alt bilgideki sıra. Önce en çok okunan. */
export const LEGAL_DOCUMENT_ORDER: LegalDocumentId[] = [
  'privacy',
  'kvkk',
  'consent',
  'terms',
  'service-agreement',
  'cookies',
  'account-deletion',
  'child-safety',
];

/**
 * Hukuki başvuru adresi.
 *
 * ⚠️ Sitenin genel iletişim adresinden (`brandConfig.social.contactEmail`) AYRI
 * tutuluyor: hukuki başvurunun tek ve değişmez bir adresi olmalı, pazarlama
 * sayfasındaki iletişim kutusu zamanla değişebilir.
 */
export const LEGAL_CONTACT_EMAIL = 'info@veterito.com';

/** Metinlerde geçen ürün adı. Tek yerden okunuyor ki belgeler ayrışmasın. */
export const LEGAL_PRODUCT_NAME = 'Veterito';
