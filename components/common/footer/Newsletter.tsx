import React from 'react'

export default async function Newsletter() {
  return (
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="php-email-form"
            >
              <div className="newsletter-form">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your subscription request has been sent. Thank you!
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}