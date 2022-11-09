import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

export const BU = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.sizes['20px']};
  color: ${({ theme }) => theme.colors.primary};
`
export const Account = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.sizes['8px']};
`
export const Identifier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes['4px']};
`
export const Label = styled.span`
  font-weight: 300;
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  color: ${({ theme }) => theme.colors.primary};
`
export const UniqueIdentifier = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  padding-left: ${({ theme }) => theme.sizes['8px']};
  padding-bottom: ${({ theme }) => theme.sizes['2px']};
  color: ${({ theme }) => theme.colors.primary};
`
