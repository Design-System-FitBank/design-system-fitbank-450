import styled from 'styled-components'

export const Container = styled.div`
  width: 35.688rem;
  height: 5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
`

export const IconMoney = styled.div<{ isCredit: boolean }>`
  width: 1.5rem;
  height: 1.594rem;
  cursor: pointer;
  margin-right: 1.5rem;
  color: ${({ theme, isCredit }) => (isCredit ? theme.colors.success : theme.colors.error)};
`
export const Button = styled.div`
  width: 17rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -0.5rem;
`

export const Title = styled.div`
  width: 15.625rem;
  height: 4rem;
  margin: 3 1rem 1rem 3rem;
  align-items: center;
  margin-right: 3rem;
`

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin-top: -0.25rem;
`
export const TransactionDay = styled.div`
  width: 2.813rem;
  height: 5.069rem;
  border-top: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
  border-radius: 2px;
  margin-right: 1rem;
  padding-left: 0.25rem;
  display: 'flex';
  flex-direction: 'column';

  justify-content: space-between;
`
export const Item = styled.div`
  width: '100%';
`
