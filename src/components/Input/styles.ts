import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
`
export const Covarege = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  &:hover {
    width: ${({ theme }) => theme.sizes['320px']};
    height: ${({ theme }) => theme.sizes['48px']};
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};
  }
`
export const CovaregePassword = styled.div`
  display: flex;
  justify-content: space-between;

  width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ theme }) => theme.sizes['48px']};
  font-size: ${({ theme }) => theme.sizes['18px']};
  border-radius: ${({ theme }) => theme.sizes['6px']};
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  background-color: ${({ theme }) => theme.colors.light};

  &:hover {
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};
  }

  & :disabled {
    background-color: ${({ theme }) => theme.colors.inputDesabled};
    color: ${({ theme }) => theme.colors.textGrey};
  }
`
export const Label = styled.label`
  text-transform: capitalize;
  position: relative;
  left: 1px;
  max-width: ${({ theme }) => theme.sizes['320px']};
  max-height: ${({ theme }) => theme.sizes['20px']};
  color: ${({ theme }) => theme.colors.primary};
`
export const Input = styled.input<{ isValid: boolean }>`
  text-transform: capitalize;
  width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ theme }) => theme.sizes['48px']};
  font-size: ${({ theme }) => theme.sizes['18px']};

  padding-top: ${({ theme }) => theme.sizes['12px']};
  padding-right: ${({ theme }) => theme.sizes['16px']};
  padding-bottom: ${({ theme }) => theme.sizes['12px']};
  padding-left: ${({ theme }) => theme.sizes['16px']};
  border-radius: ${({ theme }) => theme.sizes['6px']};
  border: ${({ isValid, theme }) => (isValid ? theme.sizes['6px'] : '')};
  background-color: ${({ theme }) => theme.colors.light};

  & ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
    font-size: ${({ theme }) => theme.sizes['18px']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.sizes['18px']};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.inputDesabled};
    color: ${({ theme }) => theme.colors.textGrey};
  }
`
export const InputPassword = styled.input`
  width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ theme }) => theme.sizes['23px']};
  font-size: ${({ theme }) => theme.sizes['18px']};

  padding-right: ${({ theme }) => theme.sizes['7px']};
  padding-left: ${({ theme }) => theme.sizes['16px']};

  background: transparent;
  border: none;
  outline: none;

  & ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
    font-size: ${({ theme }) => theme.sizes['18px']};
  }

  &:focus {
    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.sizes['18px']};
    }
  }
`
export const Icon = styled.div<{ isDisable: boolean }>`
  cursor: pointer;
  display: ${({ isDisable }) => (isDisable ? 'none' : 'flex')};
  align-items: center;
  padding-right: ${({ theme }) => theme.sizes['16px']};
  border: none;
  color: ${({ theme }) => theme.colors.primary};
`
export const MessageError = styled.span`
  display: flex;
  position: relative;
  color: ${({ theme }) => theme.colors.error};
  left: 1px;
  margin-top: 4px;
`
