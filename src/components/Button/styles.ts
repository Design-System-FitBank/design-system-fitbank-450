import styled from 'styled-components'

export const Container = styled.button<{ size?: string }>`
  width: ${({ size }) => (size === 'small' ? '142px' : '210px')};
  padding: ${({ size }) => (size === 'small' ? '4px 12px 4px 12px' : '8px 24px 8px 24px')};
`
