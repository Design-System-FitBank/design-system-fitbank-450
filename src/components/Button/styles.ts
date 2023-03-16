import styled from 'styled-components';

type ButtonProps = {
  size?: string
}

export const Container = styled.button<ButtonProps>`
  min-width: ${({ size, theme }) => (size === 'auto' ? '100%' : size === 'small' ? theme.sizes['144px'] : theme.sizes['212px'])};
  height: ${({ size, theme }) => (size === 'small' ? theme.sizes['32px'] : theme.sizes['48px'])};
  padding-top: ${({ size, theme }) => (size === 'small' ? theme.sizes['4px'] : theme.sizes['8px'])};
  padding-bottom: ${({ size, theme }) => (size === 'small' ? theme.sizes['4px'] : theme.sizes['8px'])};
  padding-left: ${({ size, theme }) => (size === 'small' ? theme.sizes['12px'] : theme.sizes['24px'])};
  padding-right: ${({ size, theme }) => (size === 'small' ? theme.sizes['12px'] : theme.sizes['24px'])};
  border-radius: ${({ size, theme }) => (size === 'small' ? theme.sizes['8px'] : theme.sizes['12px'])};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-out 0.2s;

  cursor: pointer;

  :disabled {
    cursor: default;
  }
`
export const Primary = styled(Container)<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary.pure};
  color: ${({ theme }) => theme.colors.high.pure};
  border: 1px solid ${({ theme }) => theme.colors.primary.pure};

  :hover {
    color: ${({ theme }) => theme.colors.tertiary.pure};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.high.pure};
    color: ${({ theme }) => theme.colors.primary.pure};
    border: 1px solid ${({ theme }) => theme.colors.tertiary.pure};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.high.pure};
    border: 1px solid ${({ theme }) => theme.colors.high.darkest};
    color: ${({ theme }) => theme.colors.high.darkest};
    box-shadow: none;
  }
`

export const Secondary = styled(Container)<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.high.pure};
  color: ${({ theme }) => theme.colors.primary.pure};
  border: 1px solid ${({ theme }) => theme.colors.primary.pure};

  :hover {
    color: ${({ theme }) => theme.colors.primary.pure};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
    border: 1px solid transparent;
  }

  :active {
    background-color: ${({ theme }) => theme.colors.high.pure};
    color: ${({ theme }) => theme.colors.primary.pure};
    border: 1px solid ${({ theme }) => theme.colors.tertiary.pure};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.high.pure};
    border: 1px solid ${({ theme }) => theme.colors.high.darkest};
    color: ${({ theme }) => theme.colors.high.darkest};
    box-shadow: none;
  }
`

export const Tertiary = styled(Container)<ButtonProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.pure};
  border: 1px solid transparent;

  :hover {
    color: ${({ theme }) => theme.colors.secondary.pure};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.high.darkest};
  }
`