import { faker } from '@faker-js/faker'
import { Icon } from '../Icon'
import React from 'react'
import { NavButton } from '.'

describe('NavButton', () => {
  const icon = <Icon name='moneyNote' width={38} height={38} />
  const label = faker.lorem.word()
  it('Deve ser o componente Default e quando instanciá-lo devo passar o ícone obrigatoriamente e um título opcional', () => {
    cy.mount(
      <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
        {label}
      </NavButton>
    )
    cy.get('[data-testid="nav-button"]')
      .should('have.css', 'width', '86px')
      .and('have.css', 'height', '86px')
      .and('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'border-radius', '16px')

    cy.get('[data-testid="nav-button"]').click()
    cy.get('@onclick').should('have.been.calledOnce')
  })
})
