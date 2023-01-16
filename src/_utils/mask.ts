export class Mask {
  public static masked(variant: string, value: string) {
    const maskMoney = (value: string) => {
      value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
      const options = { minimumFractionDigits: 2 }
      const result = new Intl.NumberFormat('pt-BR', options).format(parseFloat(value) / 100)
      return 'R$ ' + result
    }
    switch (variant) {
      case 'cpf':
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
      case 'cnpj':
        return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
      case 'telefone':
        return value.replace(/(\d{2})(\d{4,5})(\d{4})/g, '($1) $2-$3')
      case 'dinheiro':
        return maskMoney(value)
      default:
        break
    }
  }
}
