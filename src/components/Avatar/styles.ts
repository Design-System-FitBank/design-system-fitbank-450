import styled from 'styled-components'

export const Container = styled.div<{secondary: boolean, small: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ small, theme }) => small ? theme.sizes['36px'] : theme.sizes['52px']};
  height: ${({ small, theme }) => small ? theme.sizes['36px'] : theme.sizes['52px']};
  border-radius: ${({ theme }) => theme.sizes['52px']};
  background-color: ${({ secondary, theme }) => secondary ? theme.colors.high.pure : theme.colors.primary.pure};
  color: ${({ secondary, theme }) => secondary ? theme.colors.primary.pure : theme.colors.high.pure};
`

export const Icon = styled.div<{ secondary: boolean, small: boolean }>`
  width: ${({ small, theme }) => small ? theme.sizes['20px'] : theme.sizes['28px']};
  height: ${({ small, theme }) => small ? theme.sizes['20px'] : theme.sizes['28px']};
`
