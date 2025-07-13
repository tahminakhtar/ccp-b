import Breadcrumbs from '@/components/common/header/Breadcrumbs';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const ContactPage: React.FC = async () => {
  const c = await getTranslations('Common');
  return (
    <>
      <Breadcrumbs 
        currentPage={c('Contact')} 
      />
      <section id="about" className="section about">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">
            <div className="col-lg-12 order-1 order-lg-2 text-center">
              <img src="/assets/img/commingsoon.png" className="img-fluid" alt="" />
            </div>
          </div>

        </div>

      </section>
    </>
  );
};

export default ContactPage;