import React from 'react'
import { mount } from 'cypress/react18'
import { Logo } from '.'

describe('Logo-FB-default componente', () => {
  it('Deve mostrar o componente logo default com o nome fitbank', () => {
    mount(<Logo name='default' />)
    cy.get('[data-testid="primary"]').should('be.visible')
  })

  it('Deve mostrar o componente logo na forma secundária com o nome fitbank', () => {
    mount(<Logo name='secundary' />)
    cy.get('[data-testid="secundary"]').should('be.visible')
  })

  it('Deve mostrar componente default small na cor primária', () => {
    mount(<Logo name='smallPrimary' />)
    cy.get('[data-testid="smallPrimary"]').should('be.visible')
  })

  it('Deve mostrar componente secundário small na cor secundária', () => {
    mount(<Logo name='smallSecundary' />)
    cy.get('[data-testid="smallSecundary"]').should('be.visible')
  })
})
