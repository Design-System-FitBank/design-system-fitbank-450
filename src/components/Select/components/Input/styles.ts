import styled from 'styled-components'

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

export const InputContent = styled.input`
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

export const IconContent = styled.div<{ isOpen: boolean }>`
  cursor: pointer;

  transition: 0.8s;

  transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
`
