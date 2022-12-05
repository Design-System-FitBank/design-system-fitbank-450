import styled from 'styled-components'

export const Container = styled.div<{}>`
  width: ${({ theme }) => theme.sizes['32px']};
  height: ${({ theme }) => theme.sizes['32px']};
  display: flex;
  justify-content: center;
  align-items: center;
`
