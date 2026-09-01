export type SahiplendirmeSiralama = 'newest' | 'oldest' | 'applications' | 'title';

type FiltrelenebilirIlan = {
  id: string;
  title: string | null;
  species_code: string | null;
  status: string | null;
  created_at: string;
  city: string | null;
  district: string | null;
};

type IlanBasvurusu = { listing_id: string };

export type SahiplendirmeFiltreleri = {
  arama: string;
  durum: string;
  tur: string;
  siralama: SahiplendirmeSiralama;
};

/** Türkçe I/İ ayrımını kaybetmeden kullanıcı girdisini arama anahtarına çevirir. */
function aramaAnahtari(deger: string | null | undefined) {
  return (deger ?? '').trim().toLocaleLowerCase('tr-TR');
}

export function sahiplendirmeIlanlariniFiltreleSirala<T extends FiltrelenebilirIlan>(
  ilanlar: T[],
  basvurular: IlanBasvurusu[],
  filtreler: SahiplendirmeFiltreleri,
  turAdlari: Record<string, string>,
): T[] {
  const aranan = aramaAnahtari(filtreler.arama);
  const basvuruSayilari = new Map<string, number>();
  for (const basvuru of basvurular) {
    basvuruSayilari.set(basvuru.listing_id, (basvuruSayilari.get(basvuru.listing_id) ?? 0) + 1);
  }

  const sonuc = ilanlar.filter((ilan) => {
    if (filtreler.durum !== 'all' && ilan.status !== filtreler.durum) return false;
    if (filtreler.tur !== 'all' && ilan.species_code !== filtreler.tur) return false;
    if (!aranan) return true;

    const turAdi = ilan.species_code ? turAdlari[ilan.species_code] : '';
    return [ilan.title, ilan.city, ilan.district, turAdi, ilan.species_code]
      .some((alan) => aramaAnahtari(alan).includes(aranan));
  });

  return sonuc.sort((a, b) => {
    if (filtreler.siralama === 'oldest') {
      return Date.parse(a.created_at) - Date.parse(b.created_at);
    }
    if (filtreler.siralama === 'applications') {
      const fark = (basvuruSayilari.get(b.id) ?? 0) - (basvuruSayilari.get(a.id) ?? 0);
      return fark || Date.parse(b.created_at) - Date.parse(a.created_at);
    }
    if (filtreler.siralama === 'title') {
      return (a.title ?? '').localeCompare(b.title ?? '', 'tr-TR', { sensitivity: 'base' });
    }
    return Date.parse(b.created_at) - Date.parse(a.created_at);
  });
}
