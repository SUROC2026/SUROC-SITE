# Sabancı Üniversitesi Roket Takımı (SUROC) - Web Sitesi

Sabancı Üniversitesi Roket Takımı'nın (SUROC) resmi web sitesi kaynak kodları. Takım tanıtımı, roket projesi (GÖKSU), takım yapısı, sponsorluklar ve iletişim bilgilerini içeren modern ve yüksek performanslı statik web sitesi.

## Özellikler

- **Tasarım:** Derin uzay ve havacılık konseptli, koyu antrasit ve transparan koyu kırmızı (*crimson*) filtreli modern arayüz.
- **Performans & Optimizasyon:** `.webp` ve `.svg` formatlarında optimize edilmiş görsel varlıklar, sıfır CLS (Cumulative Layout Shift) ve akıcı animasyonlar.
- **Erişilebilirlik & Uyumluluk:** WCAG 2.1 AA uyumlu odak halkaları (`:focus-visible`), masaüstü, tablet ve mobil cihazlar için tam duyarlı (*responsive*) tasarım.
- **SEO & Sosyal Paylaşım:** Open Graph, Twitter Cards ve tema rengi meta etiketleri.

## Klasör Yapısı

```
SUROC-SITE/
├── assets/
│   ├── branding/       # Takım logosu ve favicon
│   ├── carousel/       # Zirve ve etkinlik görselleri (WebP)
│   ├── departments/    # Takım departman kart görselleri (WebP)
│   ├── hero/           # Hero arka plan uzay görseli (WebP)
│   ├── rocket/         # GÖKSU roket modeli görseli (WebP)
│   └── sponsors/       # Sponsor ve destekçi logoları (PNG)
├── css/
│   ├── custom.css      # Projeye özel tema stilleri ve responsive kurallar
│   └── styles.css      # Bootstrap 5.2.3 çekirdek kütüphanesi
├── js/
│   └── scripts.js      # ScrollSpy, navbar scroll efektleri ve sayaç animasyonları
├── index.html          # Ana sayfa
└── README.md           # Proje dokümantasyonu
```

## Yerel Geliştirme

Projeyi yerel bilgisayarınızda çalıştırmak için herhangi bir statik sunucu kullanabilirsiniz:

```bash
# Python ile:
python -m http.server 8000

# Node.js ile (npx serve):
npx serve .
```

Ardından tarayıcınızda `http://localhost:8000` adresini açabilirsiniz.