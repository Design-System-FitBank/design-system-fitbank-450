import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.textDisabled};

  width: 100%;
  weight: ${({ theme }) => theme.sizes['62px']};
  padding: '24px 24px';

  transition: 1s;
  position: relative;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes['24px']};
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

  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.dark};

  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
`
