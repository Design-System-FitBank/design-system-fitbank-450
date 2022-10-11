import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: ${({ theme }) => theme.sizes['86px']};
  height: ${({ theme }) => theme.sizes['86px']};
  padding: ${({ theme }) => theme.sizes['8px']} ${({ theme }) => theme.sizes['4px']};
  gap: ${({ theme }) => theme.sizes['4px']};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.sizes['16px']};
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;

  font-weight: 500;
  font-size: 11px;

  cursor: pointer;

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

export const Small = styled(Container)`
  width: ${({ theme }) => theme.sizes['54px']};
  height: ${({ theme }) => theme.sizes['54px']};
`
export const Large = styled(Container)`
  flex-direction: row;
  justify-content: flex-start;
  width: ${({ theme }) => theme.sizes['160px']};
  height: ${({ theme }) => theme.sizes['56px']};
  padding: ${({ theme }) => theme.sizes['8px']};
  gap: ${({ theme }) => theme.sizes['8px']};

  font-size: 14px;
`
export const Icon = styled.div`
  width: ${({ theme }) => theme.sizes['38px']};
  height: ${({ theme }) => theme.sizes['38px']};
`
