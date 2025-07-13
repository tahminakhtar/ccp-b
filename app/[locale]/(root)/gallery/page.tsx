import Breadcrumbs from '@/components/common/header/Breadcrumbs';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const GalleryPage: React.FC = async () => {
  const t_gallery = await getTranslations('GalleryPage');
  const c = await getTranslations('Common');
  return (
    <>
      <Breadcrumbs 
        currentPage={c('Gallery')} 
      />
      <section id="portfolio" className="portfolio section">

        <div className="container">

          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img src={ t_gallery('Galleries.0.Src') } className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href={ t_gallery('Galleries.0.Src') } title={ t_gallery('Galleries.0.Title') } data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>                  
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img src={ t_gallery('Galleries.1.Src') } className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href={ t_gallery('Galleries.1.Src') } title={ t_gallery('Galleries.1.Title') } data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img src={ t_gallery('Galleries.2.Src') } className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href={ t_gallery('Galleries.2.Src') } title={ t_gallery('Galleries.2.Title') } data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img src={ t_gallery('Galleries.3.Src') } className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href={ t_gallery('Galleries.3.Src') } title={ t_gallery('Galleries.3.Title') } data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img src={ t_gallery('Galleries.4.Src') } className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href={ t_gallery('Galleries.4.Src') } title={ t_gallery('Galleries.4.Title') } data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img src={ t_gallery('Galleries.5.Src') } className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href={ t_gallery('Galleries.5.Src') } title={ t_gallery('Galleries.5.Title') } data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img src={ t_gallery('Galleries.6.Src') }  className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href={ t_gallery('Galleries.6.Src') }  title={ t_gallery('Galleries.6.Title') } data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default GalleryPage;