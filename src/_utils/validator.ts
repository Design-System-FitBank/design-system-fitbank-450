import { DDD } from './ddds'

export class Validator {
  private static criarDigitoCpf(cpfParcial: string): string {
    const array = Array.from(cpfParcial)
    let regressivo = array.length + 1
    const total = array.reduce((counter: number, value: string): number => {
      counter += regressivo * Number(value)
      regressivo--
      return counter
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
  }
  private static criarDigitoCnpj(cnpjFinal: string, cnpjInicial: string): string {
    const array = Array.from(cnpjFinal)
    let progressivoFinal = 2
    let progressivoInicail = 10 - cnpjInicial.length
    const totalFinal = array.reduce((counter: number, value: string): number => {
      counter += progressivoFinal * Number(value)
      progressivoFinal++
      return counter
    }, 0)
    const totalInicial = array.reduce((counter: number, value: string): number => {
      counter += progressivoInicail * Number(value)
      progressivoInicail++
      return counter
    }, 0)

    const digito = (totalInicial + totalFinal) % 11
    return digito > 9 ? '0' : String(digito)
  }

  private static required(value: string): string {
    if (!value) return 'Campo Obrigatório'
    return ''
  }
  private static email(value: string): string {
    const error = 'Não é um email válido'
    if (!value.includes('@')) return error
    if (!value.includes('.com')) return error
    return ''
  }
  private static tag(value: string): string {
    const error = 'Campo só aceita letras'
    if (value.replace(/[!a-zA-Zà-úÀ-Ú]/g, '')) return error
    return ''
  }
  private static numero(value: string): string {
    if (isNaN(Number(value))) return 'Campo só aceita números'
    return ''
  }
  private static telefone(value: string): string {
    const telLimpo = value.replace(/\D+/g, '')
    const arrayTel = Array.from(telLimpo)

    if (telLimpo.length <= 2) {
      const ddd = arrayTel[0] + arrayTel[1]
      if (!DDD.includes(Number(ddd))) return 'o DDD não é válido'
    }
    if (telLimpo.length < 10 || telLimpo.length > 11) return 'Telefone invalido'

    return ''
  }
  private static cpf(value: string): string {
    const cpfLimpo = value.replace(/\D+/g, '')
    if (!cpfLimpo) return 'Campo só aceita números'
    const sequence = cpfLimpo[0].repeat(cpfLimpo.length)
    if (sequence === cpfLimpo) return 'Cpf inválido'
    if (cpfLimpo.length !== 11) return 'Cpf inválido'
    const cpfParcial = cpfLimpo.slice(0, -2)
    const digito1 = this.criarDigitoCpf(cpfParcial)
    const digito2 = this.criarDigitoCpf(cpfParcial + digito1)
    const novoCpf = cpfParcial + digito1 + digito2
    if (novoCpf !== cpfLimpo) return 'Cpf inválido'
    return ''
  }
  private static cnpj(value: string): string {
    const cnpjLimpo = value.replace(/\D+/g, '')
    const sequence = cnpjLimpo[0].repeat(cnpjLimpo.length)
    if (!cnpjLimpo) return 'Campo só aceita números'
    if (cnpjLimpo.length !== 14) return 'CNPJ inválido'
    if (sequence === cnpjLimpo) return 'CNPJ inválido'
    let cnpjParcial = cnpjLimpo.slice(0, -2)
    let cnpjInicial = cnpjParcial.slice(0, -8)
    let cnpjFinal = cnpjParcial.slice(cnpjInicial.length)
    const digito1 = this.criarDigitoCnpj(cnpjFinal, cnpjInicial)
    cnpjParcial += digito1
    cnpjInicial = cnpjParcial.slice(0, -8)
    cnpjFinal = cnpjParcial.slice(cnpjInicial.length)
    const digito2 = this.criarDigitoCnpj(cnpjFinal, cnpjInicial)
    const novoCnpj = cnpjParcial + digito2
    if (novoCnpj !== cnpjLimpo) return 'CNPJ inválido'
    return ''
  }
  public static validation(variant: string, validated: string): string {
    switch (variant) {
      case 'email':
        return this.email(validated)
      case 'numero':
        return this.numero(validated)
      case 'cpf':
        return this.cpf(validated)
      case 'cnpj':
        return this.cnpj(validated)
      case 'telefone':
        return this.telefone(validated)
      case 'tag':
        return this.tag(validated)
      default:
        return ''
    }
  }
}
