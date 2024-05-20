import { ShopifyFetchParams } from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const endpoint = `${domain}${process.env.SHOPIFY_GRAPHQL_API_ENDPOINT}`;

export async function shopifyFetch({ query, variables }: ShopifyFetchParams) {
	if (!endpoint || !key) {
		return {
			status: 500,
			error: "Missing Shopify endpoint or access token",
		};
	}

	try {
		const result = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Shopify-Storefront-Access-Token": "2fd3f207653f3d00b575a7cfb70a2c93",
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
			error: "Error receiving data",
		};
	}
}
