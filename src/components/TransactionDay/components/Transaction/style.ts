import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ theme }) => theme.sizes['500px']};
  height: ${({ theme }) => theme.sizes['84px']};
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
  color: ${({ theme, isCredit }) => (isCredit == true ? theme.colors.success.pure : theme.colors.error.pure)};
`
export const Details = styled.div`
  width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ theme }) => theme.sizes['64px']};
  align-items: center;
`
export const Button = styled.div`
  width: ${({ theme }) => theme.sizes['320px']};
  margin-top: ${({ theme }) => theme.sizes['16px']};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const OperationType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
