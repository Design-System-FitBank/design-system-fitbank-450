import React from 'react'
import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Header } from '.'

describe('Header Default', () => { 
    beforeEach(() => {
        cy.mount(
            <ThemeDSProvider theme={Theme}>
                <GlobalStyles />
                <Header />
            </ThemeDSProvider>
        )
    }) 
    it('Deve mostrar componente com 64px de altura', () => {
        cy.get('[data-testid="container"]')
        .should('be.visible')
        .and('have.css', 'height', '64px').and('have.css', 'width', '500px')
        .and('have.css', 'background-color', 'rgb(50, 55, 81)')
        .and('have.css', 'align-items', 'center')
        .and('have.css', 'padding-left', '12px')
    })

    it('Deve mostra um input de texto', () =>{
        cy.get('[data-testid="input"]')
        .should('exist')
        .and('have.css', 'height', '38px')
        .and('have.css', 'width', '410px')
        .and('have.css', 'border-radius', '10px')
        .and('have.attr', 'placeholder', 'Pesquise')
        .and('have.css', 'padding-left', '28px')
        .and('have.css', 'font-style', 'italic')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'line-height', '14px')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'background-color', 'rgba(255, 255, 255, 0.1)')
        .and('have.css', 'border-color', 'rgba(255, 255, 255, 0.1)')
    })

    // it('deve mostrar o icone de lupa de pesquisa', () => {
    //     cy.get('[data-testid=""]')
    // })
})