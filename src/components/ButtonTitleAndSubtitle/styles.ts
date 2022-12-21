import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  width: 442px;
  height: 81px;
  padding: ${({ theme }) => theme.sizes['16px']} ${({ theme }) => theme.sizes['16px']};
  gap: ${({ theme }) => theme.sizes['16px']};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.sizes['16px']};
  box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;

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
    cursor: auto;
  }
`

export const ButtonAlign = styled(Container)`
  display: flex;
  flex-direction: row;
`

export const Icon = styled.div`
  width: ${({ theme }) => theme.sizes['38px']};
  height: ${({ theme }) => theme.sizes['38px']};
`
export const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Title = styled.h6`
  font-size: ${({ theme }) => theme.sizes['20px']};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const Subtitle = styled.sub`
  font-size: ${({ theme }) => theme.sizes['14px']};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`
