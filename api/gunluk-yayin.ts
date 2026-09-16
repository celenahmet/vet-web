export const config = { runtime: 'edge' };
// ============================================================================
// GET /api/gunluk-yayin — Vercel Cron: tarihi gelen blog yazılarını canlıya alır
//
// ── NEDEN VAR (16.09.2026) ─────────────────────────────────────────────────
// Veterito sitesi statik. Bir yazının `tarih` alanı bugüne gelse bile, o gün
// yeni bir build alınmadıkça yayına girmiyor. Bugüne kadar blogun takvimi de
// yoktu: dosya eklendiği an çıkıyordu, bu yüzden "her gün bir yazı" ancak elle
// commit atarak yürüyordu ve 31 Ağustos'tan beri blog durdu.
//
// Desen UniConnectly'de çalışıyor (orada 68 yazılık kuyruk bu kancayla akıyor);
// aynısı buraya taşındı, yeni bir sunucu türü açılmadı.
//
// ── GÜVENLİK ────────────────────────────────────────────────────────────────
// Yalnız Vercel'in cron çağrısı kabul edilir: `CRON_SECRET` tanımlıysa Vercel
// isteği `Authorization: Bearer <CRON_SECRET>` ile gönderir, eşleşmezse 401.
// Secret ya da hook yoksa uç FAIL-CLOSED: deploy tetiklemez, 503 döner ve neyin
// eksik olduğunu söyler. Deploy Hook adresi ortam değişkeninde, depoda değil.
//
// ── KURULUM (tek seferlik, Ahmet) ───────────────────────────────────────────
//   Vercel → Project (veterito) → Settings → Environment Variables (Production):
//     VERCEL_DEPLOY_HOOK = <Deploy Hooks'ta açılan "gunluk-yayin" URL'i>
//     CRON_SECRET        = <rastgele uzun dize: openssl rand -hex 32>
//   Sonra bir kez deploy. Zamanlama vercel.json `crons` içinde.
//
// ── ELLE TETİKLEME ──────────────────────────────────────────────────────────
//   curl -H "Authorization: Bearer $CRON_SECRET" https://veterito.com/api/gunluk-yayin
// ============================================================================
//
// ⚠️ ORTAM DEGISKENI EKLENDIKTEN SONRA TAZE DERLEME SART (16.09.2026 olculdu).
// Degiskenler Vercel'de eklendikten sonra "Redeploy" yapildi ama uc hala
// `503 eksik: CRON_SECRET, VERCEL_DEPLOY_HOOK` donuyordu. Sebep derleme
// onbellegi: Edge fonksiyonunun paketi yeniden uretilmezse degiskenler
// gomulmuyor. Cozum: onbelleksiz redeploy ya da yeni bir commit.
export default async function handler(req: Request): Promise<Response> {
  const secret = process.env.CRON_SECRET;
  const hook = process.env.VERCEL_DEPLOY_HOOK;

  if (!secret || !hook) {
    const eksik = [!secret && 'CRON_SECRET', !hook && 'VERCEL_DEPLOY_HOOK'].filter(Boolean);
    console.error(`gunluk-yayin: ortam degiskeni eksik: ${eksik.join(', ')} -- takvim ISLEMIYOR`);
    return new Response(`eksik: ${eksik.join(', ')}`, { status: 503 });
  }

  if ((req.headers.get('authorization') ?? '') !== `Bearer ${secret}`) {
    return new Response('yetkisiz', { status: 401 });
  }

  const cevap = await fetch(hook, { method: 'POST' });
  if (!cevap.ok) {
    const govde = await cevap.text().catch(() => '');
    console.error(`gunluk-yayin: deploy hook HTTP ${cevap.status}: ${govde.slice(0, 200)}`);
    return new Response(`deploy tetiklenemedi (HTTP ${cevap.status})`, { status: 502 });
  }
  console.log(`gunluk-yayin: deploy tetiklendi (HTTP ${cevap.status})`);
  return new Response('deploy tetiklendi', { status: 200 });
}
