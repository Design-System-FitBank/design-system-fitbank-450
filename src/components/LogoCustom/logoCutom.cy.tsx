import React from 'react'
import { mount } from 'cypress/react18'
import { LogoCustom } from '.'

describe('Logo-FB-Custom componente', () => {
  it('Deve mostrar componente logo customizado quando receber uma logo', () => {
    mount(<LogoCustom />)
    cy.get('[data-testid="logoCustom"]').should('be.visible')
  })
})
