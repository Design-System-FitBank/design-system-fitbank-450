import 'cypress-real-events/support'

import { GlobalStyles, ThemeDSProvider } from '../../theme'

import { Input } from '.'
import React from 'react'
import { faker } from '@faker-js/faker'
import { mount } from 'cypress/react18'

describe('Input component', () => {
  const titleFake = 'Input Label'
  const placeholderFake = 'Placeholder'
  const textFaker = faker.lorem.word(10)
  const messageError = 'mensagem personalizada'
  const backgroundColor = {
    white: 'rgb(255, 255, 255)',
    grey: 'rgb(118, 122, 139)',
    transparent: 'rgba(0, 0, 0, 0)'
  }

  beforeEach(() => {
    cy.wait(500)
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
  })

  afterEach(() => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          onChange={cy.stub().as('onChange')}
          resetValue={true}
        />
      </ThemeDSProvider>
    )
  })

  it('Deve mostrar o componente default', () => {
    cy.get('[data-testid="label"]')
      .should('have.text', titleFake)
      .and('have.css', 'color', 'rgb(41, 41, 41)')
      .and('have.css', 'justify-content', 'flex-start')

    cy.get('[data-testid="input"]')
      .should('have.attr', 'placeholder', placeholderFake)
      .and('have.css', 'border', '1px solid rgb(174, 174, 174)')
      .and('have.css', 'color', 'rgb(41, 41, 41)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'padding-left', '16px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'border-radius', '8px')
  })

  it('Deve mostrar o componente tipo password', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='password'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').should('have.attr', 'placeholder', '••••••••')

    cy.get('[data-testid="icon"]')
      .and('have.css', 'right', '16px')
      .and('have.css', 'width', '24px')
      .and('have.css', 'height', '24px')
      .and('have.css', 'color', 'rgb(50, 56, 79)')
      .and('have.css', 'top', '8px')

    cy.get('[data-testid="icon"]').get('[data-testid="eyeOpen"]').should('exist')
    cy.get('[data-testid="icon"]').get('[data-testid="eyeClose"]').should('not.exist')

    cy.get('[data-testid="input"]').type(textFaker)

    cy.get('[data-testid="icon"]').click()

    cy.get('[data-testid="icon"]').get('[data-testid="eyeClose"]').should('exist')
    cy.get('[data-testid="icon"]').get('[data-testid="eyeOpen"]').should('not.exist')

    cy.get('[data-testid="input"]').should('have.value', textFaker)
  })

  it('Deve mostrar o hover do componente default', () => {
    cy.get('[data-testid="input"]').realHover()
    cy.get('[data-testid="input"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve mostrar foco quando clicado no componente default', () => {
    cy.get('[data-testid="input"]').focus().type(textFaker)
    cy.get('[data-testid="input"]')
      .should('have.css', 'border', '1px solid rgb(50, 56, 79)')
      .and('have.css', 'color', 'rgb(41, 41, 41)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve mostrar componente default preenchido após desfocado', () => {
    cy.get('[data-testid="input"]').type(textFaker).and('have.css', 'color', 'rgb(41, 41, 41)')
  })

  it('Deve mostrar componente default desabilitado ', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={true}
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]')
      .should('have.css', 'border', '1px solid rgb(232, 232, 232)')
      .and('have.css', 'background-color', 'rgb(232, 232, 232)')
  })

  it('Deve mostrar componente password desabilitado ', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='password'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={true}
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]')
      .should('have.attr', 'placeholder', '••••••••')
      .and('have.css', 'border', '1px solid rgb(232, 232, 232)')
      .and('have.css', 'background-color', 'rgb(232, 232, 232)')
  })

  it('Deve mostrar mensagem Não é um email válido quando a validação for email e o for passado um email não válido', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='email'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').should('have.css', 'border', '1px solid rgb(174, 174, 174)')
    cy.get('[data-testid="input"]').type(faker.lorem.sentence())
    cy.get('[data-testid="input"]').should('have.css', 'border', '1px solid rgb(50, 56, 79)')
    cy.get('[data-testid="message"]')
      .should('have.text', 'Não é um email válido')
      .and('have.css', 'color', 'rgb(234, 62, 62)')
      .and('have.css', 'margin-top', '4px')
      .and('have.css', 'justify-content', 'flex-start')
  })

  it('Deve mostrar mensagem Campo só aceita números quando a validação for number e um caracter diferente de número for digitado', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='number'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').type(faker.lorem.word())
    cy.get('[data-testid="message"]').should('have.text', 'Campo só aceita números')
  })

  it('Deve mostrar mensagem Campo só aceita números quando a validação for cpf ou cnpj e não seja digitado um número', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').type(faker.lorem.word())
    cy.get('[data-testid="message"]').should('have.text', 'Campo só aceita números')
  })

  it('Deve mostrar mensagem erro quando a validação for cpf ou cnpj e o mesmo não for sequencia de números iguais', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const number = faker.datatype.number({ min: 0, max: 9 })
    const sequence = Array(14).fill(number)
    cy.get('[data-testid="input"]').type(sequence.join(''))
    cy.get('[data-testid="message"]').should('have.text', 'CPF inválido')
  })

  it('Deve mostrar mensagem erro quando a validação for cpf ou cnpj e o mesmo não for validado', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    cy.get('[data-testid="input"]').type(sequence.toString())
    cy.get('[data-testid="message"]').should('have.text', 'CPF inválido')
  })

  it('Deve mostrar mensagem erro quando o cpf inserido for inválido', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = '00000000000'
    cy.get('[data-testid="input"]').type(sequence)
    cy.get('[data-testid="message"]').should('have.text', 'CPF inválido')
  })

  it('Deve mostrar mensagem erro quando o cnpj inserido for inválido', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cnpj'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = '00000000000000'
    cy.get('[data-testid="input"]').type(sequence)
    cy.get('[data-testid="message"]').should('have.text', 'CNPJ inválido')
  })

  it('Deve mostrar mensagem erro quando a validação for cpf e o mesmo não for validado na variante cpf/cnpj', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf/cnpj'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    cy.get('[data-testid="input"]').type(sequence.toString())
    cy.get('[data-testid="message"]').should('have.text', 'CPF inválido')
  })

  it('Deve mostrar mensagem erro quando a validação for cnpj e o mesmo não for validado na variante cpf/cnpj', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf/cnpj'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000000, max: 99999999999999 })
    cy.get('[data-testid="input"]').type(sequence.toString())
    cy.get('[data-testid="message"]').should('have.text', 'CNPJ inválido')
  })

  it('Deve mostrar mensagem erro quando a validação for telefone e o mesmo não conter um ddd válido', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='phone'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = `${0}${faker.datatype.number({ min: 0, max: 9 })}`
    cy.get('[data-testid="input"]').type(sequence)
    cy.get('[data-testid="message"]').should('have.text', 'o DDD não é válido')
  })

  it('Deve mostrar mensagem erro quando a validação for telefone e o mesmo conter menos 10 dígitos', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='phone'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 1000000, max: 9999999 })
    cy.get('[data-testid="input"]').type(`85${sequence}`)
    cy.get('[data-testid="message"]').should('have.text', 'Telefone invalido')
  })

  it('Deve mostrar máscara para cpf quando essa opção for marcada na variant', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    const masked = sequence.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })

  it('Deve mostrar máscara para cnpj quando essa opção for marcada na variant', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cnpj'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000000, max: 99999999999999 })
    const masked = sequence.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })

  it('Deve mostrar máscara para cpf caso o mesmo seja passado e a variante for cpf/cnpj', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf/cnpj'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    const masked = sequence.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })

  it('Deve mostrar máscara para cnpj caso o mesmo seja passado e a variante for cpf/cnpj', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf/cnpj'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000000, max: 99999999999999 })
    const masked = sequence.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })

  it('Deve mostrar máscara para telefone caso a variante for a mesma', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='phone'
          onChange={cy.stub().as('onChange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    const masked = sequence.toString().replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, '($1) $2 $3-$4')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })

  it('Deve mostrar componente sem label quando não for passado valor do label', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input type='text' placeholder={placeholderFake} onChange={cy.stub().as('onChange')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="label"]').should('not.exist')
  })

  it('Deve mostrar mensagem de erro ou de validação quando for passado como parâmetro', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input type='text' placeholder={placeholderFake} onChange={cy.stub().as('onChange')} message={messageError} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="message"]').should('have.text', messageError)
  })

  for (const key in backgroundColor) {
    it(`Deve mostrar background com cor ${key}`, () => {
      mount(
        <ThemeDSProvider>
          <GlobalStyles />
          <Input
            type='text'
            placeholder={placeholderFake}
            onChange={cy.stub().as('onChange')}
            background={key as any}
          />
        </ThemeDSProvider>
      )
      cy.get('[data-testid="input"]').should('have.css', 'background-color', backgroundColor[key])
    })
  }

  it('Deve mostrar campo limpo quando reset é passado como parâmetro', () => {
    cy.get('[data-testid="input"]').type(textFaker).and('have.attr', 'placeholder', placeholderFake)
  })

  it('Deve passar um valor inicial para o input sem um validator', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input type='text' placeholder={placeholderFake} onChange={cy.stub().as('onChange')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').type(textFaker)
    cy.get('[data-testid="input"]').type('ola123oi@#!')
    cy.get('[data-testid="input"]').should('have.value', textFaker + 'ola123oi@#!')
  })

  it('Deve passar um valor inicial para o input com um validator', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input type='text' placeholder={placeholderFake} onChange={cy.stub().as('onChange')} validator={'cpf'} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').type('ola123oi@#!')
  })

  it('Deve exibir mensagem de error ao passar valor inicial para o input com um validator', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Input type='text' placeholder={placeholderFake} onChange={cy.stub().as('onChange')} validator={'cpf'} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="message"]').should('have.text', 'Campo só aceita números')
  })
})
