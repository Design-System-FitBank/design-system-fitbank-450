import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 120px;
`

export const ToggleContainer = styled.div<{ isToggled: boolean }>`
  width: ${({ theme }) => theme.sizes['32px']};
  height: ${({ theme }) => theme.sizes['16px']};

  border-radius: ${({ theme }) => theme.sizes['8px']};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  background-color: ${({ isToggled, theme }) => (isToggled ? theme.colors.primary : '#ebe7e7')};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  transition: 1s;

  cursor: pointer;
`

export const Switcher = styled.div<{ isToggled: boolean }>`
  width: ${({ theme }) => theme.sizes['12px']};
  height: ${({ theme }) => theme.sizes['12px']};
  background-color: ${({ isToggled, theme }) => (isToggled ? theme.colors.light : theme.colors.primary)};

  border-radius: 50%;

  transition: 0.8s;
  transform: ${({ isToggled }) => (isToggled ? 'translateX(140%)' : 'translateX(10%)')};
`

export const LabelContent = styled.div``
