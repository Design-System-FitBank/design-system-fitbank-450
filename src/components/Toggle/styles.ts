import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  gap: ${({ theme }) => theme.sizes['16px']};
`

export const ToggleContainer = styled.div<{ isToggled: boolean }>`
  width: ${({ theme }) => theme.sizes['32px']};
  height: ${({ theme }) => theme.sizes['16px']};
  border-radius: ${({ theme }) => theme.sizes['8px']};
  border: 1px solid ${({ theme }) => theme.colors.primary.pure};
  background-color: ${({ isToggled, theme }) => (isToggled ? theme.colors.primary.pure : theme.colors.high.dark)};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`

export const Switcher = styled.div<{ isToggled: boolean }>`
  width: ${({ theme }) => theme.sizes['12px']};
  height: ${({ theme }) => theme.sizes['12px']};
  border-radius: 50%;
  background-color: ${({ isToggled, theme }) => (isToggled ? theme.colors.high.pure : theme.colors.primary.pure)};
  transition: 0.5s ease-in-out;
  left: ${({ isToggled }) => (isToggled ? '16px' : '2px')};
  position: absolute;
`