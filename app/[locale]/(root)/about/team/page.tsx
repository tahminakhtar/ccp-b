import Breadcrumbs from '@/components/common/header/Breadcrumbs';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const AboutPage: React.FC = async () => {
  const c = await getTranslations('Common');
  return (
    <>
      <Breadcrumbs 
        currentPage={ c('Team') } 
        parents={[
          { title: 'About', href: '/about' }
        ]}
      />
      <section id="team" className="team section">

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/person/jibon.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Mohammad Jibon</h4>
                  <span>PRESIDENT</span>
                  <p>Chamber of Commerce <br/> Portugal Bangladesh</p>
                  <div className="social">
                    <a href="mailto:president@ccp-b.com"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/person/abdul.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>ABDUL AHAD SALMAN</h4>
                  <span>SECRETARY GENERAL</span>
                  <p>Chamber of Commerce <br/> Portugal Bangladesh</p>
                  <div className="social">
                    <a href="mailto:secretarygeneral@ccp-b.com"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/person/mir.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>MIR MD SHAHARUZZAMAN</h4>
                  <span>PRESIDENT GENERAL ASSEMBLY</span>
                  <p>Chamber of Commerce <br/> Portugal Bangladesh</p>
                  <div className="social">
                    <a href="mailto:presidentgeneralassembly@ccp-b.com"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/person/jamal.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>MOHAMMED JAMAL UDDIN</h4>
                  <span>VICE PRESIDENT</span>
                  <p>Chamber of Commerce <br/> Portugal Bangladesh</p>
                  <div className="social">
                    <a href="mailto:vicepresident@ccp-b.com"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/person/pedro.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>PEDRO JORGE PIRES</h4>
                  <span>EXECUTIVE DIRECTOR</span>
                  <p>Chamber of Commerce <br/> Portugal Bangladesh</p>
                  <div className="social">
                    <a href="mailto:pedropires@ccp-b.com"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/person/abdur.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>MD ABDUR ROUF</h4>
                  <span>OPERATIONS MANAGER</span>
                  <p>Chamber of Commerce <br/> Portugal Bangladesh</p>
                  <div className="social">
                    <a href="mailto:abdur.rouf@ccp-b.com"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>{/* End Team Member */}
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="/assets/img/person/anowar.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>MIR ANOWAR HOSSAIN</h4>
                  <span>INTERNATIONAL TRADE LOGISTICS COORDINATOR</span>
                  <p>Chamber of Commerce <br/> Portugal Bangladesh</p>
                  <div className="social">
                    <a href="mailto:miranowarhossain@ccp-b.com"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Team Member */}

          </div>

        </div>

      </section>
    </>
  );
};

export default AboutPage;