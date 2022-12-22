import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.sizes['64px']};
  padding-left: ${({ theme }) => theme.sizes['12px']};
  background-color: ${({ theme }) => theme.colors.primary.pure};
`
export const Input = styled.input`
  width: 100%;
  overflow-x: hidden;
  height: ${({ theme }) => theme.sizes['36px']};

  font-style: italic;
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};

  border-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.high.pure};

  padding-left: ${({ theme }) => theme.sizes['28px']};
  border-radius: ${({ theme }) => theme.sizes['12px']};
  padding-right: ${({ theme }) => theme.sizes['44px']};

  ::placeholder {
    color: ${({ theme }) => theme.colors.high.pure};
  }
`
export const Search = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${({ theme }) => theme.sizes['8px']};
  color: ${({ theme }) => theme.colors.high.pure};
  right: ${({ theme }) => theme.sizes['20px']};
`
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes['408px']};
`
export const Options = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.high.pure};
`
export const User = styled.div`
  display: flex;
  overflow: hidden;
  gap: ${({ theme }) => theme.sizes['4px']};
  color: ${({ theme }) => theme.colors.high.pure};
  max-width: ${({ theme }) => theme.sizes['176px']};
  white-space: nowrap;
`
export const Span = styled.span`
  top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.sizes['16px']};
  margin-right: ${({ theme }) => theme.sizes['28px']};
`
