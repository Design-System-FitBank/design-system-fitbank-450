import styled from 'styled-components'

export const Container = styled.div<{}>`
  width: ${({ theme }) => theme.sizes['410px']};
  height: ${({ theme }) => theme.sizes['28px']};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  display: flex;
`
