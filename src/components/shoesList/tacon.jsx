function importAll(r) {
  let images = []
  Object.values(r).forEach(({ default: path }) => {
    const url = new URL(path, import.meta.url)
    const data = {
      path: url.pathname
    }
    images.push(data)
  })

  return images
}
const images100000Sintetico = importAll(
  import.meta.glob(['../../assets/Tacon/100000sintetico/*.jpg'], { eager: true })
)

// const images190000 = importAll(
//   import.meta.glob(['../../assets/tacon/190000/*.jpg'], { eager: true })
// )

function Tacon() {
  return (
    <div className="product-container">
      <h1>
        Tacon artesanal en cuero y fique. <br /> Valor: 100.000
      </h1>
      <div className="section-container">
        {images100000Sintetico.map((v, i) => {
          return <img key={i} src={v.path} alt="" />
        })}
      </div>
      {/* <h1>Valor: 190.000</h1>
      <div className="section-container">
        {images190000.map((v, i) => {
          return <img key={i} src={v.path} alt="" />
        })}
      </div> */}
    </div>
  )
}

export default Tacon
