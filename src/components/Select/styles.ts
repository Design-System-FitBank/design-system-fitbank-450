import styled, { keyframes } from 'styled-components'

const animationModal = keyframes`
  100% {
    transform: scaleY(-0);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-top: ${({ theme }) => theme.sizes['12px']};
  padding-right: ${({ theme }) => theme.sizes['12px']};
  padding-bottom: ${({ theme }) => theme.sizes['12px']};
  padding-left: ${({ theme }) => theme.sizes['16px']};
  gap: ${({ theme }) => theme.sizes['8px']};

  background: ${({ theme }) => theme.colors.light};

  border: 1px solid ${({ theme }) => theme.colors.disabled};
  border-radius: ${({ theme }) => theme.sizes['6px']};

  max-width: ${({ theme }) => theme.sizes['320px']};
  max-height: ${({ theme }) => theme.sizes['48px']};

  &:hover {
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};
  }
`

export const Label = styled.label`
  max-width: ${({ theme }) => theme.sizes['320px']};
  max-height: ${({ theme }) => theme.sizes['20px']};
`

export const Icon = styled.div`
  cursor: pointer;
`

export const Input = styled.input`
  width: ${({ theme }) => theme.sizes['255px']};
  height: ${({ theme }) => theme.sizes['48px']};

  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    font-size: ${({ theme }) => theme.sizes['18px']};
    line-height: ${({ theme }) => theme.sizes['24px']};
    color: ${({ theme }) => theme.colors.disabled};
  }

  textarea {
    border: none;
    background-color: transparent;
    resize: none;
  }
`
export const Modal = styled.div<{ isOpen: boolean }>`
  width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ theme }) => theme.sizes['235px']};

  display: flex;
  justify-content: flex-start;

  border: 1px solid ${({ theme }) => theme.colors.dark};

  animation-name: ${animationModal};
  animation-duration: 1s;
  animation-direction: reverse;
  animation-fill-mode: ${({ isOpen }) => (isOpen ? 'forwards' : 'backwards')};
`
