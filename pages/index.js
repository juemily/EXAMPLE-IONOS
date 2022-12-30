
import React from 'react'
import { Product, HeroBanner } from '../components';

import {client} from '../lib/client'

const Home = ({products, bannerData}) => (
  
    <div>
      { /*<HeroBanner heroBanner={bannerData.length && bannerData[0]} />*/}
     
    
      
      <div className='products-heading'>
        <h2>Lámparas Padilla</h2>
        
          <p> Lámparas Padilla, fue fundada en 1969 en colmenar viejo (Madrid) por Juan Luis Castro Padilla. desde sus inicios, se ha dedicado a la fabricación y distribución de lámparas decorativas y aparatos de iluminación. </p>
          <p>A partir de 1975 establecimos delegaciones en Linares, Jaén, Málaga, Valencia y Madrid.</p>
          <p>Los tiempos han cambiado, pero lámparas padilla continua trabajando para ofrecer la mejor calidad tanto en sus propias creaciones como en proporcionar los mejores productos de iluminación a sus clientes.</p>
          <p>Cualquier consulta o petición de presupuesto, no dude en ponerse en contacto con nosotros. les atenderemos personalmente en: <a href="https://goo.gl/maps/zyTRLp8DWZvELBKb6">CALLE ALONSO CANO 80 MADRID</a></p>
          <p>TELEFONOS DE CONTACTO:
            <a href="tel:+34915346710"> 915346710 </a>  ,
            <a href="tel:+34692131028"> 692131028 </a>  ,
            <a href="tel:+34647777493" >647777493 </a>  ,

            EMAIL: <a href='mailto:LAMPARASPADILLA@GMAIL.COM'>LAMPARASPADILLA@GMAIL.COM</a>
          </p>
        
         
      
      </div>

      <div className='products-container'>
          {products?.map((product)=> <Product key = {product._id} product={product}/>)}
      </div>  

     {/**  <FooterBanner footerBanner={ bannerData[0]}/> */}

    </div>
    
  );

  

/*export const getServerSideProps = async()=> {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }
}*/

export default Home
