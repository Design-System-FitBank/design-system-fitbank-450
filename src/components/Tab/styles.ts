import styled from 'styled-components'

type TabProps = {}

export const Container = styled.button<TabProps>`
  height: 80px;
  width: 391px;
  left: 20px;
  top: 20px;
  border-radius: 0px;
  padding: 16px;
`

export const Primary = styled(Container)<TabProps>`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    border-bottom: 4px solid ${({ theme }) => theme.colors.tertiary};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.neutralLight};
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutralGrey};
    color: ${({ theme }) => theme.colors.neutralGrey};
    box-shadow: none;
  }
`
