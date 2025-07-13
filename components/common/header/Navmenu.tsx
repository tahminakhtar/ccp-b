import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

export default async function Navmenu() {
  const common = await getTranslations('Common');
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link href="/">{common('Home')}</Link>
        </li>
        <li className="dropdown">
          <Link href="/about">{common('About')} <i className="bi bi-chevron-down toggle-dropdown" /></Link>
          <ul>
            <li>
              <Link href="/about/team">{common('Team')}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">{common('Contact')}</Link>
        </li>
        <li className="dropdown">
          <Link href="/membership">
            <span>{common('Membership')}</span> <i className="bi bi-chevron-down toggle-dropdown" />
          </Link>
          <ul>
            <li>
              <Link href="/membership/members">{common('Members')}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/gallery">{common('Gallery')}</Link>
        </li>
        <li>
          <Link href="/news">{common('News')}</Link>
        </li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>

  )
}

