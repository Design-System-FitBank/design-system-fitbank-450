import styled, { keyframes } from 'styled-components'

const isRotating = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: ${({ theme }) => theme.sizes['16px']};
`

export const Loader = styled.div`
  animation: ${isRotating} 0.8s infinite;

  width: ${({ theme }) => theme.sizes['50px']};
  height: ${({ theme }) => theme.sizes['50px']};

  border: ${({ theme }) => theme.sizes['3px']} solid ${({ theme }) => theme.colors.disabled};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-right-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`
