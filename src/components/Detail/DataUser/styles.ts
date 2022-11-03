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
  margin-top: ${({ theme }) => theme.sizes['4px']};
`
export const Label = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`
export const UniqueIdentifier = styled.div`
  padding-left: ${({ theme }) => theme.sizes['8px']};
  color: ${({ theme }) => theme.colors.primary};
`
