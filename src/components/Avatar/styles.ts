import styled from 'styled-components'

export const Container = styled.circle<{secondary: boolean}>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.sizes['4px']};
  width: ${({ theme }) => theme.sizes['50px']};
  height: ${({ theme }) => theme.sizes['50px']};
  border-radius: ${({ theme }) => theme.sizes['50px']};
  background-color: ${({ secondary, theme }) => secondary ? theme.colors.light : theme.colors.primary};
`

export const Icon = styled.div<{ secondary: boolean }>`
  position: absolute;
  color: ${({ secondary, theme }) => secondary ? theme.colors.primary : theme.colors.light};
`
