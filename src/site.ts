// Sitenin genel bilgileri. Kendi bilgilerinizi buraya yazın.
export const SITE = {
  name: 'Ahmet Kuzhan',
  role: 'Elektrik-Elektronik Mühendisi',
  title: 'Ahmet Kuzhan',
  description: 'Ahmet Kuzhan – Elektrik-Elektronik Mühendisi. Yazılar, projeler ve mesleki deneyim.',
  // Ana sayfadaki kısa tanıtım. Boş bırakılırsa gösterilmez.
  intro: '',
  email: 'ahmetkuzhan009@icloud.com',
  // LinkedIn, Instagram vb. buraya eklenir: { label: 'LinkedIn', url: 'https://...' }
  social: [{ label: 'GitHub', url: 'https://github.com/kuzhan009' }],
};

export function formatDate(date: Date) {
  return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}
