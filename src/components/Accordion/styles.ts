import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.sizes['260px']};
`

export const Accordion = styled.div<{ isOpen: boolean; height: number; hasLabel: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: ${({ isOpen, height, hasLabel }) => (isOpen ? height + 'px' : hasLabel ? '40px' : '0px')};
  transition: 1s;
  overflow: hidden;
  cursor: pointer;
`

export const Button = styled.span`
  display: inline-flex;
  margin-top: ${({ theme }) => theme.sizes['16px']};
`

export const Arrow = styled.div`
  padding-top: ${({ theme }) => theme.sizes['4px']};
  color: ${({ theme }) => theme.colors.primary.pure};
`

export const LabelAccordion = styled.div`
  color: ${({ theme }) => theme.colors.primary.pure};
  padding-left: ${({ theme }) => theme.sizes['12px']};
  padding-top: ${({ theme }) => theme.sizes['4px']};
`
