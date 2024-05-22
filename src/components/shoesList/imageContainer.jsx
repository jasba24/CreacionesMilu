import React, { useContext } from 'react'
import ProductContext from '../../context/productContext'

function ImageContainer(imgs) {
  const contextProduct = useContext(ProductContext)

  const setProducts = (i, imgs) => {
    console.log({imgs});
    localStorage.setItem(i, imgs)
    contextProduct.setCount(contextProduct.count++)
  }

  return (
    <>
      {imgs.imgs.map((v, i) => {
        return (
          <div className="product-image">
            <img key={i} src={v.path} alt="" />
            <button
              key={v}
              onClick={() => setProducts(i, v.path)}
              className="buy-button product-button"
            >
              separar producto
            </button>
          </div>
        )
      })}
    </>
  )
}

export default ImageContainer
