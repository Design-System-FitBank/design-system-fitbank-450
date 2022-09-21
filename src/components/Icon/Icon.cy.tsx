import React from 'react'
import { mount } from 'cypress/react18'
import { Icon } from '.'

describe('Icon component', () => {
  it('Deve retornar o ícone Home quando passar name igual home', () => {
    mount(<Icon name='home' />)
    cy.get('[data-testid="home"]').should('be.visible')
  })
})
