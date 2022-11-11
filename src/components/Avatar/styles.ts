import styled from 'styled-components'

export const Container = styled.div<{secondary: boolean, small: boolean}>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  
  width: ${({ small, theme }) => small ? theme.sizes['34px'] : theme.sizes['50px']};
  height: ${({ small, theme }) => small ? theme.sizes['34px'] : theme.sizes['50px']};
  border-radius: ${({ theme }) => theme.sizes['50px']};
  background-color: ${({ secondary, theme }) => secondary ? theme.colors.light : theme.colors.primary};
  color: ${({ secondary, theme }) => secondary ? theme.colors.primary : theme.colors.light};
`

export const Icon = styled.div<{ secondary: boolean, small: boolean }>`
  width: ${({ small, theme }) => small ? theme.sizes['10px'] : theme.sizes['18px']};
  height: ${({ small, theme }) => small ? theme.sizes['20px'] : theme.sizes['20px']};
`
