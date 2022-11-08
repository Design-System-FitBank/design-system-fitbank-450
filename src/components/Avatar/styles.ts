import styled from 'styled-components'

export const Container = styled.circle`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.sizes['4px']};
  width: ${({ theme }) => theme.sizes['50px']};
  height: ${({ theme }) => theme.sizes['50px']};
  border-radius: ${({ theme }) => theme.sizes['50px']};
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Icon = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.light};
`
