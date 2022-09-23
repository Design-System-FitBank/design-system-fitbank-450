import React from 'react'
import { mount } from 'cypress/react18'
import { Icon } from '.'

describe('Icon component', () => {
  it('Deve retornar o ícone Home quando passar name igual home', () => {
    mount(<Icon name='home' />)
    cy.get('[data-testid="home"]').should('be.visible')
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
    'cnh',
    'details',
    'device',
    'done',
    'download',
    'edit',
    'email',
    'enterprise',
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
})
