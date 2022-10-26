import styled, { keyframes } from 'styled-components'

const animationModal = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 174px;
  }
`

export const ModalContent = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ isOpen, theme }) => (isOpen ? theme.sizes['174px'] : '0px')};

  justify-content: flex-start;
  position: absolute;

  top: ${({ theme }) => theme.sizes['46px']};
  z-index: -1;

  border-radius: ${({ theme }) => theme.sizes['6px']};

  padding-left: ${({ theme }) => theme.sizes['16px']};
  padding-top: ${({ theme }) => theme.sizes['28px']};

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
    background: ${({ theme }) => theme.colors.textDisabled};
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
