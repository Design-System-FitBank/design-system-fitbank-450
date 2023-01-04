import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.sizes['24px']};

  & body {
    margin-bottom: ${({ theme }) => theme.sizes['8px']};
  }
`
export const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`

export const TagContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes['16px']};
`

export const TagInput = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.sizes['287px']};
  height: ${({ theme }) => theme.sizes['48px']};

  border: none;
  margin-right: ${({ theme }) => theme.sizes['24px']};

  color: ${({ theme }) => theme.colors.dark};

  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
`
