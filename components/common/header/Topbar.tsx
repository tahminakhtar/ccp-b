import React from 'react'
import LocaleSwitcher from '../LocaleSwitcher'

function Topbar() {
  return (
    <div className="topbar d-flex align-items-center dark-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:support@ccp-b.com">support@ccp-b.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>+351 217 582 658</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a
            href="https://www.facebook.com/ChamberofCommercePortugalBangladesh/"
            className="facebook"
          >
            <i className="bi bi-facebook" />
          </a>
          <a
            href="https://www.instagram.com/ccpb_chamberofcommerce"
            className="instagram"
          >
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
          <LocaleSwitcher/>
        </div>
      </div>
    </div>

  )
}

export default Topbar