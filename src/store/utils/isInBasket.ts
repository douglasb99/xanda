import { ProductItemProps } from "../store";

export const isInBasket = (
  product: ProductItemProps,
  basket: Array<ProductItemProps>
) => {
  const inBasket = basket.some((item: ProductItemProps) => {
    return item.id === product.id;
  });
  return inBasket;
};
