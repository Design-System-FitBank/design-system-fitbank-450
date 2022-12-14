import React from 'react'
import { Breadline } from '.'
import { faker } from '@faker-js/faker'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Breadline Default', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Breadline path={[{ label: 'Inicio' }]} />
      </ThemeDSProvider>
    )
    cy.wait(500)
  })

  afterEach(() => cy.wait(500))

  it('Deve mostrar o componente de Breadline com duas opções de caminho', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Breadline path={[{ label: 'Inicio' }, { label: 'Área PIX' }]} />
      </ThemeDSProvider>
    )
  })

  it('Deve mostrar o componente de Breadline com três ou mais opções de caminho', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Breadline path={[{ label: 'Inicio' }, { label: 'Área PIX' }, { label: 'Pagamentos' }]} />
      </ThemeDSProvider>
    )
    cy.viewport(1080, 720)
  })
})
