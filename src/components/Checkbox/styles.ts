import styled from 'styled-components'

type CheckboxProps = {
  checked: boolean
}

export const Checkbox = styled.div<CheckboxProps>`
  width: ${({ theme }) => theme.sizes['16px']};
  height: ${({ theme }) => theme.sizes['16px']};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.sizes['4px']};
  border: 1px solid ${({ theme }) => theme.colors.primary.pure};

  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary.pure : theme.colors.high.pure)};
  color: ${({ theme }) => theme.colors.high.pure};

  :hover {
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes['26px']};

  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary};
`
