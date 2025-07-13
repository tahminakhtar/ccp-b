import React from 'react'
import Navmenu from './Navmenu'
import Topbar from './Topbar'
import Image from 'next/image'

function Header() {
  return (
    <header id="header" className="header sticky-top">
  {/* Top Bar */}
  <Topbar />
  {/* End Top Bar */}
  <div className="branding">
    <div className="container position-relative d-flex align-items-center justify-content-between">
      <a href="index.php" className="logo d-flex align-items-center">
        {/* <img src="assets/img/logo.png" alt="" /> */}
        <Image src="/assets/img/logo.png" 
          alt="Logo" width={150} height={150} />
        {/* <h1 class="sitename">CCPB<br></h1> */}
      </a>
      <Navmenu />
    </div>
  </div>
</header>
  )
}

export default Header