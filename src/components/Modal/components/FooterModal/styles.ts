import styled from 'styled-components'

export const FooterModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shadow};
  height: ${({ theme }) => theme.sizes['76px']};
  border-radius: 0 0 ${({ theme }) => theme.sizes['16px']} ${({ theme }) => theme.sizes['16px']};
`
