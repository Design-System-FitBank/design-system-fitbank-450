import styled from 'styled-components'

export const Container = styled.div<{ isSmall: boolean }>`
  width: ${({ isSmall, theme }) => (isSmall ? theme.sizes['435px'] : theme.sizes['212px'])};
  height: ${({ isSmall, theme }) => (isSmall ? theme.sizes['18px'] : theme.sizes['28px'])};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
