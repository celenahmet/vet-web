/** Yalnız şifreli web adresleri tıklanabilir dış bağlantıya dönüşür. */
export function guvenliDisWebAdresi(raw: string | null | undefined): string | null {
  const value = raw?.trim();
  if (!value) return null;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' ? parsed.href : null;
  } catch {
    return null;
  }
}
