import styled from 'styled-components'

export const Container = styled.div`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
`
export const ContainerChild = styled(Container)<{isRow?: boolean}>`
  display: flex;
  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column')};
  gap: ${({ theme, isRow }) => (isRow ? theme.sizes['34px'] : theme.sizes['52px'])};

  margin: ${({ theme }) => theme.sizes['16px']};
  :nth-last-child(1) {
    margin-bottom: ${({ isRow }) => (isRow ? '0px' : '16px')};
  }
`
