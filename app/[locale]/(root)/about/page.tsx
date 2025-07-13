import Breadcrumbs from '@/components/common/header/Breadcrumbs';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const AboutPage: React.FC = async () => {
  const t_about = await getTranslations('AboutPage');
  const c = await getTranslations('Common');
  return (
    <>
      <Breadcrumbs 
        currentPage={c('About')} 
      />
      <section id="about" className="section about">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="/assets/img/cc.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 order-2 order-lg-1 content">
              <h3>{ c('ChamberofCommerce') } { c('PortugalBangladesh') }</h3>
              <p className="fst-italic">
                { t_about('WhoWeAre.Desc1') }
              </p>
              <p className="fst-italic">
                { t_about('WhoWeAre.Desc2') }
              </p>
            </div>
          </div>

        </div>

      </section>
    </>
  );
};

export default AboutPage;