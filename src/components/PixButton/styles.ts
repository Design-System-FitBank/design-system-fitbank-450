import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.sizes['16px']};
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;

  font-weight: 600;
  font-size: 18px;

  cursor: pointer;
  :disabled {
    cursor: default;
  }
`

export const Primary = styled(Container)<PixButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabled};
    box-shadow: none;
  }
`

export const Small = styled(Container)`
flex-direction: row;
justify-content: flex-start;
width: 442px;
height: 80px;
font-size: 26px;
`
export const Text = styled.div`
display: flex;
flex-direction: column;
padding: 4px;
`

export const Icon = styled.div`
  width: ${({ theme }) => theme.sizes['38px']};
  height: ${({ theme }) => theme.sizes['38px']};
`


