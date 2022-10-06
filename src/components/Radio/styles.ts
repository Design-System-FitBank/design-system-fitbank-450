import styled from 'styled-components'

type RadioProps = {
  checked: boolean
}

export const Container = styled.div<RadioProps>`
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
export const Child = styled.div`
  width: ${({ theme }) => theme.sizes['12px']};
  height: ${({ theme }) => theme.sizes['12px']};

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes['20px']};
`
