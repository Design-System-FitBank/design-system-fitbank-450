import styled, { keyframes } from 'styled-components'

const switcherAnimation = keyframes`
  0% {
    justify-content: flex-start;
  }
  100% {
    justify-content: flex-end;
  }
`

export const Container = styled.div`
  width: ${({ theme }) => theme.sizes['32px']};
  height: ${({ theme }) => theme.sizes['16px']};

  border-radius: ${({ theme }) => theme.sizes['8px']};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  background-color: #ebe7e7;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
`

export const Switcher = styled.div<{isToggle: boolean}>`
  width: ${({ theme }) => theme.sizes['12px']};
  height: ${({ theme }) => theme.sizes['12px']};
  background-color: ${({ theme }) => theme.colors.primary};

  margin: 2px;
  border-radius: 50%;

  animation: ${({ isToggle }) => isToggle ? switcherAnimation : ''};
`
