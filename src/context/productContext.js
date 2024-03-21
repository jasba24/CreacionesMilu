import React from 'react';

const ProductContext = React.createContext();

export const ProviderProduct = ProductContext.Provider;
export const ConsumerProduct = ProductContext.Consumer;

export default ProductContext;