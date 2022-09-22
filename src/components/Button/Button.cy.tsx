import React from 'react'
import { faker } from '@faker-js/faker'
import { Button } from '.'
import { Home } from './img-test'

describe('Button', () => {
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.mount(<Button label={label} onClick={cy.stub().as('onClick')} />)
  })

  it('Deve ser o componente Default', () => {
    cy.get('[data-testeid="button"]')
      .should('be.visible')
      .should('have.css', 'width', '210px')
      .should('have.css', 'height', '48px')
      .should('have.css', 'padding', '8px 24px')
      .should('have.css', 'gap', '8px')
      .should('have.css', 'background-color', 'rgb(50, 55, 81)')
      .should('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .should('have.css', 'border-radius', '10px')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'justify-content', 'center')
      .should('have.css', 'align-items', 'center')
      .should('have.text', label)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('have.css', 'font-weight', '500')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'line-height', '19px')
  })

  it('Deve ter uma função', () => {
    cy.get('[data-testeid="button"]').click()
    cy.get('@onClick').should('have.been.calledOnce')
  })

  it('Deve ter um ícone antes do label', () => {
    cy.get('[data-testeid="button"]')
      .get('[data-testeid="iconPrefix"]')
      .should('be.visible')
      .should('have.css', 'width', '32px')
      .should('have.css', 'height', '32px')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('Deve ter um ícone antes do label', () => {
    cy.get('[data-testeid="button"]')
      .get('[data-testeid="iconSuffix"]')
      .should('be.visible')
      .should('have.css', 'width', '32px')
      .should('have.css', 'height', '32px')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
  })
})
