import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerLabel = styled.div`
  border: ${({ theme }) => `2px solid ${theme.colors.tertiary.pure}`};
  border-radius: ${({ theme }) => theme.sizes['12px']};
  padding: ${({ theme }) => theme.sizes['8px']} ${({ theme }) => theme.sizes['12px']};
  color: ${({ theme }) => `${theme.colors.primary.pure}`};
  background-color: ${({ theme }) => `${theme.colors.high.pure}`};
  margin-left: ${({ theme }) => theme.sizes['8px']};
`
