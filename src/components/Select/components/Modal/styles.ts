import styled, { keyframes } from 'styled-components'

const animationModal = keyframes`
  0% {
    top: 40px;
    height: 0px;
  }

  100% {
    top: 68px;
    height: 174px;
  }
`

export const ModalContent = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ isOpen, theme }) => (isOpen ? theme.sizes['174px'] : '0px')};

  justify-content: flex-start;
  position: absolute;

  flex-direction: column;

  top: ${({ isOpen, theme }) => (isOpen ? theme.sizes['68px'] : theme.sizes['30px'])};
  z-index: -1;

  border-radius: ${({ theme }) => theme.sizes['6px']};

  padding-left: ${({ theme }) => theme.sizes['16px']};
  padding-top: ${({ theme }) => theme.sizes['10px']};

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  animation-name: ${({ isOpen }) => (isOpen ? animationModal : '')};
  animation-duration: 1.5s;
  animation-direction: normal;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.sizes['6px']};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.disabled};
    border-radius: ${({ theme }) => theme.sizes['20px']};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.textGrey};
    border-radius: ${({ theme }) => theme.sizes['20px']};
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.sizes['48px']};

  cursor: pointer;
`
