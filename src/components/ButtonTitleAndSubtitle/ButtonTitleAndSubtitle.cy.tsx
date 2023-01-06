import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { ButtonTitleAndSubtitle } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Button Default', () => {
  const icon = 'userBank'
  const textFaker = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <ButtonTitleAndSubtitle
          title={textFaker}
          subtitle={textFaker}
          icon={icon}
          onClick={cy.stub().as('onclick')}
          disabled={false}
        />
      </ThemeDSProvider>
    )
  })
  afterEach(() => {
    cy.wait(100)
  })
  const names = [
    'home',
    'adress',
    'arrowDown',
    'arrowLeft',
    'arrowRight',
    'arrowUp',
    'authorization',
    'calendar',
    'cancel',
    'card',
    'cardMulti',
    'changeAccount',
    'checked',
    'cnh',
    'copyAndPaste',
    'details',
    'device',
    'done',
    'download',
    'doc',
    'edit',
    'email',
    'enterprise',
    'eyeClose',
    'eyeOpen',
    'favorite',
    'favoriteAdd',
    'favoriteRemove',
    'filter',
    'pin',
    'code',
    'link',
    'money',
    'moneyln',
    'moneyNote',
    'moneyOut',
    'moneyTransfer',
    'moneyTransferSMS',
    'onboardingCard',
    'onboardingSMS',
    'options',
    'payment',
    'pix',
    'plus',
    'qrCode',
    'qrCodeIn',
    'receipt',
    'refresh',
    'rg',
    'scheduled',
    'selectAll',
    'sendMoney',
    'setup',
    'share',
    'ticketPayment',
    'toggleOff',
    'toggleOn',
    'topup',
    'trash',
    'upload',
    'user',
    'userBank',
    'userGroup',
    'userSearch',
    'withdrawMoney',
    'xlsx',
    'search'
  ]
  //Testando o css do botão
  it('Deve renderizar o botão com todos os styles', () => {
    cy.get('[data-testid="button"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'width', '442px')
      .and('have.css', 'height', '80px')
      .and('have.css', 'padding', '16px')
      .and('have.css', 'gap', '16px')
      .and('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '16px')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'overflow', 'hidden')
      .and('have.css', 'cursor', 'pointer')
    cy.get('[data-testid="button"]').click()
    cy.get('@onclick').should('have.been.calledOnce')
    cy.get('[data-testid="button"]').should('have.css', 'cursor', 'pointer')
  }),
    it('Deve renderizar o titulo e o subtitulo', () => {
      const title = faker.lorem.word()
      const subtitle = faker.lorem.word()
      cy.mount(
        <ThemeDSProvider theme={Theme}>
          <GlobalStyles />
          <ButtonTitleAndSubtitle
            title={title}
            subtitle={subtitle}
            icon={icon}
            onClick={cy.stub().as('onclick')}
            disabled={false}
          />
        </ThemeDSProvider>
      )
      cy.get('[data-testid="button-title"]').should('have.text', title)
      cy.get('[data-testid="button-subtitle"]').should('have.text', subtitle)
    }),
    names.forEach(item => {
      it(`Deve renderizar o botão com o ícone ${item} quando passar name igual ${item}`, () => {
        cy.mount(
          <ThemeDSProvider theme={Theme}>
            <GlobalStyles />
            <ButtonTitleAndSubtitle
              title={textFaker}
              subtitle={textFaker}
              icon={item}
              onClick={cy.stub().as('onclick')}
              disabled={false}
            />
          </ThemeDSProvider>
        )
        cy.get(`[data-testid=${item}]`).should('be.visible')
      })
    })
})
