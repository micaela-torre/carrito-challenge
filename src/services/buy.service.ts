import { callApi } from './utilServices';

export const BuyService = (callService => {
  const buyProducts = (itemsId: { itemsId: number[] }) => {
    return callService({
      endpoint: 'compras',
      method: 'post',
      params: itemsId,
    });
  };

  return { buyProducts };
})(callApi);
