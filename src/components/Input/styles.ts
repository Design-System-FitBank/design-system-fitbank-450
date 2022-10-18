import styled from 'styled-components'

export const Label = styled.label`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-start;
`

// export const Wrap = styled.div<{ isValid: boolean }>`
//   border: 1px solid ${({ theme }) => theme.colors.disabled};
//   color: ${({ theme }) => theme.colors.disabled};
/* display: flex;
  justify-content: space-between;

  width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ theme }) => theme.sizes['48px']};
  border-radius: ${({ theme }) => theme.sizes['6px']};
  border: 1px solid ${({ isValid, theme }) => (isValid ? theme.colors.error : theme.colors.disabled)};
  background-color: ${({ theme }) => theme.colors.light};

  &:hover {
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};
  }

  &:focus-within {
    border: 1px solid ${({ isValid, theme }) => (isValid ? theme.colors.error : theme.colors.primary)};
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow}; */
//   }
// `

export const InputContainer = styled.input<{ hasMessage?: boolean }>`
  display: flex;
  position: relative;
  width: ${({ theme }) => theme.sizes['320px']};
  border: 1px solid ${({ theme, hasMessage }) => (hasMessage ? theme.colors.error : theme.colors.disabled)};
  color: ${({ theme }) => theme.colors.disabled};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
  font-size: ${({ theme }) => theme.sizes['18px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  justify-content: flex-start;
  padding-left: ${({ theme }) => theme.sizes['16px']};

  :hover {
    box-shadow: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.sizes['2px']}
      ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.colors.shadow};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.sizes['2px']}
      ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.colors.shadow};
    color: ${({ theme }) => theme.colors.primary};
  }
  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    background-color: ${({ theme }) => theme.colors.disabled};
    box-shadow: none;
  }
`
export const Wrap = styled.div`
  display: flex;
  position: relative;
  width: ${({ theme }) => theme.sizes['320px']};
`

export const Icon = styled.div`
  display: flex;
  position: absolute;
  right: ${({ theme }) => theme.sizes['16px']};
  top: -2px;
  width: ${({ theme }) => theme.sizes['24px']};
  height: ${({ theme }) => theme.sizes['24px']};
  color: ${({ theme }) => theme.colors.primary};
`
// export const Icon = styled.div<{ isDisable: boolean; isValid: boolean }>`
//   cursor: pointer;
//   display: ${({ isDisable }) => (isDisable ? 'none' : 'flex')};
//   align-items: center;
//   padding-right: ${({ theme }) => theme.sizes['16px']};
//   border: none;
//   color: ${({ isValid, theme }) => (!isValid ? theme.colors.primary : theme.colors.success)};
// `
// export const MessageError = styled.span`
//   display: flex;
//   position: relative;
//   color: ${({ theme }) => theme.colors.error};
//   left: 1px;
//   margin-top: 4px;
// `
