import React from 'react'

import { faker } from '@faker-js/faker'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../../../theme'
import { SelectedDate } from './'

const years = [
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
  '2029',
  '2030'
] //Array(100).fill(faker.date.between('2000-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'))
const year = years[years.length - 1]

describe('SelectedDate', () => {
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <SelectedDate onClick={cy.stub().as('onClick')} options={years} selected={year} />
      </ThemeDSProvider>
    )
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o SelectedDate default', () => {
    cy.get('[data-testid = "SelectedDate-schedule"]').should('have.css', '')
  })
})
