import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import { firebaseApp } from '../main'

export function getImages(params, route) {
  const storage = getStorage(firebaseApp, 'gs://test-55f80.appspot.com')
  const listRef =
    params == 1
      ? ref(storage, `YF/${route}/160.000`)
      : ref(storage, `${route}/160.000`)
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
}

export function getOneImage(params, route) {
  const storage = getStorage(firebaseApp, 'gs://test-55f80.appspot.com')
  const listRef =
    params == 1
      ? ref(storage, `YF/${route}/160.000`)
      : ref(storage, `${route}/160.000`)
  listAll(listRef).then(res => {
    const container = document.getElementById('images-container')
    const list = []
    getDownloadURL(
      ref(
        storage,
        `gs://test-55f80.appspot.com/${res.items[0]._location.path}`
      )
    ).then(url => {
      list.push({ url })
      const img = document.createElement('img')
      img.className = 'product-image'
      img.src = url
      const link = container.getElementsByTagName("a")[0]
      container.insertBefore(img, link)
    })
  })
}
