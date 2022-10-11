import styled, { keyframes } from 'styled-components'

const animationModal = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 174px;
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

  color: ${({ theme }) => theme.colors['primary']};
`

export const Icon = styled.div<{ isOpen: boolean }>`
  cursor: pointer;

  transition: 0.8s;

  transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
`

export const Input = styled.input`
  width: 100%;
  height: max-content;

  font-size: ${({ theme }) => theme.sizes['18px']};

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

  width: 80%;
  height: ${({ theme }) => theme.sizes['48px']};

  cursor: pointer;
`

export const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: ${({ theme }) => theme.colors.light};

  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.sizes['4px']};
`

export const SpanTag = styled.span`
  width: 100%;

  padding-top: ${({ theme }) => theme.sizes['2px']};
  padding-right: ${({ theme }) => theme.sizes['6px']};
  padding-bottom: ${({ theme }) => theme.sizes['2px']};
  padding-left: ${({ theme }) => theme.sizes['6px']};
`

export const TagIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  
  cursor: pointer;
`
