export const maskMoney = (value: string) => {
  value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('pt-BR', options).format(parseFloat(value) / 100)
  return 'R$ ' + result
}

export const casting = (valueInString: string) => {
  const valueCents = Number(valueInString.split(',')[1]) / 100 || 0
  return Number(valueInString.split(',')[0].replace(/[^0-9]+/g, '')) + valueCents
}
