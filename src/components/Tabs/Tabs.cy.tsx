import "cypress-real-events/support";
import React from "react";
import { ThemeProvider } from "styled-components";
import { TabProps, Tabs, TabsInfo } from "./";
import { GlobalStyles, Theme } from "../../theme";

describe("Tabs Default",() => {
  const tabInfo: TabsInfo= [
    {
      title: "Transferencia PIX", 
      description: "Realiza tranferência via PIX",
      icon: 'keys',
      onClick: () => { }
    },
    {
      title: "Transferencia TED", 
    description: "Realiza utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => { }
    }
  ]
  const callback = (index: number) => {
    tabIndex = index
  }

  var tabIndex: number | null = null

  beforeEach(() => {
    cy.wait(100)
    cy.mount(
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Tabs tabsInfo={tabInfo} onClickTab={callback}/>
      </ThemeProvider>
    )
  })
  afterEach(() => {
    cy.wait(100)
  })
  it("Deve haver conteúdo no container", () => {
    cy.get('[data-testid=container]').children()
      .should("have.length", tabInfo.length)
  })
  
  it("Deve haver um elemento para cada TabPros",() => {
    cy.get("[data-testid=tab")
    .should("have.length", tabInfo.length)
  })

  it("Devem estar corretos os valores de cada elemento", () => {
    cy.get("[data-testid=data-container]").each(( item, index ) => {
      expect(item.text() == (`${tabInfo[index]!.title}${tabInfo[index]!.description}`))
    })
  })

  it("Devem retornar o index e selecionar ao clicar na Tab", () => {
    cy.get("[data-testid=tab]").each((item, index) => {
      cy.wrap(item).click().then(() => cy.log(`Tab ${ tabIndex } selecionada`))
      expect(tabIndex == index)
    })
  })
  it("Deve ser selecionada a Tab ao ser clicada", () => {
    cy.get("[data-testid=tab]").each(item => {
      cy.wrap(item).click().should('have.css', 'border-bottom', '4px solid rgb(252, 214, 105)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'background-color', 'rgb(50, 56, 79)')
        .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
    })
  })
})