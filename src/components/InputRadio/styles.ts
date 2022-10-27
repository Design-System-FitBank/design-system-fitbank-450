import styled from 'styled-components'

type RadioProps = {
  checked?: boolean
  isRow?: boolean
}

export const Container = styled.div<RadioProps>`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: capitalize;
`

export const ContainerDirection = styled.div<RadioProps>`
  display: flex;
  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column')};
`
