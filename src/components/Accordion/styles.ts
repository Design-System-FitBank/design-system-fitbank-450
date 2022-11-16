import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes['260px']};
`

export const Accordion = styled.div<{ isOpen: boolean; height: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: ${({ isOpen, height }) => (isOpen ? height + 'px' : '40px')};
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
  color: ${({ theme }) => theme.colors.primary};
`

export const LabelAccordion = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.sizes['12px']};
  padding-top: ${({ theme }) => theme.sizes['4px']};
`
