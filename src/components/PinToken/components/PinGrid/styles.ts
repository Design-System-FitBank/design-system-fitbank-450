import styled from 'styled-components'

interface PinBoxProps {
  isDisabled?: boolean
  isError?: any
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.sizes['16px']};
`

export const PinBox = styled.input<PinBoxProps>`
  width: ${({ theme }) => theme.sizes['44px']};
  height: ${({ theme }) => theme.sizes['44px']};

  background-color: ${({ isDisabled, theme }) => (isDisabled ? theme.colors.high.medium : theme.colors.high.pure)};

  outline: none;

  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.error.pure : theme.colors.high.darkest)};
  border-radius: ${({ theme }) => theme.sizes['6px']};

  text-align: center;
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['24px']};

  &:hover {
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};
  }

  &:focus {
    border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.error.pure : theme.colors.primary.pure)};
  }
`
