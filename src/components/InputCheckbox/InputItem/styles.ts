import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ theme }) => theme.sizes['15px']};
  height: ${({ theme }) => theme.sizes['15px']};

  border-radius: ${({ theme }) => theme.sizes['3px']};
  border: 1px solid ${({ theme }) => theme.colors.checkbox}; ;
`
