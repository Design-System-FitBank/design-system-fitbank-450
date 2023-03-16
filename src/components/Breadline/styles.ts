import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  color: ${({ theme }) => `${theme.colors.primary.pure}`};

`
export const Home = styled.div`
  cursor: pointer;
  padding-right: ${({ theme }) => theme.sizes['20px']};
`

export const Bloc = styled.div`
  display: flex;
  align-items: center;
`

export const Route = styled.div`
`