type FiltrelenebilirDuyuru = {
  body: string | null;
  audience: string | null;
  status: string | null;
  delivery_kind: string;
  target_city: string | null;
  target_species: string | null;
};

export type DuyuruFiltreleri = {
  arama: string;
  durum: string;
  teslim: string;
};

function aramaAnahtari(deger: string | null | undefined) {
  return (deger ?? '').trim().toLocaleLowerCase('tr-TR');
}

export function duyurulariFiltrele<T extends FiltrelenebilirDuyuru>(
  duyurular: T[],
  filtreler: DuyuruFiltreleri,
  kitleAdlari: Record<string, string>,
  turAdlari: Record<string, string>,
): T[] {
  const aranan = aramaAnahtari(filtreler.arama);
  return duyurular.filter((duyuru) => {
    if (filtreler.durum !== 'all' && duyuru.status !== filtreler.durum) return false;
    if (filtreler.teslim !== 'all' && duyuru.delivery_kind !== filtreler.teslim) return false;
    if (!aranan) return true;

    const kitleAdi = duyuru.audience ? kitleAdlari[duyuru.audience] : '';
    const turAdi = duyuru.target_species ? turAdlari[duyuru.target_species] : '';
    return [duyuru.body, duyuru.target_city, duyuru.target_species, turAdi, kitleAdi]
      .some((alan) => aramaAnahtari(alan).includes(aranan));
  });
}
