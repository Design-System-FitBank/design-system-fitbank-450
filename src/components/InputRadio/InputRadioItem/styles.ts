import styled from 'styled-components'

type RadioProps = {
  checked?: boolean
  direction?: string
}

export const Container = styled.div<RadioProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes['26px']};
  cursor: pointer;

  margin: ${({ theme }) => theme.sizes['16.5px']};

  :nth-last-child(1) {
    margin-bottom: ${({ direction }) => (direction === 'row' ? '0px' : '16.5px')};
  }
`

export const Radio = styled.div<RadioProps>`
  width: ${({ theme }) => theme.sizes['16px']};
  height: ${({ theme }) => theme.sizes['16px']};

  background-color: ${({ checked, theme }) => (checked ? theme.colors.transparent : theme.colors.light)};
  border: 1px solid ${({ checked, theme }) => (checked ? theme.colors.radioChecked : theme.colors.radioUnchecked)};
  border-radius: ${({ theme }) => theme.sizes['20px']};
  box-shadow: 2px 4px 6px ${({ checked, theme }) => (checked ? 'none' : theme.colors.shadow)};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RadioChild = styled.div<RadioProps>`
  width: ${({ theme }) => theme.sizes['12px']};
  height: ${({ theme }) => theme.sizes['12px']};

  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary : theme.colors.light)};
  border-radius: ${({ theme }) => theme.sizes['20px']};
`
