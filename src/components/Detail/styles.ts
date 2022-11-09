import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.sizes['260px']};
`
export const Accordion = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ isOpen }) => (isOpen ? '370px' : '200px')};
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;
`
export const Avatar = styled.div`
  margin-top: ${({ theme }) => theme.sizes['8px']};
`
export const ButtonData = styled.span`
  display: inline-flex;
  margin-top: 16px;
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
export const CopyData = styled.div`
  margin-top: ${({ theme }) => theme.sizes['28px']};
`

export const ChangeAccount = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.sizes['28px']};
  cursor: pointer;
  align-items: center;
`
export const Refresh = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
export const LabelChangeAccount = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['14px']};
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${({ theme }) => theme.sizes['12px']};
  padding-left: ${({ theme }) => theme.sizes['8px']};
  padding-bottom: ${({ theme }) => theme.sizes['4px']};
`
