import { callApi } from "./utilServices";

export const ProductsService = ((callService) => {
  const getProducts = () => {
    return callService({
      endpoint: "productos",
    });
  };

  return { getProducts };
})(callApi);
