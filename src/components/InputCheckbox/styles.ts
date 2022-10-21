import styled from 'styled-components'

type CheckboxProps = {
  direction: string
}

export const Container = styled.div<CheckboxProps>`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
`
export const ContainerChild = styled(Container)<CheckboxProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'row' ? 'row' : 'column')};
  gap: ${({ theme }) => theme.sizes['26px']};

  margin: ${({ theme }) => theme.sizes['16px']};
  :nth-last-child(1) {
    margin-bottom: ${({ direction }) => (direction === 'row' ? '0px' : '16px')};
  }
`
