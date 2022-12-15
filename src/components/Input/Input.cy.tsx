import React from 'react'
import { Input } from '.'
import 'cypress-real-events/support'
import { faker } from '@faker-js/faker'
import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Input component', () => {
  const titleFake = 'Input Label'
  const placeholderFake = 'Placeholder'
  const textFaker = faker.lorem.word()
  beforeEach(() => {
    cy.wait(500)
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
  })

  it('Deve mostrar o componente default', () => {
    cy.get('[data-testid="label"]')
      .should('have.text', titleFake)
      .and('have.css', 'text-transform', 'capitalize')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'margin-bottom', '4px')

    cy.get('[data-testid="input"]')
      .should('have.attr', 'placeholder', placeholderFake)
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'padding-left', '16px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'border-radius', '6px')
  })

  it('Deve mostrar o componente tipo password', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='password'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').should('have.attr', 'placeholder', '••••••••')

    cy.get('[data-testid="icon"]')
      .and('have.css', 'right', '16px')
      .and('have.css', 'width', '24px')
      .and('have.css', 'height', '24px')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'top', '7px')

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
    cy.wait(300)
    cy.get('[data-testid="input"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve mostrar foco quando clicado no componente default', () => {
    cy.get('[data-testid="input"]').focus().type(textFaker)
    cy.get('[data-testid="input"]')
      .should('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve mostrar componente default preenchido após desfocado', () => {
    cy.get('[data-testid="input"]').type(textFaker).and('have.css', 'color', 'rgb(50, 55, 81)')
  })

  it('Deve mostrar componente default desabilitado ', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={true}
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]')
      .should('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'background-color', 'rgb(196, 196, 196)')
  })

  it('Deve mostrar componente password desabilitado ', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='password'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={true}
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]')
      .should('have.attr', 'placeholder', '••••••••')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'background-color', 'rgb(196, 196, 196)')
  })

  it('Deve mostrar mensagem erro quando a validação for email e o mesmo não for passado', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='email'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').should('have.css', 'border', '1px solid rgb(196, 196, 196)')
    cy.get('[data-testid="input"]').type(faker.lorem.sentence())
    cy.get('[data-testid="input"]').should('have.css', 'border', '1px solid rgb(50, 55, 81)')
    cy.get('[data-testid="message"]')
      .should('have.text', 'Não é um email válido')
      .and('have.css', 'color', 'rgb(234, 62, 62)')
      .and('have.css', 'margin-top', '4px')
      .and('have.css', 'justify-content', 'flex-start')
  })
  it('Deve mostrar mensagem erro quando a validação for numero e o mesmo não for passado', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='numero'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').type(faker.lorem.word())
    cy.get('[data-testid="message"]').should('have.text', 'Campo só aceita números')
  })
  it('Deve mostrar mensagem erro quando a validação for cpf ou CNPJ e o mesmo não for numero', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').type(faker.lorem.word())
    cy.get('[data-testid="message"]').should('have.text', 'Campo só aceita números')
  })
  it('Deve mostrar mensagem erro quando a validação for cpf ou CNPJ e o mesmo não for sequencia de números iguais', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const number = faker.datatype.number({ min: 0, max: 9 })
    const sequence = Array(11).fill(number)
    cy.get('[data-testid="input"]').type(sequence.join(''))
    cy.get('[data-testid="message"]').should('have.text', 'Cpf inválido')
  })

  it('Deve mostrar mensagem erro quando a validação for cpf ou CNPJ e o mesmo não for validado', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    cy.get('[data-testid="input"]').type(sequence.toString())
    cy.get('[data-testid="message"]').should('have.text', 'Cpf inválido')
  })

  it('Deve mostrar mensagem erro quando a validação for cpf e o mesmo não for sequencia de números igual 11', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const number = faker.datatype.number({ min: 0, max: 9 })
    const sequence = Array(number + 1).fill(number)
    cy.get('[data-testid="input"]').type(sequence.join(''))
    cy.get('[data-testid="message"]').should('have.text', 'Cpf inválido')
  })
  it('Deve mostrar mensagem erro quando a validação for CNPJ e o mesmo não for sequencia de números igual 14', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cnpj'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const number = faker.datatype.number({ min: 0, max: 9 })
    const sequence = Array(number + 4).fill(number)
    cy.get('[data-testid="input"]').type(sequence.join(''))
    cy.get('[data-testid="message"]').should('have.text', 'CNPJ inválido')
  })
  it('Deve mostrar mensagem erro quando a validação for cpf e o mesmo não for validado na variante cpf/cnpj', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf/cnpj'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    cy.get('[data-testid="input"]').type(sequence.toString())
    cy.get('[data-testid="message"]').should('have.text', 'Cpf inválido')
  })
  it('Deve mostrar mensagem erro quando a validação for cnpj e o mesmo não for validado na variante cpf/cnpj', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf/cnpj'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000000, max: 99999999999999 })
    cy.get('[data-testid="input"]').type(sequence.toString())
    cy.get('[data-testid="message"]').should('have.text', 'CNPJ inválido')
  })

  it('Deve mostrar mensagem erro quando a validação for telefone e o mesmo não conter um ddd válido', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='telefone'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = `${0}${faker.datatype.number({ min: 0, max: 9 })}`
    cy.get('[data-testid="input"]').type(sequence)
    cy.get('[data-testid="message"]').should('have.text', 'o DDD não é válido')
  })
  it('Deve mostrar mensagem erro quando a validação for telefone e o mesmo conter menos 10 dígitos', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='telefone'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 1000000, max: 9999999 })
    cy.get('[data-testid="input"]').type(`85${sequence}`)
    cy.get('[data-testid="message"]').should('have.text', 'Telefone invalido')
  })
  it('Deve mostrar mensagem erro quando a validação for telefone e o mesmo conter mais 11 dígitos', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='telefone'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 1000000000, max: 9999999999 })
    cy.get('[data-testid="input"]').type(`85${sequence}`)
    cy.get('[data-testid="message"]').should('have.text', 'Telefone invalido')
  })
  it('Deve mostrar máscara para cpf quando essa opção for marcada na variant', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    const masked = sequence.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })
  it('Deve mostrar máscara para cnpj quando essa opção for marcada na variant', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cnpj'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000000, max: 99999999999999 })
    const masked = sequence.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })
  it('Deve mostrar máscara para cpf caso o mesmo seja passado e a variante for cpf/cnpj', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf/cnpj'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000, max: 99999999999 })
    const masked = sequence.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })
  it('Deve mostrar máscara para cnpj caso o mesmo seja passado e a variante for cpf/cnpj', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='cpf/cnpj'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 10000000000000, max: 99999999999999 })
    const masked = sequence.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })
  it('Deve mostrar máscara para telefone caso a variante for a mesma', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validator='telefone'
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    const sequence = faker.datatype.number({ min: 1000000000, max: 9999999999 })
    const masked = sequence.toString().replace(/(\d{2})(\d{4,5})(\d{4})/g, '($1) $2-$3')
    cy.get('[data-testid="input"]').type(sequence.toString()).should('have.value', masked)
  })
})
