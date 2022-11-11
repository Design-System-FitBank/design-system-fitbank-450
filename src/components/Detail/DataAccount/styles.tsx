import styled from 'styled-components'

export const ContainerBank = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.sizes['16px']};
  width: auto;
`
export const LabelBank = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
export const Bank = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
export const Branch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes['4px']};
`
export const LabelBranch = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
export const NumberBranch = styled.div`
  font-weight: 500;
  margin-top: ${({ theme }) => theme.sizes['2px']};
  padding-left: ${({ theme }) => theme.sizes['4px']};
  color: ${({ theme }) => theme.colors.primary};
`
export const BankAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes['4px']};
`
export const LabelAccount = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
export const AccountBank = styled.div`
  font-weight: 500;
  margin-top: ${({ theme }) => theme.sizes['2px']};
  padding-left: ${({ theme }) => theme.sizes['4px']};
  color: ${({ theme }) => theme.colors.primary};
`
export const AccountId = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes['4px']};
`
export const LabelAccountId = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
export const NumberId = styled.div`
  font-weight: 500;
  margin-top: ${({ theme }) => theme.sizes['2px']};
  padding-left: ${({ theme }) => theme.sizes['4px']};
  color: ${({ theme }) => theme.colors.primary};
`
export const ContainerUser = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`
export const BU = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.sizes['20px']};
  color: ${({ theme }) => theme.colors.primary};
`
export const AccountUser = styled.div`
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
