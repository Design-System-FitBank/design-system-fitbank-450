import styled from 'styled-components'

export const Container = styled.div<{showModal?: boolean}>`
  display: ${({showModal}) => showModal ? 'block' : 'none'};

  width: 100%;
  max-width: 323px;
  height: 100%;
  max-height: 400px;

  margin-top: ${({ theme }) => theme.sizes['24x']};

  background-color: ${({ theme }) => theme.colors.textDisabled};
  border-radius: ${({ theme }) => theme.sizes['20px']};
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  height: 100%;
  max-height: ${({ theme }) => theme.sizes['82px']};

  padding: ${({ theme }) => theme.sizes['10px']};
  gap: ${({ theme }) => theme.sizes['16px']};
`

export const Calendar = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.sizes['260px']};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.light};
`

export const DateContent = styled.div`
  width: ${({ theme }) => theme.sizes['30px']};
  height: ${({ theme }) => theme.sizes['30px']};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.textDisabled};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`

export const MonthButton = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes['160px']};
`

export const YearsButton = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes['108px']};
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  padding: ${({ theme }) => theme.sizes['16px']};
  gap: ${({ theme }) => theme.sizes['10px']};
`

export const CancelButton = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes['48px']};
`

export const ConfirmationButton = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes['10px']};
`
