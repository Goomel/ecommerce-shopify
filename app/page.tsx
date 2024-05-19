import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	interface ShopifyFetchParams {
		query: string;
		variables?: Record<string, any>;
	}

	interface ShopifyFetchResponse {
		status: number;
		body?: any;
		error?: string;
	}

	async function shopifyFetch({
		query,
		variables,
	}: ShopifyFetchParams): Promise<ShopifyFetchResponse> {
		const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
		const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

		if (!endpoint || !key) {
			return {
				status: 500,
				error: "Missing Shopify endpoint or access token",
			};
		}

		const url = endpoint.startsWith("https://")
			? endpoint
			: `https://${endpoint}`;

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-Shopify-Storefront-Access-Token": key,
				},
				body: JSON.stringify({ query, variables }),
			});

			const textResponse = await response.text();

			try {
				const jsonResponse = JSON.parse(textResponse);
				return {
					status: response.status,
					body: jsonResponse,
				};
			} catch (jsonError) {
				console.error("Response is not JSON:", textResponse);
				return {
					status: response.status,
					error: "Response is not valid JSON",
				};
			}
		} catch (error) {
			console.error("Error:", error);
			return {
				status: 500,
				error: "Error receiving data",
			};
		}
	}

	// Zapytanie GraphQL do pobrania produktów
	const GET_PRODUCTS_QUERY = `
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  src
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
`;

	async function fetchAllProducts(first: number): Promise<any> {
		const response = await shopifyFetch({
			query: GET_PRODUCTS_QUERY,
			variables: { first },
		});

		if (response.error) {
			throw new Error(response.error);
		}

		return response.body.data.products.edges.map((edge: any) => edge.node);
	}

	(async () => {
		try {
			const products = await fetchAllProducts(10);
			console.log(products);
		} catch (error) {
			console.error("Failed to fetch products:", error);
		}
	})();

	return <main className={styles.main}></main>;
}
