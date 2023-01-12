import styled from 'styled-components';

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.sizes['16px']} ${({ theme }) => theme.sizes['26px']};
`

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  &::after {
    content: '';
    position: absolute;
    margin-top: ${({ theme }) => theme.sizes['7px']};
    height: ${({ theme }) => theme.sizes['3px']};
    width: ${({ theme }) => theme.sizes['50px']};
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`