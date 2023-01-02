import styled from 'styled-components'

export const TransactionDay = styled.div`
  width: ${({ theme }) => theme.sizes['44px']};
  height: 5.069rem;
  border-top: 1px ${({ theme }) => theme.colors.high.darkest};
  border-left: 1px ${({ theme }) => theme.colors.high.darkest};
  border-bottom: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.colors.high.darkest};
  border-radius: ${({ theme }) => theme.sizes['2px']};
  margin-right: 1rem;
  padding-left: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Transactions = styled.div`
  display: flex;
`
export const DateTransaction = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: -1px -1px 1px ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.sizes['8px']};
`

export const TransactionCard = styled.div`
  margin-left: 1.25rem;
`
