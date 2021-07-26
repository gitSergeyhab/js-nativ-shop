export const formatPrice = (price) => {
  let oldPrice = price.toString();
  let resultPrice = '';
  while (oldPrice.length > 3) {
    resultPrice = `${oldPrice.slice(oldPrice.length - 3)} ${resultPrice}`;
    oldPrice = oldPrice.slice(0, oldPrice.length - 3);
  }
  resultPrice = `${oldPrice} ${resultPrice}`;
  return resultPrice;
};
