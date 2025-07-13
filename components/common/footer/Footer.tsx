import React from 'react'
import Top from './Top'
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const common = await getTranslations('Common');
  return (
    <footer id="footer" className="footer position-relative dark-background">
      {/* <Newsletter /> */}
      <Top />
      <div className="container copyright text-center mt-4">
        <p>
          © <span>{common('Copyright')}</span>
          <strong className="px-1 sitename">
            {common('CCPBA')}
          </strong>
          <span>{common('AllRightsReserved')}</span>
        </p>
      </div>
    </footer>
  )
}