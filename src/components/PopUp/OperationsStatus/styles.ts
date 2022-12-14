import styled from 'styled-components'

export const BoxLoading = styled.div`
  display: flex;
  align-items: center;
  justifycontent: center;
  width: 100%;
  > div{
    width: 100%;
    height: 100%;
  }
`

export const SuccessContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`

export const ErrorContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
gap: 1.5rem;

> svg {
  color: ${({ theme }) => theme.colors.error};
}
`
