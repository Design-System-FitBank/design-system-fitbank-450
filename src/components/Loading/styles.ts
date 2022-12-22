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

  width: ${({ theme }) => theme.sizes['52px']};
  height: ${({ theme }) => theme.sizes['52px']};

  border: ${({ theme }) => theme.sizes['3px']} solid ${({ theme }) => theme.colors.high.darkest};
  border-top-color: ${({ theme }) => theme.colors.primary.pure};
  border-right-color: ${({ theme }) => theme.colors.primary.pure};
  border-radius: 50%;
`
