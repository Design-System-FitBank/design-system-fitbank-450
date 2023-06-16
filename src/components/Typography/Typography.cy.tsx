import React from 'react'

import { faker } from '@faker-js/faker'

import { mount } from 'cypress/react18'
import { GlobalStyles, ThemeDSProvider } from '../../theme'
import { Typography } from '.'

describe('Typography', () => {
  /**
   *  Default test
   */
  it('Deve conter a variante h1, com a fonte Roboto, o peso 700', () => {
    const txt = faker.lorem.sentences(3)

    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Typography variant='h1'>{txt}</Typography>
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "typography"]')
      .get(`[data-testid = "h1"]`)
      .should('have.css', 'font-family', 'Roboto')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'font-size', '56px')
      .and('have.css', 'line-height', '64px')
  })

  const variant = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle',
    'body',
    'bodySmall',
    'bodySmallLight',
    'bodyMediumLight',
    'bodyBold',
    'bodyLarge',
    'bodyLargeLight',
    'caption',
    'captionLight'
  ]

  const getValues = (variant: string) => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: '56px',
          lineHeight: '64px',
          fontWeight: '700'
        }
      case 'h2':
        return {
          fontSize: '48px',
          lineHeight: '56px',
          fontWeight: '700'
        }
      case 'h3':
        return {
          fontSize: '40px',
          lineHeight: '48px',
          fontWeight: '700'
        }
      case 'h4':
        return {
          fontSize: '32px',
          lineHeight: '40px',
          fontWeight: '700'
        }
      case 'h5':
        return {
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: '700'
        }
      case 'h6':
        return {
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: '700'
        }
      case 'subtitle':
        return {
          fontSize: '16px',
          lineHeight: 'normal',
          fontWeight: '500',
          label: 'Subtitle'
        }

      case 'body':
        return {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '500'
        }
      case 'bodySmall':
        return {
          fontSize: '12px',
          lineHeight: '20px',
          fontWeight: '500'
        }
      case 'bodySmallLight':
        return {
          fontSize: '12px',
          lineHeight: '20px',
          fontWeight: '400',
          label: 'BodySmall Light'
        }
      case 'bodyMediumLight':
        return {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '400',
          label: 'BodySmall Light'
        }
      case 'bodyLarge':
        return {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '500'
        }
      case 'bodyLargeLight':
        return {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '400',
          label: 'BodyLarge Light'
        }
      case 'bodyBold':
        return {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '700'
        }
      case 'caption':
        return {
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '500',
          label: 'Caption'
        }
      case 'captionLight':
        return {
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '400',
          label: 'Caption Light'
        }
      default:
        'Variant not found'
    }
  }

  variant.forEach(item => {
    const value = getValues(item)

    it(`Deve conter a variante ${item}, com a fonte Roboto, o peso ${value?.fontWeight},
    o tamanho de ${value?.fontSize} e a altura da linha ${value?.lineHeight}`, () => {
      const txt = faker.lorem.sentences(3)

      mount(
        <ThemeDSProvider>
          <GlobalStyles />
          <Typography variant={item as any}>{txt}</Typography>
        </ThemeDSProvider>
      )
      cy.get('[data-testid = "typography"]')
        .get(`[data-testid = "${item}"]`)
        .should('have.css', 'font-family', 'Roboto')
        .and('have.css', 'font-weight', `${value?.fontWeight}`)
        .and('have.css', 'font-size', `${value?.fontSize}`)
        .and('have.css', 'line-height', `${value?.lineHeight}`)
        .and('have.text', txt)
    })
  })
})
