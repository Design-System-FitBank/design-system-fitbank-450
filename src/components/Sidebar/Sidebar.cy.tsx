import React from 'react'

import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Sidebar, NavButtonListProps } from './'

describe('Sidebar', () => {
  const navButtonList: NavButtonListProps[] = [
    { label: 'Pix', icon: 'pix', onClick: () => { cy.stub().as('') }},
    { label: 'Recarga', icon: 'topup', onClick: () => { cy.stub().as('') }},
    { label: 'Cartões', icon: 'cardMulti', onClick: () => { cy.stub().as('') }},
    { label: 'Pagamento', icon: 'payment', onClick: () => { cy.stub().as('') }},
    { label: 'Agendamento', icon: 'calendar', onClick: () => { cy.stub().as('') }},
    { label: 'Transferencia', icon: 'moneyTransfer', onClick: () => { cy.stub().as('') }}
  ]

  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Sidebar navButtonList={navButtonList} />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o componente Sidebar', () => {
    cy.get('[data-testid = "sidebar-container"]')
      .should('have.css', 'background-color', 'rgb(232, 232, 232)')
      .and('have.css', 'height', '500px')
      .and('have.css', 'width', '320px')
    cy.get('[data-testid = "logo-container"]')
      .should('have.css', 'width', '142px')
      .and('have.css', 'height', '38px')
      .and('have.css', 'margin', '20px 0px')
    cy.get('[data-testid = "close-button-container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'flex-end')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'margin', '12px')
      .and('have.css', 'gap', '12px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'cursor', 'pointer')
    cy.get('[data-testid = "user-detail"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'height', '300px')
      .and('have.css', 'text-align', 'center')
    cy.get('[data-testid = "nav-button-grid"]')
      .should('have.css', 'display', 'grid')
      .and('have.css', 'margin', '50px 0px')
      .and('have.css', 'grid-template-columns', '100px 100px 100px')
      .and('have.css', 'grid-template-rows', '90px 90px 0px')
      .and('have.css', 'justify-items', 'center')
      .and('have.css', 'column-gap', '10px')
      .and('have.css', 'row-gap', '15px')
    cy.get('[data-testid = "sign-out-button"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'flex-end')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'margin', '12px')
      .and('have.css', 'gap', '12px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'cursor', 'pointer')
  })

  it('Deve conter o componente Sidebar com o fechado', () => {
    cy.get('[data-testid = "close-button-container"]').click()
    cy.get('[data-testid = "sidebar-container"]')
      .should('have.css', 'width', '62px')
    cy.get('[data-testid = "logo-container"]')
      .should('have.css', 'width', '56px')
      .and('have.css', 'margin', '20px 4px')
    cy.get('[data-testid = "close-button-container"]')
      .should('have.css', 'justify-content', 'center')
    cy.get('[data-testid = "user-detail"]')
      .should('have.css', 'height', '80px')
    cy.get('[data-testid = "nav-button-grid"]')
      .should('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
  })

  it('Deve conter o componente Sidebar aberto depois de ter sido fechado', () => {
    cy.get('[data-testid = "close-button-container"]').click()
    cy.get('[data-testid = "close-button-container"]').wait(700).click()
  })

  it('Deve chamar a função onSignOut', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Sidebar navButtonList={navButtonList} onSignOut={cy.stub().as('onSignOut')}/>
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "sign-out-button"]').click()
    cy.get('@onSignOut').should('have.been.called')
  })
})
