import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`

export const IconContainer = styled.div`
  width: ${({ theme }) => theme.sizes['255px']};
  height: ${({ theme }) => theme.sizes['38px']};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 20px 0;

  &:icon {
    border: 1px solid #000;
  }
`
