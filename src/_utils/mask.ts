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
        return value
          .replace(/\D/g, '')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1')

      case 'cnpj':
        return value
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1')

      case 'phone':
        if (value.includes('-')) {
          const valuePhoneWithoutCharacter = value.replace(/[\()]|\s|[\-]/g, '')
          return valuePhoneWithoutCharacter.replace(/(\d{2})(\d{1})(\d{4,5})(\d{4})/g, '($1) $2 $3-$4')
        } else {
          return value.replace(/(\d{2})(\d{1})(\d{4,5})(\d{4})/g, '($1) $2 $3-$4')
        }

      case 'money':
        return maskMoney(value)

      default:
        break
    }
  }
}
