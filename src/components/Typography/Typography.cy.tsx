import React from 'react'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Typography } from '.'

describe('Typography', () => {
  const types = [
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'Subtitle',
    'Body',
    'BodySmall',
    'BodyBold',
    'BodyLarge',
    'Button',
    'ButtonSmall',
    'ButtonLarge',
    'Caption'
  ]

  const getValues = (types: string) => {
    var value

    switch (types) {
      case 'H1':
        return (value = {
          label: 'Headline H1',
          fontSize: '56px',
          lineHeight: '64px',
          fontWeight: '700'
        })
      case 'H2':
        return (value = {
          label: 'Headline H2',
          fontSize: '48px',
          lineHeight: '56px',
          fontWeight: '700'
        })
      case 'H3':
        return (value = {
          label: 'Headline H3',
          fontSize: '40px',
          lineHeight: '48px',
          fontWeight: '700'
        })
      case 'H4':
        return (value = {
          label: 'Headline H4',
          fontSize: '32px',
          lineHeight: '40px',
          fontWeight: '700'
        })
      case 'H5':
        return (value = {
          label: 'Headline H5',
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: '700'
        })
      case 'H6':
        return (value = {
          label: 'Headline H6',
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: '700'
        })

      case 'Subtitle':
        return (value = {
          label: 'Subtitle',
          fontSize: '16px',
          lineHeight: 'normal',
          fontWeight: '500'
        })
      case 'Body':
        return (value = {
          label: 'Body',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '400'
        })
      case 'BodySmall':
        return (value = {
          label: 'BodySmall',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '400'
        })
      case 'BodyLarge':
        return (value = {
          label: 'BodyLarge',
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: '400'
        })
      case 'BodyBold':
        return (value = {
          label: 'BodyBold',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '700'
        })
      case 'Button':
        return (value = {
          label: 'Button',
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: '700'
        })
      case 'ButtonSmall':
        return (value = {
          label: 'ButtonSmall',
          fontSize: '14px',
          lineHeight: '18px',
          fontWeight: '700'
        })
      case 'ButtonLarge':
        return (value = {
          label: 'ButtonSmall',
          fontSize: '18px',
          lineHeight: '24px',
          fontWeight: '700'
        })
      case 'Caption':
        return (value = {
          label: 'Caption',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '400'
        })
    }
  }

  types.forEach(item => {
    const value = getValues(item as any)

    it(`Deve conter o tipo ${item}, com a fonte Reboto, o peso ${value?.fontWeight},
     o tamanho de ${value?.fontSize} e a altura da linha ${value?.lineHeight}`, () => {
      mount(
        <ThemeDSProvider theme={Theme}>
          <GlobalStyles />
          <Typography type={item as any} label={value?.label as any} />
        </ThemeDSProvider>
      )
      cy.get('[data-testid = "typography"]')
        .get(`[data-testid = '${item}']`)
        .should('have.css', 'font-family', 'Roboto')
        .and('have.css', 'font-weight', `${value?.fontWeight}`)
        .and('have.css', 'font-size', `${value?.fontSize}`)
        .and('have.css', 'line-height', `${value?.lineHeight}`)
    })
  })
})
