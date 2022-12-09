import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  :hover {
    cursor: pointer;
  }
`

export const ContainerBar = styled.div`
  padding: ${({theme}) => theme.sizes['10px']} ${({theme}) => theme.sizes['8px']};
`

export const ContainerLabel = styled(Container)<{last?: boolean}>`
  border: ${({last, theme}) => (last ?  `2px solid ${theme.colors.tertiary}` : "")};
  background-color: ${({last, theme}) => (last ? `${theme.colors.light}` : "")};
  color: ${({theme}) => (`${theme.colors.primary}`)};
  border-radius: ${({theme}) => (theme.sizes['12px'])};
  padding: ${({theme}) => theme.sizes['2px']} ${({theme}) => theme.sizes['62px']};
  display: flex;
  align-items: center;
`
