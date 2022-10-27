import styled from 'styled-components';

export const Container = styled.div<{ isSmall: boolean }>`
  width: ${({ isSmall, theme }) => (isSmall ? theme.sizes['62px'] : theme.sizes['82px'])};
  height: ${({ isSmall, theme }) => (isSmall ? theme.sizes['14px'] : theme.sizes['19px'])};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`