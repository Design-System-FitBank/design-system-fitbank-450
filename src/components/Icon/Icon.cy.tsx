import React from 'react'
import { mount } from 'cypress/react18'
import { Icon } from '.'

describe('Icon component', () => {
  it('Deve retornar o ícone com altura e largura de 32px no caso não informar width e height', () => {
    mount(<Icon name='home' />)
    cy.get('[data-testid="home"]')
      .should('be.visible')
      .and('have.css', 'width', '32px')
      .and('have.css', 'height', '32px')
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
    'details',
    'device',
    'done',
    'download',
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
    'xlsx'
  ]
  names.forEach(item => {
    it(`Deve retornar o ícone ${item} quando passar name igual ${item}`, () => {
      mount(<Icon name={item as any} />)
      cy.get(`[data-testid=${item}]`).should('be.visible')
    })
  })

  it('Deve retornar o ícone com altura e largura no valor informado', () => {
    mount(<Icon name='home' width={40} height={40} />)
    cy.get(`[data-testid=home]`).should('be.visible').and('have.css', 'width', '40px').and('have.css', 'height', '40px')
  })
})
