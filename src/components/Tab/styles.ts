import styled from 'styled-components'

type TabProps = {}

export const Container = styled.button<TabProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90px;
  min-width: 60px;
  width: 100%;
  max-width: 523px;
  padding: 14px;
  gap: 16px;
  border: none;
`

export const Primary = styled(Container)<TabProps>`
  background-color: ${({ theme }) => theme.colors.high.pure};
  color: ${({ theme }) => theme.colors.primary.pure};
  box-shadow: 2px 6px 20px rgba(0, 0, 0, 0.1);

  :hover {
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary.pure};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.primary.pure};
    color: ${({ theme }) => theme.colors.high.pure};
    border-bottom: 4px solid ${({ theme }) => theme.colors.tertiary.pure};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.high.medium};
    border-bottom: 2px solid ${({ theme }) => theme.colors.high.dark};
    color: ${({ theme }) => theme.colors.high.dark};
    box-shadow: none;
  }
`
