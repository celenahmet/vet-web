/**
 * Klinik vitrini ikonları — tek dosyada, satır içi SVG.
 *
 * ⚠️ İKON PAKETİ EKLENMEDİ. Bu repoda ikon kütüphanesi yok; yedi ikon için bağımlılık
 * eklemek hem paketi büyütür hem başkasının kurduğu yapıya karışırdı. SVG'ler
 * `currentColor` kullanıyor, yani rengi kullanan yer belirliyor — koyu tema kendiliğinden
 * çalışıyor.
 *
 * ⚠️ ÖNCEKİ HÂLİ METİN KARAKTERİYDİ (☎ ✆ ✉ ◎ ve harf baloncukları). Karakterler her
 * işletim sisteminde farklı çiziliyor, bazılarında emoji olarak renkleniyor — premium
 * bir sayfada tutarsız duruyordu. Marka ikonları da harf yerine gerçek logo olmalı;
 * yoksa "Instagram" bir "I" harfi olarak görünüyor.
 */

type P = { className?: string };
const svg = (path: React.ReactNode, viewBox = '0 0 24 24') =>
  function Icon({ className }: P) {
    return (
      <svg className={className} viewBox={viewBox} aria-hidden="true" focusable="false">
        {path}
      </svg>
    );
  };

// ------------------------------------------------------------------ iletişim
export const IconPhone = svg(
  <path
    fill="currentColor"
    d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z"
  />,
);

export const IconWhatsApp = svg(
  <path
    fill="currentColor"
    d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.45 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05.02C5.5.02.16 5.35.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.48-8.4"
  />,
);

export const IconMail = svg(
  <path
    fill="currentColor"
    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5-8-5V6l8 5 8-5z"
  />,
);

export const IconPin = svg(
  <path
    fill="currentColor"
    d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5"
  />,
);

// -------------------------------------------------------------- sosyal medya
export const IconInstagram = svg(
  <path
    fill="currentColor"
    d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16m0 5.84a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2m5.34-6.94a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0"
  />,
);

export const IconFacebook = svg(
  <path
    fill="currentColor"
    d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.5 0-1.96.93-1.96 1.88v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07"
  />,
);

export const IconX = svg(
  <path
    fill="currentColor"
    d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.63 7.58H.47l8.6-9.83L0 1.15h7.59l5.25 6.93zm-1.3 19.49h2.04L6.49 3.24H4.3z"
  />,
);

export const IconTikTok = svg(
  <path
    fill="currentColor"
    d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75a7.6 7.6 0 0 1-1.35 3.94 7.36 7.36 0 0 1-5.91 3.21 7.2 7.2 0 0 1-4.08-1.03 7.56 7.56 0 0 1-3.65-5.71c-.02-.5-.03-1-.01-1.49a7.55 7.55 0 0 1 2.58-4.96 7.34 7.34 0 0 1 6.15-1.72c.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61a3.42 3.42 0 0 0 3.5 2.87 3.3 3.3 0 0 0 2.77-1.61c.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07"
  />,
);

export const IconYouTube = svg(
  <path
    fill="currentColor"
    d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.54 12 3.54 12 3.54s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81M9.55 15.57V8.43L15.82 12z"
  />,
);

export const IconLinkedIn = svg(
  <path
    fill="currentColor"
    d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13m1.78 13.02H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0"
  />,
);

export const IconGlobe = svg(
  <>
    <circle cx="12" cy="12" r="9.25" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <ellipse cx="12" cy="12" rx="4" ry="9.25" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M2.9 9h18.2M2.9 15h18.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </>,
);

// ------------------------------------------------------------------ arayüz
export const IconClose = svg(
  <path
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    d="M6 6l12 12M18 6L6 18"
  />,
);

export const IconPrev = svg(
  <path
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 5l-7 7 7 7"
  />,
);

export const IconNext = svg(
  <path
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 5l7 7-7 7"
  />,
);

export const IconCheck = svg(
  <path
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M5 12.5l4.5 4.5L19 7"
  />,
);

export const IconZoom = svg(
  <>
    <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.9" />
    <path
      d="M11 8.5v5M8.5 11h5M15.8 15.8L20.5 20.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
  </>,
);

/** Sosyal ağ anahtarı → ikon. `socialUrl` ile aynı anahtarlar. */
export const socialIcon = {
  instagram: IconInstagram,
  facebook: IconFacebook,
  x_handle: IconX,
  tiktok: IconTikTok,
  youtube: IconYouTube,
  linkedin: IconLinkedIn,
} as const;
