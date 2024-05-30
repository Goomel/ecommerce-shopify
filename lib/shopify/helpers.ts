import { ShopifyFetchParams } from './types';
import { getFirstProductsQuery } from '@/lib/shopify/queries';
import { ShopifyProduct } from './types';

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const endpoint = `${domain}${process.env.SHOPIFY_GRAPHQL_API_ENDPOINT}`;

export async function shopifyFetch({ query, variables }: ShopifyFetchParams) {
  if (!endpoint || !key) {
    return {
      status: 500,
      error: 'Missing Shopify endpoint or access token',
    };
  }

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
      body: JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    return {
      status: 500,
      error: 'Error receiving data',
    };
  }
}

export async function fetchFirstProducts(first: number): Promise<ShopifyProduct[]> {
  const response = await shopifyFetch({
    query: getFirstProductsQuery,
    variables: { first },
  });

  if (response.error) throw new Error(response.error);
  return response.body.data.products.edges.map((edge: any) => edge.node);
}
