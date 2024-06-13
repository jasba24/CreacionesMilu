import { Link } from 'react-router-dom'
import { getOneImage } from '../../utils/getImages'

function Bolsos() {
  // const storage = getStorage(firebaseApp, 'gs://test-55f80.appspot.com')
  // const listRef = ref(storage, `${route}/160.000`)
  // listAll(listRef).then(res => {
  //   const container = document.getElementById('images-container')
  //   const list = []
  //   res.items.map(e => {
  //     getDownloadURL(
  //       ref(storage, `gs://test-55f80.appspot.com/${e._location.path}`)
  //     ).then(url => {
  //       list.push({ url })
  //       const img = document.createElement('img')
  //       img.className = 'product-image'
  //       img.src = url
  //       container.appendChild(img)
  //     })
  //   })
  // })

  let route = location.pathname.split('/')[1].split('%20').join('')
  getOneImage(1, route)
  setTimeout(() => {
    getOneImage(0, route)
  }, 100)

  return (
    <>
      <h1>Bolsos a 160.000</h1>
      <div id="images-container" className="catalog">
        <Link className="catalog1" to={'/Bolsos/1'}>
          Catalogo 1
        </Link>
        <Link className="catalog2" to={'/Bolsos/2'}>
          Catalogo 2
        </Link>
      </div>
    </>
  )
}

export default Bolsos
