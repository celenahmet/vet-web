/**
 * ⚠️ UZANTILAR ACIKCA YAZILI (27.08.2026). Bu modul artik yalniz tarayicida
 * degil, `scripts/prerender.mjs` icinde NODE tarafindan da yukleniyor (hukuki
 * sayfalarin on-cizimi icin). Node'un ESM cozumleyicisi uzantisiz goreli
 * import'u cozmuyor ve bu iki satir DEGER import'u, yani tip soymayla silinmiyor.
 * `allowImportingTsExtensions` iki tsconfig'de de acik, Vite de bunu kaldiriyor.
 */
import { legalDocumentsEN } from './en.ts';
import { legalDocumentsTR } from './tr.ts';
import type { LegalDocument, LegalDocumentId, LegalDocumentSet } from './types';

export type { LegalBlock, LegalDocument, LegalDocumentId, LegalSection } from './types';
export { LEGAL_CONTACT_EMAIL, LEGAL_DOCUMENT_ORDER, LEGAL_PRODUCT_NAME } from './types.ts';

export type LegalLocale = 'tr' | 'en';

const setler: Record<LegalLocale, LegalDocumentSet> = {
  tr: legalDocumentsTR,
  en: legalDocumentsEN,
};

/**
 * i18next dil kodunu belge diline indirger.
 *
 * ⚠️ `i18n.language` "tr-TR" ya da "en-GB" gelebiliyor. Doğrudan indeks olarak
 * kullanılsaydı belge kümesi `undefined` döner ve sayfa boş açılırdı. Tanımadığımız
 * her dil Türkçeye düşüyor: Türkçe metin bu belgelerin ASIL sürümü.
 */
export const legalLocale = (language: string | undefined): LegalLocale =>
  (language ?? '').toLowerCase().startsWith('en') ? 'en' : 'tr';

export const getLegalDocuments = (locale: LegalLocale): LegalDocumentSet => setler[locale];

export const getLegalDocument = (id: LegalDocumentId, locale: LegalLocale): LegalDocument =>
  setler[locale][id];

/**
 * Adres yolundan belge bulur.
 *
 * ⚠️ ESKİ ADRESLER KORUNUYOR. `/deletion` mağaza formlarına verilmiş olabilir;
 * çalışmayı bırakırsa Google Play'in hesap silme bağlantısı kırılır ve bu doğrudan
 * bir red sebebidir. Yeni adres `/account-deletion`, eskisi ona eş.
 */
const ESKI_ADRESLER: Record<string, LegalDocumentId> = {
  '/deletion': 'account-deletion',
  '/account-deletion-request': 'account-deletion',
  '/kvkk-aydinlatma': 'kvkk',
  '/gizlilik': 'privacy',
  '/cerez': 'cookies',
};

export const findLegalDocumentByPath = (
  pathname: string,
  locale: LegalLocale,
): LegalDocument | null => {
  // Sondaki eğik çizgi adresi bozmasın: `/privacy/` ile `/privacy` aynı sayfa.
  const yol = pathname.replace(/\/+$/, '') || '/';
  const set = setler[locale];

  const eslesen = Object.values(set).find((belge) => belge.slug === yol);
  if (eslesen) return eslesen;

  const eski = ESKI_ADRESLER[yol];
  return eski ? set[eski] : null;
};

/** Rotalara bağlanacak tüm adresler: güncel yollar + geriye dönük eşler. */
export const ALL_LEGAL_PATHS: string[] = [
  ...Object.values(legalDocumentsTR).map((belge) => belge.slug),
  ...Object.keys(ESKI_ADRESLER),
];
