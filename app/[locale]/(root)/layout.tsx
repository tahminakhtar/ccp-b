import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import Script from 'next/script';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <head>
        {/* Template CSS */}
        {/* Favicons */}
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        {/* Vendor CSS Files */}
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />

        {/* Main CSS File */}
        <link href="/assets/css/main.css" rel="stylesheet" />
      </head>
      <NextIntlClientProvider>
      <body>
          <Header />
          {children}
          {/* Footer can be added here if needed */}
          <Footer />
          <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* Preloader */}
        {/* <div id="preloader"></div> */}
       
        {/* Scroll Top */}
        

        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="/assets/vendor/php-email-form/validate.js" />
        <Script src="/assets/vendor/aos/aos.js" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" />
        <Script src="/assets/vendor/waypoints/noframework.waypoints.js" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" />

        {/* Main JS File */}
        <script src="/assets/js/main.js"></script>
      </body>
       </NextIntlClientProvider>
    </html>
  );
}