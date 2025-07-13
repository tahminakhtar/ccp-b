import Breadcrumbs from '@/components/common/header/Breadcrumbs';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const AboutPage: React.FC = async () => {
  const t_membership = await getTranslations('MembershipPage');
  const c = await getTranslations('Common');
  return (
    <>
      <Breadcrumbs 
        currentPage={c('Membership')} 
      />
      <section id="about" className="section about">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="/assets/img/cc.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 order-2 order-lg-1 content">
              <h3>{ t_membership('Desc0') }</h3>
              <p>
                { t_membership('Desc1') }
              </p>
              <p>
                { t_membership('Desc2') }
              </p>
              <p>
                { t_membership('Desc3') }
              </p>
            </div>
          </div>
          <div className="row gy-4">            
            <div className="col-lg-12 order-1 order-lg-2 content">
              <h3>{ t_membership('MembershipBenefits') }</h3>
              <p className="fst-italic">{ t_membership('MembershipBenefitTitle') }</p>
              <p className="fst-italic">{ t_membership('MembershipBenefitDesc') }</p>
            </div>
            {/* <div className="col-lg-6 order-2 order-lg-1">
              <img src="/assets/img/hero-carousel/1.jpg" className="img-fluid" alt="" />
            </div> */}
          </div>
          <section id="pricing" className="pricing section">

            <div className="container" data-aos="zoom-in" data-aos-delay="100">

              <div className="row g-4">

                <div className="col-lg-4">
                  <div className="pricing-item">
                    <h3>{ t_membership('Benefits.0.Title') }</h3>
                    <div className="icon">
                      <i className="bi bi-hdd-network"></i>
                    </div>
                    <ul>
                      <li>{ t_membership('Benefits.0.Desc.0.Title') }</li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.0.Desc.0.Desc') }</span></li>
                      <li><span>{ t_membership('Benefits.0.Desc.1.Title') }</span></li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.0.Desc.1.Desc') }</span></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="pricing-item">
                    <h3>{ t_membership('Benefits.1.Title') }</h3>
                    <div className="icon">
                      <i className="bi bi-info-circle"></i>
                    </div>
                    <ul>
                      <li>{ t_membership('Benefits.1.Desc.0.Title') }</li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.1.Desc.0.Desc') }</span></li>
                      <li><span>{ t_membership('Benefits.1.Desc.1.Title') }</span></li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.1.Desc.1.Desc') }</span></li>
                      <li><span>{ t_membership('Benefits.1.Desc.2.Title') }</span></li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.1.Desc.2.Desc') }</span></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="pricing-item">
                    <h3>{ t_membership('Benefits.2.Title') }</h3>
                    <div className="icon">
                      <i className="bi bi-question-circle-fill"></i>
                    </div>
                    <ul>
                      <li>{ t_membership('Benefits.2.Desc.0.Title') }</li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.2.Desc.0.Desc') }</span></li>
                      <li><span>{ t_membership('Benefits.2.Desc.1.Title') }</span></li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.2.Desc.1.Desc') }</span></li>
                      <li><span>{ t_membership('Benefits.2.Desc.2.Title') }</span></li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.2.Desc.2.Desc') }</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <div className="pricing-item">
                    <h3>{ t_membership('Benefits.3.Title') }</h3>
                    <div className="icon">
                      <i className="bi bi-box"></i>
                    </div>
                    <ul>
                      <li>{ t_membership('Benefits.3.Desc.0.Title') }</li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.3.Desc.0.Desc') }</span></li>
                      <li><span>{ t_membership('Benefits.3.Desc.1.Title') }</span></li>
                      <li><i className="bi bi-check"></i> <span>{ t_membership('Benefits.3.Desc.1.Desc') }</span></li>
                    </ul>
                  </div>
                </div>
              </div> 
            </div>

          </section>
          <div className="row gy-4">            
            <div className="col-lg-12 content">
              <h4 className="fst-italic">{ t_membership('MembershipBenefitsSummary') }</h4>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default AboutPage;