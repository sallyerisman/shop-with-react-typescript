
const formatCurrency = ( price : number ) => {
  let formattedPrice = price.toString().replace(/,/g,'');
  let newPrice = Number(formattedPrice)

  return `${newPrice} kr`
}
export {formatCurrency}
