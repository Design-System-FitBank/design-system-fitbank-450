import styled from 'styled-components'

type RadioProps = {
  checked?: boolean
  direction?: string
}

export const Container = styled.div<RadioProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes['24px']};
  cursor: pointer;

  margin: ${({ theme }) => theme.sizes['16px']};

  :nth-last-child(1) {
    margin-bottom: ${({ direction }) => (direction === 'row' ? '0px' : '16px')};
  }
`

export const Radio = styled.div<RadioProps>`
  width: ${({ theme }) => theme.sizes['16px']};
  height: ${({ theme }) => theme.sizes['16px']};

  background-color: ${({ checked, theme }) => (checked ? 'transparent' : theme.colors.high.pure)};
  border: 1px solid ${({ checked, theme }) => (checked ? theme.colors.primary.pure : theme.colors.high.darkest)};
  border-radius: ${({ theme }) => theme.sizes['20px']};
  box-shadow: 2px 4px 6px ${({ checked, theme }) => (checked ? 'none' : theme.colors.shadow)};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RadioChild = styled.div<RadioProps>`
  width: ${({ theme }) => theme.sizes['12px']};
  height: ${({ theme }) => theme.sizes['12px']};

  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary.pure : theme.colors.high.pure)};
  border-radius: ${({ theme }) => theme.sizes['20px']};
`
