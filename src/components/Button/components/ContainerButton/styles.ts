import styled from 'styled-components';

export const Container = styled.div<{isSmall?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ isSmall, theme }) => isSmall ? theme.sizes['4px'] : theme.sizes['8px']};
`