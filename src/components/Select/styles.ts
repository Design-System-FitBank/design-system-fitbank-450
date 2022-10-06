import styled, { keyframes } from 'styled-components'

const animationModal = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 210px;
  }
`

const animationIcon = keyframes`
  0% {
    translate: 0px;
  }

  100% {
    height: 210px;
  }
`

export const Container = styled.div`
  position: relative;
`

export const ContainerInput = styled.div<{ isOpen: boolean }>`
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
    box-shadow: 2px 2px 4px ${({ isOpen, theme }) => (isOpen ? 'transparent' : theme.colors.shadow)};
  }

  border-color: ${({ isOpen, theme }) => (isOpen ? theme.colors.primary : theme.colors.disabled)};
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
`

export const Modal = styled.div<{ isOpen: boolean }>`
  width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ isOpen, theme }) => (isOpen ? theme.sizes['210px'] : '0px')};

  justify-content: flex-start;
  position: absolute;

  top: ${({ theme }) => theme.sizes['46px']};
  z-index: -1;

  border-radius: ${({ theme }) => theme.sizes['6px']};

  padding-left: ${({ theme }) => theme.sizes['16px']};
  padding-top: ${({ theme }) => theme.sizes['28px']};

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  animation-name: ${({ isOpen }) => isOpen && animationModal};
  animation-duration: 1.5s;
  animation-direction: normal;
`
export const Item = styled.div`
  width: 80%;
  height: ${({ theme }) => theme.sizes['48px']};
  margin-top: ${({ theme }) => theme.sizes['10px']};

  cursor: pointer;
`
