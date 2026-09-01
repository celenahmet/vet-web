type AranabilirHasta = {
  pet_name: string | null;
  owner_name: string | null;
};

/**
 * Reçete seçiminde hasta ile sahibini aynı arama yüzeyinde bulur.
 * `tr-TR` özellikle I/İ dönüşümünde önemlidir; klinik adlarında tarayıcının
 * varsayılan İngilizce küçük harf dönüşümüne güvenilmez.
 */
export function receteHastalariniFiltrele<T extends AranabilirHasta>(hastalar: T[], sorgu: string): T[] {
  const arama = sorgu.trim().toLocaleLowerCase('tr-TR');
  if (!arama) return hastalar;
  return hastalar.filter((satir) =>
    `${satir.pet_name ?? ''} ${satir.owner_name ?? ''}`
      .toLocaleLowerCase('tr-TR')
      .includes(arama),
  );
}
