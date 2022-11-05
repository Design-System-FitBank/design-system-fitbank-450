import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.sizes['16px']};
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
export const Account = styled.div`
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
