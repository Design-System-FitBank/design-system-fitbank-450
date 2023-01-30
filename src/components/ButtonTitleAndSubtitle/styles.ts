import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  width: ${({ theme }) => theme.sizes['408px']};
  height: ${({ theme }) => theme.sizes['80px']};
  padding: ${({ theme }) => theme.sizes['16px']} ${({ theme }) => theme.sizes['16px']};
  gap: ${({ theme }) => theme.sizes['16px']};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.sizes['16px']};
  box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.high.pure};
  color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;

  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.high.darkest};
  }

  :active {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.high.darkest};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.high.darkest};
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
export const Title = styled.body``

export const Subtitle = styled.body``
