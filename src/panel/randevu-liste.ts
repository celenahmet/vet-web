import type { Randevu } from './veri';

export type RandevuZamanFiltresi = 'all' | 'today' | 'week' | 'upcoming' | 'past';

function anahtar(deger: string | null | undefined) {
  return (deger ?? '').trim().toLocaleLowerCase('tr-TR');
}

export function randevulariFiltrele(
  liste: Randevu[],
  sorgu: string,
  zamanFiltresi: RandevuZamanFiltresi,
  simdi = new Date(),
) {
  const aranan = anahtar(sorgu);
  const bugun = simdi.toLocaleDateString('en-CA');
  const haftaninIlkGunu = new Date(simdi);
  const pazartesiFarki = (haftaninIlkGunu.getDay() + 6) % 7;
  haftaninIlkGunu.setDate(haftaninIlkGunu.getDate() - pazartesiFarki);
  haftaninIlkGunu.setHours(0, 0, 0, 0);
  const haftaninSonu = new Date(haftaninIlkGunu);
  haftaninSonu.setDate(haftaninSonu.getDate() + 7);
  return liste.filter((randevu) => {
    const zamanMetni = randevu.starts_at ?? randevu.proposed_at;
    const zaman = zamanMetni ? new Date(zamanMetni) : null;
    const tarih = zaman?.toLocaleDateString('en-CA') ?? '';
    const zamanUyuyor = zamanFiltresi === 'all'
      || (zamanFiltresi === 'today' && tarih === bugun)
      || (zamanFiltresi === 'week' && Boolean(zaman && zaman >= haftaninIlkGunu && zaman < haftaninSonu))
      || (zamanFiltresi === 'upcoming' && Boolean(zaman && zaman >= simdi))
      || (zamanFiltresi === 'past' && Boolean(zaman && zaman < simdi));
    if (!zamanUyuyor) return false;
    return !aranan || [randevu.owner_name, randevu.pet_name, randevu.service_name, randevu.note, randevu.clinic_note]
      .some((alan) => anahtar(alan).includes(aranan));
  });
}
