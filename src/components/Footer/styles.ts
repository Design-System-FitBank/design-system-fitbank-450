import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.sizes['108px']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};

  padding: ${({ theme }) => theme.sizes['10px']}   ${({ theme }) => theme.sizes['48px']};
`
