import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const home = await getTranslations('HomePage');
  const c = await getTranslations('Common');
  return (
    <div className='index-page'>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div
            id="hero-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval={5000}
          >
            <div className="carousel-item active">
              <img src="/assets/img/hero-carousel/0.jpg" alt="" />
              <div className="carousel-container">
                <h2>
                  { home('WelcomeTo') } <span>{ c('CCPB') }</span>
                </h2>
                <h3>{ c('ChamberofCommerce') }</h3>
                <h3>{ c('PortugalBangladesh') }</h3>
                <p>{ c('Slogan') }</p>
                <a href="about.php" className="btn-get-started">
                  { home('GetStarted') }
                </a>
              </div>
            </div>
            {/* End Carousel Item */}
            <div className="carousel-item">
              <img src="/assets/img/hero-carousel/1.jpg" alt="" />
              <div className="carousel-container">
                <h3>{ c('ChamberofCommerce') } { c('PortugalBangladesh') }</h3>
                <p>
                 { home('Courasel.0') }
                </p>
                <a href="about.php" className="btn-get-started">
                  { home('GetStarted') }
                </a>
              </div>
            </div>
            {/* End Carousel Item */}
            <div className="carousel-item">
              <img src="/assets/img/hero-carousel/3.png" alt="" />
              <div className="carousel-container">
                <h3>{ c('ChamberofCommerce') } { c('PortugalBangladesh') }</h3>
                <p>
                  { home('Courasel.0') }
                </p>
                <a href="about.html" className="btn-get-started">
                  { home('GetStarted') }
                </a>
              </div>
            </div>
            {/* End Carousel Item */}
            <a
              className="carousel-control-prev"
              href="#hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              />
            </a>
            <a
              className="carousel-control-next"
              href="#hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="featured container">
            <div className="row gy-4">
              <div
                className="col-lg-4 d-flex"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="featured-item position-relative">
                  <div className="icon">
                    <i className="bi bi-person icon" />
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      { home('Featured.0.Title') }
                    </a>
                  </h4>
                  <p>
                    { home('Featured.0.Desc') }
                  </p>
                </div>
              </div>
              {/* End Featured Item */}
              <div
                className="col-lg-4 d-flex"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="featured-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-text icon" />
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      { home('Featured.1.Title') }
                    </a>
                  </h4>
                  <p>
                    { home('Featured.1.Desc') }
                  </p>
                </div>
              </div>
              {/* End Featured Item */}
              <div
                className="col-lg-4 d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="featured-item position-relative">
                  <div className="icon">
                    <i className="bi bi-star icon" />
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      { home('Featured.2.Title') }
                    </a>
                  </h4>
                  <p>
                    { home('Featured.2.Desc') }
                  </p>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* About Section */}
        <section id="about" className="section about">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="/assets/img/cc.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 order-2 order-lg-1 content">
                <h3>{ home('WhoWeAre.Title') }</h3>
                <p className="fst-italic">
                  { home('WhoWeAre.Desc1') }
                </p>
                <p className="fst-italic">
                  { home('WhoWeAre.Desc2') }
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}
      </main>

    </div>
  );
}
