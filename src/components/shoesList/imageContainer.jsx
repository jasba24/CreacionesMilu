import React from 'react'
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import { firebaseApp } from './../../main';

function ImageContainer(r) {
  const route = r.route.route
  // const setProducts = (i, imgs) => {
  //   console.log({ imgs })
  //   localStorage.setItem(i, imgs)
  // }

  console.log(route);
  const storage = getStorage(firebaseApp, 'gs://test-55f80.appspot.com')
  const listRef = ref(storage, `${route}/`)

  listAll(listRef)
    .then(res => {
      console.log({res})
    })

    // getDownloadURL(
    //   ref(storage, 'gs://test-55f80.appspot.com/sandalia/IMG-20240215-WA0101.jpg')
    // )
    .then(url => {
      // const xhr = new XMLHttpRequest()
      // xhr.responseType = 'blob'
      // xhr.onload = event => {
      //   const blob = xhr.response
      // }
      // xhr.open('GET', url)
      // xhr.send()
      // console.log(img)
      // // Or inserted into an <img> element
      const img = document.getElementById('myimg')
      img.setAttribute('src', url)
    })
    .catch(error => {
      // Handle any errors
    })
  // console.log(storage)

  return (
    <>
    <h1></h1>
      {/* {imgs.imgs.map((v, i) => {
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
      })} */}
    </>
  )
}

export default ImageContainer
