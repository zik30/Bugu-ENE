import React from 'react'
import stl from "./footer.module.scss"

function Footer() {
  return (
    <div className={stl.footer}>
        <div className={stl.footerContainer}>
            <div className={stl.logo}><h2 className={stl.left}>BUGU ENE</h2> <img src="/logo/logoWhite.png" alt="" /> <h2>BUGU ENE</h2></div>
            <p>made by ENACTUS MANAS</p>
        </div>
    </div>
  )
}

export default Footer