import styled from 'styled-components'

export const TransactionDay = styled.div`
  width: ${({ theme }) => theme.sizes['44px']};
  height: 5.069rem;
  border-top: 1px ${({ theme }) => theme.colors.disabled};
  border-left: 1px ${({ theme }) => theme.colors.disabled};
  border-bottom: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.colors.disabled};
  border-radius: ${({ theme }) => theme.sizes['2px']};
  margin-right: 1rem;
  padding-left: 0.25rem;
  display: 'flex';
  flex-direction: 'column';
  justify-content: space-between;
`
