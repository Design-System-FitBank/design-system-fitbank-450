import React from 'react'
import { faker } from '@faker-js/faker'
import { Button } from '.'

describe('Button', () => {
  let sut: any
  const size = 'small'
  const label = faker.lorem.word()

  beforeEach(() => {
    cy.mount(<Button label={label} onClick={cy.stub().as('onClick')} size={size} />)
  })

  it('Deve ter componente visível', () => {
    cy.get('[data-testeid="button"]').should('be.visible')
  })

  it('Deve mostrar a label recebida', () => {
    cy.get('[data-testeid="button"]').should('have.text', label)
  })

  it('Deve ter uma função', () => {
    cy.get('[data-testeid="button"]').click()
    cy.get('@onClick').should('have.been.calledOnce')
  })

  it('Deve ter tamanho 142px quando o tamanho for small', () => {
    cy.get('[data-testeid="button"]').should('have.css', 'width', '142px')
  })
})
