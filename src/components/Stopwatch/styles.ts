import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ theme }) => theme.sizes['144px']};
  height: ${({ theme }) => theme.sizes['64px']};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.sizes['8px']};
`
