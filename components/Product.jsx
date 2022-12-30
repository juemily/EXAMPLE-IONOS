import React from 'react'
import Link  from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({product: {image, name, slug, price, image_external_url}}) => {
  return (
    <div className='product-card'>
      <Link href={`/product/${slug.current}`}>
        <div>
          <img src={(image_external_url)}
            width={250}
            height={250}
            className='product-image'>

          </img>
          <p className='product-name'> {name} </p>
          <p className='product-price'>€ {price} </p>
        </div>
      </Link>
    </div>
  )
}

export default Product