import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.sizes['64px']};
  padding-left: ${({ theme }) => theme.sizes['12px']};
  background-color: ${({ theme }) => theme.colors.primary};
`
export const Input = styled.input`
  width: 100%;
  overflow-x: hidden;
  height: ${({ theme }) => theme.sizes['38px']};

  font-style: italic;
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['14px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};

  border-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};

  padding-left: ${({ theme }) => theme.sizes['28px']};
  border-radius: ${({ theme }) => theme.sizes['10px']};
  padding-right: ${({ theme }) => theme.sizes['46px']};

  ::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }
`
export const Search = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${({ theme }) => theme.sizes['8px']};
  color: ${({ theme }) => theme.colors.light};
  right: ${({ theme }) => theme.sizes['20px']};
`
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes['410px']};
`
export const Options = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
`
export const User = styled.div`
  display: flex;
  overflow: hidden;
  gap: ${({ theme }) => theme.sizes['2px']};
  color: ${({ theme }) => theme.colors.light};
  max-width: ${({ theme }) => theme.sizes['174px']};
`
export const Span = styled.span`
  top: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.sizes['15px']};
  margin-right: ${({ theme }) => theme.sizes['28px']};
`
