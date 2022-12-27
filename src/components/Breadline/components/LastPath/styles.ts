import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerLabel = styled.div`
  border: ${({ theme }) => `2px solid ${theme.colors.tertiary}`};
  border-radius: ${({ theme }) => theme.sizes['12px']};
  padding: ${({ theme }) => theme.sizes['12px']} ${({ theme }) => theme.sizes['64px']};
  color: ${({ theme }) => `${theme.colors.primary}`};
  background-color: ${({ theme }) => `${theme.colors.light}`};
  margin-left: ${({ theme }) => theme.sizes['8px']};
`
