import styled from 'styled-components';

export const Container = styled.div<{isSmall: boolean}>`
  width: ${({ isSmall, theme }) => (isSmall ? theme.sizes['20px'] : theme.sizes['32px'])};
  height: ${({ isSmall, theme }) => (isSmall ? theme.sizes['20px'] : theme.sizes['32px'])};
  display: flex;
  justify-content: center;
  align-items: center;
`