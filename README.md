# Kişisel Site

Yazılarımı, projelerimi ve özgeçmişimi paylaştığım site. [Astro](https://astro.build) ile yapıldı,
GitHub Pages'te yayınlanıyor: https://kuzhan009.github.io

## Nasıl güncellenir?

| Ne değiştirmek istiyorum? | Hangi dosya? |
| --- | --- |
| Adım, unvanım, giriş yazısı, e-posta, sosyal medya | `src/site.ts` |
| Hakkımda: deneyim, eğitim, yetenekler | `src/pages/hakkimda.astro` |
| Yeni yazı | `src/content/blog/` içine yeni bir `.md` dosyası |
| Yeni proje | `src/content/projeler/` içine yeni bir `.md` dosyası |
| Görseller | `public/images/` klasörü (`/images/dosya.jpg` diye kullanılır) |
| Renkler ve yazı tipleri | `src/styles/global.css` |

### Yeni yazı şablonu

Dosya adı adres olur: `src/content/blog/yeni-yazim.md` → `/blog/yeni-yazim/`

```md
---
title: 'Yazının başlığı'
description: 'Kısa açıklama'
date: 2026-11-07
tags: ['etiket']
draft: false   # true yaparsanız yayınlanmaz
---

Yazınız buraya...
```

### Yeni proje şablonu

```md
---
title: 'Proje adı'
description: 'Kısa açıklama'
date: 2026-11-07
tags: ['etiket']
featured: true                       # ana sayfada öne çıkar
link: 'https://proje-adresi.com'     # isteğe bağlı
repo: 'https://github.com/...'       # isteğe bağlı
---

Proje detayları...
```

## Bilgisayarda çalıştırma

```bash
npm install
npm run dev
```

Sonra tarayıcıda http://localhost:4321 adresini açın.

## Yayınlama

Değişiklik yaptıktan sonra proje klasöründe şu komutu çalıştırın:

```bash
npm run yayinla
```

Site derlenir ve GitHub'daki `gh-pages` dalına gönderilir; 1-2 dakika içinde
https://kuzhan009.github.io adresinde güncellenir.

Kaynak kodu da GitHub'da saklamak için:

```bash
git add . && git commit -m "Yeni yazı" && git push
```
