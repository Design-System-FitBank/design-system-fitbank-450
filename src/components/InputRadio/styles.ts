import styled from 'styled-components'

type RadioProps = {
  checked?: boolean
  isColumn?: boolean
}

export const Container = styled.div<RadioProps>`
  color: ${({ theme }) => theme.colors.primary.pure};
  text-transform: capitalize;
`

export const ContainerDirection = styled.div<RadioProps>`
  display: flex;
  flex-direction: ${({ isColumn }) => isColumn ? 'column' : 'row'};
`
