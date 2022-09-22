import React from 'react'
import { faker } from '@faker-js/faker'
import { Button } from '.'
import 'cypress-real-events/support'

describe('Button Default', () => {
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.mount(<Button label={label} onClick={cy.stub().as('onClick')} disabled={false} />)
  })

  it('Deve ser o componente Default', () => {
    cy.get('[data-testeid="button"]')
      .should('be.visible')
      .and('have.css', 'width', '210px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'padding', '8px 24px')
      .and('have.css', 'gap', '8px')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'border-radius', '10px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.text', label)
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '19px')
  })

  it('Deve ter um ícone antes do label', () => {
    cy.get('[data-testeid="button"]')
      .get('[data-testeid="iconPrefix"]')
      .should('be.visible')
      .and('have.css', 'width', '32px')
      .and('have.css', 'height', '32px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('Deve ter um ícone depois do label', () => {
    cy.get('[data-testeid="button"]')
      .get('[data-testeid="iconSuffix"]')
      .should('be.visible')
      .and('have.css', 'width', '32px')
      .and('have.css', 'height', '32px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('Deve ser o componente Default no estado hover', () => {
    cy.get('[data-testeid="button"]').realHover().should('have.css', 'color', 'rgb(252, 214, 105)')
  })

  it('Deve ser o componente Default active', () => {
    cy.get('[data-testeid="button"]')
      .realMouseDown()
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(252, 214, 105)')
  })

  it('Deve ser o componente Default desabled', () => {
    cy.mount(<Button label={label} onClick={cy.stub().as('onClick')} disabled={true} />)
    cy.get('[data-testeid="button"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(196, 196, 196)')
  })

  it('Deve chamar uma função ao clicar', () => {
    cy.get('[data-testeid="button"]').click()
    cy.get('@onClick').should('have.been.calledOnce')
  })
})
