import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import { firebaseApp } from './../../main'
import { getImages } from '../../utils/getImages'

function ImageContainer() {
  let params = location.pathname.split('/')[2]
  let route = location.pathname.split('/')[1].split('%20').join('')

  getImages(params, route)
  /* if (params == 1) {
    const storage = getStorage(firebaseApp, 'gs://test-55f80.appspot.com')
    const listRef = ref(storage, `YF/${route}/160.000`)
    listAll(listRef).then(res => {
      const container = document.getElementById('images-container')
      const list = []
      res.items.map(e => {
        getDownloadURL(
          ref(storage, `gs://test-55f80.appspot.com/${e._location.path}`)
        ).then(url => {
          list.push({ url })
          const img = document.createElement('img')
          img.className = 'product-image'
          img.src = url
          container.appendChild(img)
        })
      })
    })
  } else {
    const storage = getStorage(firebaseApp, 'gs://test-55f80.appspot.com')
    const listRef = ref(storage, `${route}/160.000`)
    listAll(listRef).then(res => {
      const container = document.getElementById('images-container')
      const list = []
      console.log(res.items);
      res.items.map(e => {
        getDownloadURL(
          ref(storage, `gs://test-55f80.appspot.com/${e._location.path}`)
        ).then(url => {
          list.push({ url })
          const img = document.createElement('img')
          img.className = 'product-image'
          img.src = url
          container.appendChild(img)
        })
      })
    })
  } */

  return (
    <div className="product-container">
      <h1>
        Bolsos en cuero <br /> Valor: 160.000
      </h1>
      <div id="images-container"></div>
    </div>
  )
}

export default ImageContainer
