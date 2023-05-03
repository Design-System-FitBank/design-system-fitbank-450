import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes['4px']};
  height: ${({ theme }) => theme.sizes['80px']};
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.low.dark};
  justify-content: flex-start;
`

export const InputContainer = styled.input<{ hasMessage?: boolean; background: string }>`
  width: 100%;
  height: ${({ theme }) => theme.sizes['48px']};
  border-radius: ${({ theme }) => theme.sizes['8px']};
  border: 1px solid ${({ theme, hasMessage }) => (hasMessage ? theme.colors.error.pure : theme.colors.high.darkest)};
  color: ${({ theme }) => theme.colors.low.dark};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  justify-content: flex-start;
  padding: 0px ${({ theme }) => theme.sizes['16px']};
  background-color: ${({ background, theme }) => background ? background : theme.colors.high.pure};
  overflow-x: hidden;

  :hover {
    box-shadow: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.sizes['2px']}
      ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.colors.shadow};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.pure};
    box-shadow: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.sizes['2px']}
      ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.colors.shadow};
    color: ${({ theme }) => theme.colors.low.dark};
  }

  :focus-visible {
    outline: none;
  }

  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.high.medium};
    background-color: ${({ theme }) => theme.colors.high.medium};
    box-shadow: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.high.darkest};
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
  top: ${({ theme }) => theme.sizes['8px']};
  width: ${({ theme }) => theme.sizes['24px']};
  height: ${({ theme }) => theme.sizes['24px']};
  color: ${({ isChecked, theme }) => (!isChecked ? theme.colors.primary.pure : theme.colors.success.pure)};
`

export const MessageError = styled.span`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.error.pure};
  font-size: ${({ theme }) => theme.sizes['14px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
  line-height: ${({ theme }) => theme.sizes['20px']};
`
