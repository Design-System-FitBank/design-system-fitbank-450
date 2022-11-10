import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.sizes['260px']};
`
export const Accordion = styled.div<{ isOpen: boolean; collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ isOpen, collapsed }) => (collapsed ? '64px' : isOpen ? '360px' : '200px')};
  width: ${({ collapsed }) => (collapsed ? '60px' : 'auto')};
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;
`
export const Avatar = styled.div`
  margin-top: ${({ theme }) => theme.sizes['8px']};
`
export const ButtonData = styled.span`
  display: inline-flex;
  margin-top: ${({ theme }) => theme.sizes['16px']};
`
export const Collapsed = styled.div`
  display: flex;
  justify-content: center;
`
export const IconCollapsed = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes['46px']};
  height: ${({ theme }) => theme.sizes['28px']};
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes['8px']};
  padding-left: ${({ theme }) => theme.sizes['12px']};
  cursor: pointer;
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
export const CopyData = styled.div<{ isOpen: boolean }>`
  margin-top: ${({ isOpen }) => (isOpen ? '16px' : '28px')}; ;
`
export const ChangeAccount = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.sizes['24px']};
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
