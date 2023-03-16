import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  :hover {
    cursor: pointer;
  }
`

export const ContainerLabel = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => `${theme.colors.primary.pure}`};
  padding-right: ${({ theme }) => theme.sizes['20px']};
  padding-left: ${({ theme }) => theme.sizes['20px']};
`
