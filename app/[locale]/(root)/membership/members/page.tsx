import Breadcrumbs from '@/components/common/header/Breadcrumbs';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const MembersPage: React.FC = async () => {
  const c = await getTranslations('Common');
  const t_members = await getTranslations('MembersPage');
  return (
    <>
      <Breadcrumbs 
        currentPage={ c('Members') } 
        parents={[
          { title: 'Membership', href: '/membership/members' }
        ]}
      />
      <section id="team" className="team section">

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/member/cardinal.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>{ t_members('Members.0.Name') }</h4>
                  <span>{ t_members('Members.0.Organization') }</span>
                  <div className="social">
                    <a href="mailto:cardinallanguageprogram@ccp-b.com"><i className="bi bi-envelope"></i></a>
                    <a href="https://facebook.com/CardinalLanguageProgram"><i className="bi bi-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/member/landmark.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                 <h4>{ t_members('Members.1.Name') }</h4>
                  <span>{ t_members('Members.1.Organization') }</span>
                  <div className="social">
                    <a href="mailto:support@landmarkpropertyeurope.com"><i className="bi bi-envelope"></i></a>
                     <a href="https://www.facebook.com/landmarkpropertyeuropep"><i className="bi bi-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/member/fastsuccess.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>{ t_members('Members.2.Name') }</h4>
                  <span>{ t_members('Members.2.Organization') }</span>
                  <div className="social">
                    <a href="mailto:fastsuccesslda@gmail.com"><i className="bi bi-envelope"></i></a>
                     <a href="https://www.facebook.com/landmarkpropertyeuropep"><i className="bi bi-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/member/coxair.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>{ t_members('Members.3.Name') }</h4>
                  <span>{ t_members('Members.3.Organization') }</span>
                  <div className="social">
                    <a href="mailto:coxair23@gmail.com"><i className="bi bi-envelope"></i></a>
                     <a href="https://www.facebook.com/Coxairtravel"><i className="bi bi-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/member/coxmoney.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>{ t_members('Members.4.Name') }</h4>
                  <span>{ t_members('Members.4.Organization') }</span>
                  <div className="social">
                    <a href="mailto:coxair23@gmail.com"><i className="bi bi-envelope"></i></a>
                     <a href="https://www.facebook.com/profile.php?id=61552038615368"><i className="bi bi-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/member/coxmart.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>{ t_members('Members.5.Name') }</h4>
                  <span>{ t_members('Members.5.Organization') }</span>
                  <div className="social">
                    <a href="mailto:coxmart23@gmail.com"><i className="bi bi-envelope"></i></a>
                     <a href="https://www.facebook.com/coxmartunipessoallda"><i className="bi bi-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
          </div>

        </div>

      </section>
    </>
  );
};

export default MembersPage;