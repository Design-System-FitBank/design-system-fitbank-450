import styled from 'styled-components'

type CheckboxProps = {
  checked: boolean
}

export const Checkbox = styled.div<CheckboxProps>`
  width: ${({ theme }) => theme.sizes['15px']};
  height: ${({ theme }) => theme.sizes['15px']};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.sizes['3px']};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary : theme.colors.light)};
  color: ${({ theme }) => theme.colors.light};

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.disabled};
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
