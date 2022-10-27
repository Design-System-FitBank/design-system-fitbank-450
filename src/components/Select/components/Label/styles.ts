import styled from 'styled-components'

export const LabelContent = styled.label`
  max-width: ${({ theme }) => theme.sizes['320px']};
  max-height: ${({ theme }) => theme.sizes['20px']};

  color: ${({ theme }) => theme.colors['primary']};
`
