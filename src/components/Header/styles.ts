import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid;
  align-items: center;
  height: ${({ theme }) => theme.sizes['64px']};
  padding-left: ${({ theme }) => theme.sizes['12px']};
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
`
export const Input = styled.input`
  overflow-x: hidden;
  height: ${({ theme }) => theme.sizes['38px']};
  width: ${({ theme }) => theme.sizes['410px']};

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
  top: 8px;
  cursor: pointer;
  position: absolute;
  right: ${({ theme }) => theme.sizes['20px']};
  color: ${({ theme }) => theme.colors.light};
`
export const Wrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`
export const Avatar = styled.div`
  color: ${({ theme }) => theme.colors.light};
`
export const Span = styled.span`
  padding-right: ${({ theme }) => theme.sizes['144px']};
`
