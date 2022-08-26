const formatCurrency = (price : number ) => {
  return `${price.toLocaleString('sv-SV')} kr`
}

export {formatCurrency}
