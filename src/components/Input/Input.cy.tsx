import React from 'react'
import 'cypress-real-events/support'
import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Input } from '.'
import { faker } from '@faker-js/faker'

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
      .and('have.css', 'width', '320px')
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

  it('Deve mostrar mensagem quando receber mensagem de erro de validação', () => {
    const messageErro = faker.lorem.sentence()
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input
          type='text'
          title={titleFake}
          placeholder={placeholderFake}
          disabled={false}
          validated={messageErro}
          onchange={cy.stub().as('onchange')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').should('have.css', 'border', '1px solid rgb(234, 62, 62)')
    cy.get('[data-testid="message"]')
      .should('have.text', messageErro)
      .and('have.css', 'color', 'rgb(234, 62, 62)')
      .and('have.css', 'margin-top', '4px')
      .and('have.css', 'justify-content', 'flex-start')
  })

  it('Deve mostrar componente password validado quando a função validadora não retornar mensagem', () => {
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
    cy.get('[data-testid="input"]').type(textFaker)
    cy.get('[data-testid="icon"]').get('[data-testid="eyeOpen"]').should('exist')
    cy.get('[data-testid="icon"]').get('[data-testid="done"]').should('not.exist')
    cy.wait(800)
    cy.get('@onchange').should('have.been.called')
    cy.get('[data-testid="icon"]').get('[data-testid="eyeOpen"]').should('not.exist')
    cy.get('[data-testid="icon"]').get('[data-testid="done"]').and('have.css', 'color', 'rgb(12, 194, 96)')
  })

  // it('Deve mostrar o componente do tipo Default com valores no campo de texto', () => {
  //   cy.get('[data-testid="input"]').type(textFaker)
  //   cy.get('[data-testid="input"]').should('have.value', textFaker)
  // })

  // it('Deve mostrar o componente Default desabilitado', () => {
  //   mount(
  //     <ThemeDSProvider theme={Theme}>
  //       <GlobalStyles />
  //       <Input type='text' title={titleFake} placeholder={placeholderFake} disabled={true} />
  //     </ThemeDSProvider>
  //   )
  //   cy.get('[data-testid="input"]')
  //     .should('be.disabled')
  //     .and('have.css', 'background-color', 'rgb(196, 196, 196)')
  //     .and('have.css', 'color', 'rgb(121, 121, 121)')
  //     .and('have.css', 'border', 'none')
  // })

  // it('Deve mostrar o layout de erro quando receber uma mensagem de erro', () => {
  //   mount(
  //     <ThemeDSProvider theme={Theme}>
  //       <GlobalStyles />
  //       <Input type='text' title={titleFake} placeholder={placeholderFake} disabled={false} validator={erroMessage} />
  //     </ThemeDSProvider>
  //   )
  //   cy.get('[data-testid="input"]').type(textFaker)
  //   cy.get('[data-testid="message"]')
  //     .should('exist')
  //     .and('have.text', erroMessage)
  //     .and('have.css', 'color', 'rgb(234, 62, 62)')
  //   cy.get('[data-testid="container"]').should('have.css', 'border', '1px solid rgb(234, 62, 62)')
  // })

  // it('Deve mostrar o componente default com o tipo password ', () => {
  //   mount(
  //     <ThemeDSProvider theme={Theme}>
  //       <GlobalStyles />
  //       <Input type='password' title={titleFake} placeholder={placeholderFake} disabled={false} />
  //     </ThemeDSProvider>
  //   )
  //   cy.get('[data-testid="input"]').should('have.attr', 'placeholder', '••••••••')
  //   cy.get('[data-testid="icon"]').should('exist')
  //   cy.get('[data-testid="eyeOpen"]').should('exist')
  //   cy.get('[data-testid="input"]').type(textFaker)
  //   cy.get('[data-testid="icon"]').click()
  //   cy.get('[data-testid="eyeClose"]').should('exist')
  //   cy.get('[data-testid="input"]').should('have.attr', 'placeholder', '••••••••')
  // })

  // it('Deve mostrar o componente default com o tipo password e icone checked em caso de não haver mensagem de erro ', () => {
  //   mount(
  //     <ThemeDSProvider theme={Theme}>
  //       <GlobalStyles />
  //       <Input type='password' title={titleFake} placeholder={placeholderFake} disabled={false} />
  //     </ThemeDSProvider>
  //   )
  //   cy.get('[data-testid="input"]').type(textFaker)
  //   cy.get('[data-testid="done"]').should('exist')
  // })
})
