import { fetchFirstProducts } from '@/lib/shopify/helpers';
import { ShopifyProduct } from '@/lib/shopify/types';

import React from 'react';

const FeaturedProducts = async () => {
  const featuredProducts = await fetchFirstProducts(3);

  return (
    <div>
      {featuredProducts.map((product: ShopifyProduct) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
