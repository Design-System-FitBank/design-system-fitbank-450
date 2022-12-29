import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ theme }) => theme.sizes['500px']};
  height: ${({ theme }) => theme.sizes['80px']};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.high.medium};
`
export const IconMoney = styled.div<{ isCredit: boolean }>`
  width: ${({ theme }) => theme.sizes['36px']};
  height: ${({ theme }) => theme.sizes['36px']};
  cursor: pointer;
  margin-right: ${({ theme }) => theme.sizes['24px']};
  color: ${({ theme, isCredit }) => (isCredit ? theme.colors.success : theme.colors.error)};
`
export const Details = styled.div`
  width: ${({ theme }) => theme.sizes['250px']};
  height: ${({ theme }) => theme.sizes['64px']};
  align-items: center;
`
export const Button = styled.div`
  width: ${({ theme }) => theme.sizes['272px']};
  margin-top: ${({ theme }) => theme.sizes['16px']};
  display: flex;
  flex-direction: row;
  align-items: center;
`
