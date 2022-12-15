import styled from 'styled-components'

export const Label = styled.label`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.sizes['4px']};
`

export const InputContainer = styled.input<{ hasMessage?: boolean }>`
  width: 100%;
  height: ${({ theme }) => theme.sizes['48px']};
  border-radius: ${({ theme }) => theme.sizes['6px']};
  border: 1px solid ${({ theme, hasMessage }) => (hasMessage ? theme.colors.error : theme.colors.disabled)};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
  font-size: ${({ theme }) => theme.sizes['18px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  justify-content: flex-start;
  padding: 0px ${({ theme }) => theme.sizes['16px']};
  overflow-x: hidden;

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

    ::placeholder {
      color: ${({ theme }) => theme.colors.textGrey};
    }
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
`
export const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

export const Icon = styled.div<{ isChecked?: boolean }>`
  display: flex;
  position: absolute;
  cursor: ${({ isChecked }) => (!isChecked ? 'pointer' : 'auto')};
  right: ${({ theme }) => theme.sizes['16px']};
  top: ${({ theme }) => theme.sizes['7px']};
  width: ${({ theme }) => theme.sizes['24px']};
  height: ${({ theme }) => theme.sizes['24px']};
  color: ${({ isChecked, theme }) => (!isChecked ? theme.colors.primary : theme.colors.success)};
`

export const MessageError = styled.span`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.sizes['4px']};
`
