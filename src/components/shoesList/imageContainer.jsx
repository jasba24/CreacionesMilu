import React from 'react'

const setProducts = (i, imgs) => {
  localStorage.setItem(i, imgs)
}

function ImageContainer(imgs) {
  return (
    <>
      {imgs.imgs.map((v, i) => {
        return (
          <div className="product-image">
            <img key={i} src={v.path} alt="" />
            <button
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
