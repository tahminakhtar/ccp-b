import Breadcrumbs from '@/components/common/header/Breadcrumbs'
import { getTranslations } from 'next-intl/server';
import React from 'react';

const NewsDetailsPage: React.FC = async () => {
  const c = await getTranslations('Common');
  return (
    <>
      <Breadcrumbs 
        currentPage={c('News')} 
      />
      <div className="container">
        <div className="row">

          <div className="col-lg-12">
            
            <section id="blog-details" className="blog-details section">
              <div className="container">

                <article className="article">

                  <div className="post-img">
                    <img src="https://placehold.jp/1300x500.png" alt="" className="img-fluid" />
                  </div>

                  <h2 className="title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                  <div className="meta-top">
                    <ul>
                      <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                      <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time dateTime="2020-01-01">Jan 1, 2022</time></a></li>
                    </ul>
                  </div>

                  <div className="content">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <p>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <blockquote>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                    </blockquote>

                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolorum, ab placeat illum ea incidunt molestias sapiente a corrupti quod? Ipsum, accusamus reiciendis! Incidunt eveniet nisi eos aspernatur, non ut deleniti! Cum maiores provident harum officia. Tenetur, libero accusantium ea sint sit neque deserunt quis rerum voluptatibus, ab, ducimus consectetur est iusto recusandae similique deleniti optio voluptatem fugit error sunt ipsam eos. Magnam rem exercitationem sed tenetur quibusdam impedit, iste molestiae velit eius atque, molestias odio ex similique sequi id?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni reprehenderit eaque non officia veniam mollitia incidunt aspernatur officiis tempore maiores vero blanditiis aut hic, quas a cumque voluptatum! Iste, cumque.
                    </p>

                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore veritatis animi cupiditate excepturi voluptatibus voluptatem labore ea, quos amet porro quisquam alias assumenda. In beatae autem est neque minima, unde facilis sunt suscipit saepe illo quibusdam nulla quasi! Deleniti quisquam soluta ducimus rerum distinctio porro non nobis. Optio possimus nesciunt explicabo cumque saepe, iste similique fuga voluptatem repellendus laudantium molestias debitis voluptate consequatur officiis id ullam odio quia, eos, corporis fugit nam maiores! Error reprehenderit omnis et, deserunt voluptatem labore. Nam officia et deleniti est corrupti voluptatem veniam deserunt molestias. Rerum, atque eos? Molestiae, voluptates amet placeat sit tempore totam?
                    </p>
                    <img src="https://placehold.jp/1300x500.png" className="img-fluid" alt="" />

                    <h3>Why do we use it?</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                  </div>

                  <div className="meta-bottom">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li><a href="#">Business</a></li>
                    </ul>

                    <i className="bi bi-tags"></i>
                    <ul className="tags">
                      <li><a href="#">Creative</a></li>
                      <li><a href="#">Tips</a></li>
                      <li><a href="#">Marketing</a></li>
                    </ul>
                  </div>

                </article>

              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailsPage;