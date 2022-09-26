import styled from 'styled-components'

type ButtonProps = {
  size?: string
}

export const Container = styled.button<ButtonProps>`
  width: ${({ size, theme }) => (size === 'small' ? theme.sizes['142px'] : theme.sizes['210px'])};
  height: ${({ size, theme }) => (size === 'small' ? theme.sizes['32px'] : theme.sizes['48px'])};
  padding-top: ${({ size, theme }) => (size === 'small' ? theme.sizes['4px'] : theme.sizes['8px'])};
  padding-bottom: ${({ size, theme }) => (size === 'small' ? theme.sizes['4px'] : theme.sizes['8px'])};
  padding-left: ${({ size, theme }) => (size === 'small' ? theme.sizes['12px'] : theme.sizes['24px'])};
  padding-right: ${({ size, theme }) => (size === 'small' ? theme.sizes['12px'] : theme.sizes['24px'])};
  gap: ${({ size, theme }) => (size === 'small' ? theme.sizes['6px'] : theme.sizes['7px'])};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ size, theme }) => (size === 'small' ? theme.sizes['8px'] : theme.sizes['10px'])};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.light};
  font-weight: 500;
  font-size: ${({ size, theme }) => (size === 'small' ? theme.sizes['12px'] : theme.sizes['16px'])};
  line-height: ${({ size, theme }) => (size === 'small' ? theme.sizes['14px'] : theme.sizes['19px'])};

  :hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabled};
  }
`
export const Icon = styled.div<ButtonProps>`
  width: ${({ size, theme }) => (size === 'small' ? theme.sizes['20px'] : theme.sizes['32px'])};
  height: ${({ size, theme }) => (size === 'small' ? theme.sizes['20px'] : theme.sizes['32px'])};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxLabel = styled.div<ButtonProps>`
  width: ${({ size, theme }) => (size === 'small' ? theme.sizes['62px'] : theme.sizes['82px'])};
  height: ${({ size, theme }) => (size === 'small' ? theme.sizes['14px'] : theme.sizes['19px'])};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
