import styles from "./page.module.css";
import { shopifyFetch } from "@/lib/shopify/helpers";
import { getAllProductsQuery } from "@/lib/shopify/queries";

export default function Home() {
	async function fetchAllProducts(first: number): Promise<any> {
		const response = await shopifyFetch({
			query: getAllProductsQuery,
			variables: { first },
		});

		if (response.error) {
			throw new Error(response.error);
		}

		return response.body.data.products.edges.map((edge: any) => edge.node);
	}

	(async () => {
		try {
			const products = await fetchAllProducts(1);
			console.log(products);
		} catch (error) {
			console.error("Failed to fetch products:", error);
		}
	})();

	return <main className={styles.main}></main>;
}
