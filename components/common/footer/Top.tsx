import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

export default async function Top() {
  const c = await getTranslations('Common');
  return (
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <a href="index.php" className="d-flex align-items-center">
                <h3 className="sitename">
                  { c('ChamberofCommerce') } { c('PortugalBangladesh') } 
                </h3>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-contact pt-3">
                <p>{ c('PortugalOffice') }</p>
                <p>
                  <i className="bi bi-geo-alt" /> { c('PAdd1') }
                </p>
                <p>{ c('PAdd2') }</p>
                <p className="mt-3">
                  <i className="bi bi-telephone icon" />{" "}
                  <span>{ c('PPhone') }</span>
                </p>
                <p>
                  <i className="bi bi-envelope-at" /> <span>contact@ccp-b.com</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-contact pt-3">
                <p>{ c('BangladeshOffice') }</p>
                <p>
                  <i className="bi bi-geo-alt" /> { c('BAdd1') }
                </p>
                <p className="mt-3">
                  <i className="bi bi-telephone icon" />{" "}
                  <span>{ c('BPhone') }</span>
                </p>
                <p>
                  <i className="bi bi-envelope-at" />{" "}
                  <span>abdur.rouf@ccp-b.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>{ c('UsefulLinks') }</h4>
          <ul>
            <li>
              <i className="bi bi-chevron-right" /> <Link href="/">{ c('Home') }</Link>

            </li>
            <li>
              <i className="bi bi-chevron-right" /> <Link href="/about">{ c('About') }</Link>
            </li>
            <li>
              <i className="bi bi-chevron-right" /> <Link href="/gallery">{ c('Gallery') }</Link>
            </li>
            <li>
              <i className="bi bi-chevron-right" /> <Link href="/membership">{ c('Membership') }</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12">
          <h4>{ c('FollowUs') }</h4>
          <p />
          <div className="social-links d-flex">
            <a href="https://www.facebook.com/ChamberofCommercePortugalBangladesh/">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://www.instagram.com/ccpb_chamberofcommerce">
              <i className="bi bi-instagram" />
            </a>
            <a href="">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

