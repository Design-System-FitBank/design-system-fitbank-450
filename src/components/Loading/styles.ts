import styled, { keyframes } from 'styled-components'

const isRotating = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  align-items: center;
  display: flex;
  justify-content: center;

  transform: scale(1);
`
export const Loader = styled.div`
  animation-name: isRotating;

  width: 50px;
  height: 50px;

  border: 6px solid #e5e5e5;
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`
