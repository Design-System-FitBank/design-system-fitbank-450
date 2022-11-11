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

  const navButtonListInOverFlow: NavButtonListProps[] = [
    { label: 'Pix', icon: 'pix', onClick: () => { cy.stub().as('') }},
    { label: 'Recarga', icon: 'topup', onClick: () => { cy.stub().as('') }},
    { label: 'Cartões', icon: 'cardMulti', onClick: () => { cy.stub().as('') }},
    { label: 'Pagamento', icon: 'payment', onClick: () => { cy.stub().as('') }},
    { label: 'Agendamento', icon: 'calendar', onClick: () => { cy.stub().as('') }},
    { label: 'Transferencia', icon: 'moneyTransfer', onClick: () => { cy.stub().as('') }},
    { label: 'Transferencia', icon: 'moneyTransfer', onClick: () => { cy.stub().as('') }},
    { label: 'Transferencia', icon: 'moneyTransfer', onClick: () => { cy.stub().as('') }},
    { label: 'Transferencia', icon: 'moneyTransfer', onClick: () => { cy.stub().as('') }},
  ]

  const details = {
    accountData: {
      businessUnit: 'ACME Bank',
      accountName: 'KIMBAP ASIAN FOOD LTDA',
      userId: '12345678-910',
      bank: '450 - FitBank Pagamentos SA',
      bankBranch: '0000001',
      bankAccount: '02021-5',
      accountId: '020202.02020.202.0'
    }, 
    copyAccountData: () => {}
  }
  
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Sidebar navButtonList={navButtonListInOverFlow} detailProps={details} />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it.only('Deve conter o componente Sidebar', () => {
    cy.get('[data-testid = "sidebar-container"]')
      .should('have.css', 'background-color', 'rgb(249, 249, 249)')
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

  it('Deve conter o componente Sidebar como fechado', () => {
    cy.get('[data-testid = "close-button-container"]').click()
    cy.get('[data-testid = "sidebar-container"]')
      .should('have.css', 'width', '62px')
    cy.get('[data-testid = "logo-container"]')
      .should('have.css', 'width', '56px')
      .and('have.css', 'margin', '20px 4px')
    cy.get('[data-testid = "close-button-container"]')
      .should('have.css', 'justify-content', 'center')
    cy.get('[data-testid = "user-detail"]')
      .should('have.css', 'height', '64px')
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
        <Sidebar navButtonList={navButtonList} onSignOut={cy.stub().as('onSignOut')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "sign-out-button"]').click()
    cy.get('@onSignOut').should('have.been.called')
  })

  it('Deve conter o componente Detail com suas variações de altura ao ser clicado e collapsado', () => {
    cy.get('[data-testid = "user-detail"]')
      .should('have.css', 'height', '200px')
    cy.get('[data-testid = "user-detail"]').click().wait(1000)
      .should('have.css', 'height', '400px')
    cy.get('[data-testid = "user-detail"]').click().wait(1000)
      .should('have.css', 'height', '200px')
    cy.get('[data-testid = "close-button-container"]').click().wait(1000)
    cy.get('[data-testid = "user-detail"]')
    .should('have.css', 'height', '64px')
  })

  it('Deve conter o componente Sidebar sem o componente Detail', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Sidebar navButtonList={navButtonList} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "sidebar-container"]')
      .should('have.css', 'height', '100vh')
  })

  it('Deve conter o componente Sidebar com overflow', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Sidebar navButtonList={navButtonListInOverFlow} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "sidebar-container"]')
      .should('have.css', 'height', '100vh')
  })

  
})
