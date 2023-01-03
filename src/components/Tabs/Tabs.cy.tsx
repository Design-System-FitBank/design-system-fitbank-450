import "cypress-real-events/support";
import React from "react";
import { ThemeProvider } from "styled-components";
import { TabProps, Tabs } from "./";
import { GlobalStyles, Theme } from "../../theme";

describe("Tabs Default",() => {
  const tabInfo: TabProps[] = [
    {
      title: "Transferencia PIX", 
      description: "Realiza tranferência via PIX",
      icon: 'keys',
      onClick: () => { return 1 }
    },
    {
      title: "Transferencia TED", 
      description: "Realiza utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => { return 1 }
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
  
  it("Dever haver um elemento para cada TabPros",() => {
    cy.get("[data-testid=tab")
    .should("have.length", tabInfo.length)
  })

  it("Devem estar corretos os valores de cada elemento", () => {
    cy.get("[data-testid=data-container]").each(( item, index ) => {
      expect(item.text() == (`${tabInfo[index].title}${tabInfo[index].description}`))
    })
  })

  it("Devem retornar o index ao clicar na Tab", () => {
    cy.get("[data-testid=tab]").each((item, index) => {
      cy.wrap(item).click()
      expect(tabIndex == index)
    })
  })
})