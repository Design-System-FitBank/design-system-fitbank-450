import styled from 'styled-components'

type CardProps = {
  size?: string
  height?: number
  width?: number
  elevation?: boolean
  backgroundColor?: string
}

export const Container = styled.area<CardProps>`
  width: ${({ size, theme, width }) =>
    size === 'auto' ? '100%' : size === 'pattern' ? theme.sizes['617px'] : `${width}rem`};
  height: ${({ size, theme, height }) => (size === 'pattern' ? theme.sizes['424px'] : `${height}rem`)};
  gap: ${({ size, theme }) => (size === 'pattern' ? theme.sizes['6px'] : theme.sizes['7px'])};
  border-radius: ${({ size, theme }) => (size === 'pattern' ? theme.sizes['8px'] : theme.sizes['10px'])};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === 'light' ? theme.colors.light : theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ elevation }) => (!elevation ? `2px 4px 6px` : `none`)} ${({ theme }) => theme.colors.shadow};
`
