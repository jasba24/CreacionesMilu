import React, { useState } from 'react'

const ProductContext = React.createContext()

export const ProviderProduct = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <ProductContext.Provider value={{ count, setCount }}>
      {children}
    </ProductContext.Provider>
  )
}
// export const ConsumerProduct = ProductContext.Consumer;

export default ProductContext
