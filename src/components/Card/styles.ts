import styled from 'styled-components'

type CardProps = {
  size?: string
  height?: number
  width?: number
  elevation?: boolean
  backgroundColor?: string
}

export const Container = styled.div<CardProps>`
  width: ${({ size, theme, width }) => (size === 'pattern' ? theme.sizes['656px'] : `${width}rem`)};
  height: ${({ size, theme, height }) => (size === 'pattern' ? theme.sizes['408px'] : `${height}rem`)};
  gap: ${({ size, theme }) => (size === 'pattern' ? theme.sizes['6px'] : theme.sizes['8px'])};
  border-radius: ${({ size, theme }) => (size === 'pattern' ? theme.sizes['8px'] : theme.sizes['12px'])};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === 'light' ? theme.colors.high.light : theme.colors.primary.dark};
  color: ${({ theme, backgroundColor }) =>
    backgroundColor === 'light' ? theme.colors.primary.darkest : theme.colors.primary.lightest};
  box-shadow: ${({ elevation }) => (elevation ? `2px 4px 6px 0px` : `none`)} ${({ theme }) => theme.colors.shadow};
`
