import styled from 'styled-components'

export const Container = styled.div<{}>`
  width: ${({ theme }) => theme.sizes['410px']};
  height: ${({ theme }) => theme.sizes['20px']};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-self: stretch;
`
