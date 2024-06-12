import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import { firebaseApp } from './../../main'

function Bolsos({ route }) {
  const storage = getStorage(firebaseApp, 'gs://test-55f80.appspot.com')
  const listRef = ref(storage, `${route}/160.000`)
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

    let unique
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    async function getData() {
      await delay(1000)
      unique = list.filter((v, i) => {
        return list.indexOf(v) === i
      })
      console.log(unique)
    }
    setTimeout(() => {
      console.log(document.getElementsByClassName('product-image'))
    }, 1000)
  })
  return (
    <div className="product-container">
      <h1>
        Bolsos en cuero <br /> Valor: 160.000
      </h1>
      <div id="images-container"></div>
    </div>
  )
}

export default Bolsos
