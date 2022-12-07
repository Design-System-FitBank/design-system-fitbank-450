import React from 'react'

import { mount } from 'cypress/react18'
import { faker } from '@faker-js/faker'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Skeleton } from '.'

describe('Skeleton', () => {
  const altura = faker.datatype.number({min: 10, max: 300})
  const largura = faker.datatype.number({min: 10, max: 300})
  const radius = faker.datatype.number({min: 0, max: 100})
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Skeleton height={altura} width={largura} radius={radius} />
      </ThemeDSProvider>
    )
  })
  it('Dever conter altura e largura definida pelo dev', () => {
    cy.get('[data-testid = "skeleton"]')
      .should('have.css', 'width', `${largura}px`)
      .and('have.css', 'height', `${altura}px`)
      .and('have.css', 'background-color', 'rgb(126, 126, 126)')
      .and('have.css', 'border-radius', `${radius}px`)
      .and('have.css', 'position', 'relative')
  })
  it('Dever conter uma animação de shimmer', () => {
    cy.get('[data-testid = "skeleton"]')
      .within((element) => {
        cy.window().then(item => {
          const after = item.getComputedStyle(element[0], '::after')
          expect(after.getPropertyValue('width')).to.equal(`${largura}px`)
          expect(after.getPropertyValue('height')).to.equal(`${altura}px`)
          expect(after.getPropertyValue('background-image')).to.equal(
            'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(254, 254, 254, 0.6), rgba(0, 0, 0, 0))'
            )
          expect(after.getPropertyValue('position')).to.equal('absolute')
          expect(after.getPropertyValue('top')).to.equal('0px')
          expect(after.getPropertyValue('left')).to.equal('0px')
          expect(after.getPropertyValue('animation')).to.equal('1.75s ease 0s infinite normal none running ifEGGr')
        })
      })
  })
})
