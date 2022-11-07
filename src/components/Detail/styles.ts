import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: ${({ theme }) => theme.sizes['320px']};
  width: ${({ theme }) => theme.sizes['255px']};
`
export const Avatar = styled.div`
  margin-top: ${({ theme }) => theme.sizes['8px']};
`
export const Accordion = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.sizes['16px']};
  cursor: pointer;

`
export const Arrow = styled.div`
  padding-top: ${({ theme }) => theme.sizes['4px']};
  color: ${({ theme }) => theme.colors.primary};
`

export const LabelAccordion = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.sizes['12px']};
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
  padding-left: ${({ theme }) => theme.sizes['8px']};
  padding-bottom: 4px;
`
