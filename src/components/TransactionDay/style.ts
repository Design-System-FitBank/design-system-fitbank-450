import styled from 'styled-components'

export const TransactionDay = styled.div`
  height: ${({ theme }) => theme.sizes['84px']};
  border-top: 1px ${({ theme }) => theme.colors.high.darkest};
  border-left: 1px ${({ theme }) => theme.colors.high.darkest};
  border-bottom: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.colors.high.darkest};
  border-radius: ${({ theme }) => theme.sizes['2px']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Transactions = styled.div`
  display: flex;
`
export const DateTransaction = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: -1px -1px 1px ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.sizes['8px']};
  width: ${({ theme }) => theme.sizes['40px']};
`

export const TransactionCard = styled.div`
  margin-left: ${({ theme }) => theme.sizes['20px']};
`
