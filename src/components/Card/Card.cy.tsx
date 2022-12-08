import React from 'react'
import 'cypress-real-events/support'
import { Card } from './'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Card Default', () => {
  beforeEach(() => cy.wait(1000))
  afterEach(() => cy.wait(1000))

  it('Deve ser o componente Default quando não for informado o type', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Card elevation={false}></Card>
      </ThemeDSProvider>
    )
  })
  it('Deve setar o tamanho e a cor do componente', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Card width={200} height={300} color='dark' size='setSize'></Card>
      </ThemeDSProvider>
    )
  })
})
