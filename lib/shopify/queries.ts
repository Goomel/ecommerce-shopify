export const getAllProductsQuery = `
    query GetProducts($first: Int) {
      products(first: $first) {
        edges {
          node {
            id
            title
            description
            images(first: $first) {
              edges {
                node {
                  src
                }
              }
            }
            variants(first: $first) {
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
