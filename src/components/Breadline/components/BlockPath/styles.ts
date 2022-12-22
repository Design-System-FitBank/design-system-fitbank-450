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
  color: ${({ theme }) => `${theme.colors.primary}`};
  padding-right: ${({ theme }) => theme.sizes['50px']};
  padding-left: ${({ theme }) => theme.sizes['50px']};
`
