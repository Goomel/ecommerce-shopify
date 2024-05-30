export type ShopifyFetchParams = {
  query: string;
  variables?: Record<string, any>;
};

export type ShopifyProduct = {
  id: string;
  title: string;
  description: string;
  images: {
    edges: [
      {
        node: {
          src: string;
        };
      },
    ];
  };
  variants: object;
};
