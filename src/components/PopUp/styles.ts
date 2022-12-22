import styled from 'styled-components'

export const BoxLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  > div{
    width: 100%;
    height: 100%;
  }
`

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`

export const Icon = styled.div`
color: ${({ theme }) => theme.colors.error};
`