import { DDD } from './ddds'

export class Validator {
  private static validateTaxNumber(taxNumber: string): boolean {
    taxNumber = taxNumber.replace(/[^\d]+/g, '')

    if (taxNumber.length === 11) {
      if (!!taxNumber.match(/(\d)\1{10}/)) return false

      let aux = taxNumber.split('')
      const validator = aux.filter((digit, index, array) => index >= array.length - 2 && digit).map(el => +el)

      const toValidate = (pop: number) =>
        aux.filter((digit, index, array) => index < array.length - pop && digit).map(el => +el)

      const rest = (count: number, pop: number) =>
        ((toValidate(pop).reduce((sum, el, i) => sum + el * (count - i), 0) * 10) % 11) % 10
      return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
    } else if (taxNumber.length === 14) {
      if (!!taxNumber.match(/(\d)\1{13}/)) return false

      const match = taxNumber.toString().match(/\d/g)
      const numbers = Array.isArray(match) ? match.map(Number) : []

      if (numbers.length !== 14) return false

      const items = [...new Set(numbers)]

      if (items.length === 1) return false

      const calc = (x: number) => {
        const slice = numbers.slice(0, x)
        let factor = x - 7
        let sum = 0

        for (let i = x; i >= 1; i--) {
          const n = slice[x - i]
          sum += n * factor--
          if (factor < 2) factor = 9
        }

        const result = 11 - (sum % 11)
        return result > 9 ? 0 : result
      }

      const digits = numbers.slice(12)
      const digit0 = calc(12)
      if (digit0 !== digits[0]) return false

      const digit1 = calc(13)
      return digit1 === digits[1]
    }
    return false
  }

  private static email(value: string): string {
    const error = 'Não é um email válido'
    if (value.substring(65).includes('@')) return error
    if (!value.includes('@')) return error
    if (!value.includes('.com')) return error
    return ''
  }

  private static tag(value: string): string {
    const error = 'Campo só aceita letras'
    if (value.replace(/[!a-zA-Zà-úÀ-Ú ]/g, '')) return error
    return ''
  }

  private static number(value: string): string {
    if (isNaN(Number(value))) return 'Campo só aceita números'
    return ''
  }

  private static phone(value: string): string {
    const cleanPhone = value.replace(/\D+/g, '')
    if (!cleanPhone) return 'Campo só aceita números'
    const arrayTel = Array.from(cleanPhone)

    if (cleanPhone.length === 2) {
      const ddd = arrayTel[0] + arrayTel[1]
      if (!DDD.includes(Number(ddd))) return 'o DDD não é válido'
    }
    if (cleanPhone.length > 1 && cleanPhone.length < 11) return 'Telefone invalido'

    return ''
  }

  private static cpf(value: string): string {
    const newTaxId = value.replace(/\D+/g, '')

    if (value.replace(/\D+/g, '').length > 11) return ''

    if (value.search(/[a-zA-Z]/g) !== -1) return 'Campo só aceita números'

    if (newTaxId.length >= 11 && !Validator.validateTaxNumber(newTaxId)) return 'CPF inválido'

    return ''
  }

  private static cnpj(value: string): string {
    const taxCode = value.replace(/\D+/g, '')

    if (value.replace(/\D+/g, '').length > 14) return ''

    if (value.search(/[a-zA-Z]/g) !== -1) return 'Campo só aceita números'

    if (taxCode.length >= 14 && !Validator.validateTaxNumber(taxCode)) return 'CNPJ inválido'

    return ''
  }

  private static taxNumber(value: string): string {
    const taxCode = value.replace(/\D+/g, '')

    if (value.replace(/\D+/g, '').length > 14) return ''

    if (value.search(/[a-zA-Z]/g) !== -1) return 'Campo só aceita números'

    if (taxCode.length >= 14 && !Validator.validateTaxNumber(taxCode)) return 'CPF/CNPJ inválido'

    return ''
  }

  public static validation(variant: string, validated: string): string {
    switch (variant) {
      case 'email':
        return this.email(validated)

      case 'number':
        return this.number(validated)

      case 'cpf':
        return this.cpf(validated)

      case 'cnpj':
        return this.cnpj(validated)

      case 'phone':
        return this.phone(validated)

      case 'tag':
        return this.tag(validated)

      default:
        return ''
    }
  }
}
