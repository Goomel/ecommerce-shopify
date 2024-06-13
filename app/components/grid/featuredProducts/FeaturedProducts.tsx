import React from 'react';
import Image from 'next/image';
import { fetchFirstProducts } from '@/lib/shopify/helpers';
import { ShopifyProduct } from '@/lib/shopify/types';

const FeaturedProducts = async () => {
  const numberOfFirstProducts = 3;
  const featuredProducts = await fetchFirstProducts(numberOfFirstProducts);

  return (
    <div>
      {featuredProducts.map((product: ShopifyProduct) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <Image
            src={product.images.edges[0].node.src}
            alt={product.title}
            width={250}
            height={300}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
