import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes['16px']};
  height: auto;
`

export const Stopwatch = styled.div`
  margin-right: ${({ theme }) => theme.sizes['320px']};
  margin-top: ${({ theme }) => theme.sizes['140px']};
  position: absolute;
  width: ${({ theme }) => theme.sizes['320px']};
  height: ${({ theme }) => theme.sizes['16px']};
`
