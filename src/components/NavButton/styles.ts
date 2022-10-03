import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: ${({ theme }) => theme.sizes['86px']};
  height: ${({ theme }) => theme.sizes['86px']};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.sizes['16px']};
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.disabled};
  }

  :active {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.disabled};
  }
`
