import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container container'>
     <p>Estamos ubicados en: <a href="https://goo.gl/maps/zyTRLp8DWZvELBKb6">CALLE ALONSO CANO 80 MADRID</a></p>
          <p>TELEFONOS DE CONTACTO:
            <a href="tel:+34915346710"> 915346710 </a>  ,
            <a href="tel:+34692131028"> 692131028 </a>  ,
            <a href="tel:+34647777493" >647777493 </a>  ,

            EMAIL: <a href='mailto:LAMPARASPADILLA@GMAIL.COM'>LAMPARASPADILLA@GMAIL.COM</a>
          </p>
      <p> 2022 Lamparas Padilla All rights reserved</p>
      <p className='icons'>

      <Link href="https://instagram.com/lamparaspadilla6?igshid=YmMyMTA2M2Y=">
          <a style={{color: 'black'}}><AiFillInstagram> instagram</AiFillInstagram></a>
        </Link>
      
      </p>
    </div>
  )
}

export default Footer