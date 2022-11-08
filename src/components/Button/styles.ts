import styled from 'styled-components';

type ButtonProps = {
  size?: string
}

export const Container = styled.button<ButtonProps>`
  width: ${({ size, theme }) => (size === 'auto' ? '100%' : size === 'small' ? theme.sizes['142px'] : theme.sizes['210px'])};
  height: ${({ size, theme }) => (size === 'small' ? theme.sizes['32px'] : theme.sizes['48px'])};
  padding-top: ${({ size, theme }) => (size === 'small' ? theme.sizes['4px'] : theme.sizes['8px'])};
  padding-bottom: ${({ size, theme }) => (size === 'small' ? theme.sizes['4px'] : theme.sizes['8px'])};
  padding-left: ${({ size, theme }) => (size === 'small' ? theme.sizes['12px'] : theme.sizes['24px'])};
  padding-right: ${({ size, theme }) => (size === 'small' ? theme.sizes['12px'] : theme.sizes['24px'])};
  gap: ${({ size, theme }) => (size === 'small' ? theme.sizes['6px'] : theme.sizes['7px'])};
  border-radius: ${({ size, theme }) => (size === 'small' ? theme.sizes['8px'] : theme.sizes['10px'])};
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: ${({ size, theme }) => (size === 'small' ? theme.sizes['12px'] : theme.sizes['16px'])};
  line-height: ${({ size, theme }) => (size === 'small' ? theme.sizes['14px'] : theme.sizes['19px'])};

  cursor: pointer;

  :disabled {
    cursor: default;
  }
`
export const Primary = styled(Container)<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabled};
    box-shadow: none;
  }
`

export const Secondary = styled(Container)<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
    border: 1px solid transparent;
  }

  :active {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    box-shadow: 2px 4px 6px ${({ theme }) => theme.colors.shadow};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabled};
    box-shadow: none;
  }
`

export const Tertiary = styled(Container)<ButtonProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid transparent;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.disabled};
  }
`