import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.sizes['24px']};

  & body {
    margin-bottom: ${({ theme }) => theme.sizes['8px']};
  }
`

export const ContentContainer = styled.div`
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

  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['14px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};

  color: ${({ theme }) => theme.colors.dark};

  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
`
