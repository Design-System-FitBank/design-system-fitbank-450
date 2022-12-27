import styled from 'styled-components';

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.sizes['16px']} ${({ theme }) => theme.sizes['28px']};
`

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary.pure};

  &::after {
    content: '';
    position: absolute;
    margin-top: ${({ theme }) => theme.sizes['8px']};
    height: ${({ theme }) => theme.sizes['4px']};
    width: ${({ theme }) => theme.sizes['52px']};
    background-color: ${({ theme }) => theme.colors.tertiary.pure};
  }
`