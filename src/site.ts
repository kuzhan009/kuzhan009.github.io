// Sitenin genel bilgileri. Kendi bilgilerinizi buraya yazın.
export const SITE = {
  name: 'Adınız Soyadınız',
  role: 'Mesleğiniz / Unvanınız',
  title: 'Adınız Soyadınız',
  description: 'Yazılar, projeler ve mesleki deneyimlerim.',
  intro:
    'Merhaba! Burası kişisel sitem. İlgi duyduğum konular hakkında yazılar yazıyor, üzerinde çalıştığım projeleri paylaşıyorum.',
  email: 'ornek@eposta.com',
  location: 'Şehir, Türkiye',
  social: [
    { label: 'GitHub', url: 'https://github.com/kuzhan009' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
};

export function formatDate(date: Date) {
  return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}
