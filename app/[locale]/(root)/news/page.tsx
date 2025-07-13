import Breadcrumbs from '@/components/common/header/Breadcrumbs';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const NewsPage: React.FC = async () => {
  const t_news = await getTranslations('NewsPage');
  const c = await getTranslations('Common');
  return (
    <>
      <Breadcrumbs 
        currentPage={c('News')} 
      />               
      <section id="blog-posts" className="blog-posts section">

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-4">
              <article>

                <div className="post-img">
                  <img src="https://placehold.jp/500x300.png" alt="" className="img-fluid" />
                </div>

                <h2 className="title">
                  <a href="blog-details.html">{ t_news('NewsList.0.Title') }</a>
                </h2>

                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">{ t_news('NewsList.0.Source') }</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time dateTime="2022-01-01">{ t_news('NewsList.0.Date') }</time></a></li>
                  </ul>
                </div>

                <div className="content">
                  <p>
                    { t_news('NewsList.0.Content') }
                  </p>

                  <div className="read-more">
                    <a href="/news/details">{ c('ReadMore') }</a>
                  </div>
                </div>

              </article>
            </div>

            <div className="col-lg-4">

              <article>

                <div className="post-img">
                  <img src="https://placehold.jp/500x300.png" alt="" className="img-fluid" />
                </div>

                <h2 className="title">
                  <a href="blog-details.html">{ t_news('NewsList.1.Title') }</a>
                </h2>
                {/* <div className="category-meta">
                  <span className="post-category">Health</span>
                </div> */}

                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">{ t_news('NewsList.1.Source') }</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time dateTime="2022-01-01">{ t_news('NewsList.1.Date') }</time></a></li>
                  </ul>
                </div>

                <div className="content">
                  <p>
                    { t_news('NewsList.1.Content') }
                  </p>
                  <div className="read-more">
                    <a href="/news/details">{ c('ReadMore') }</a>
                  </div>
                </div>

              </article>

            </div>


          </div>

        </div>

      </section>        
    </>
  );
};

export default NewsPage;