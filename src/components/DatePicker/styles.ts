import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  width: ${({ theme }) => theme.sizes['100px']};
  height: ${({ theme }) => theme.sizes['100px']};
`
