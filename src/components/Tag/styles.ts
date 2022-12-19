import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.textDisabled};

  width: 100%;
  weigth: ${({ theme }) => theme.sizes['62px']};
  padding: '24px 24px';

  transition: 1s;
  position: relative;
`

export const Input = styled.input`
  width: ${({ theme }) => theme.sizes['287px']};
  overflow-x: hidden;
  height: ${({ theme }) => theme.sizes['38px']};

  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['14px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};

  border-color: ${({ theme }) => theme.colors.disabled};
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.dark};

  padding-left: ${({ theme }) => theme.sizes['16px']};
  border-radius: ${({ theme }) => theme.sizes['6px']};
  padding-right: ${({ theme }) => theme.sizes['16px']};

  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
`

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes['24px']};
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes['142px']};
  height: ${({ theme }) => theme.sizes['32px']};

  margin-left: ${({ theme }) => theme.sizes['24px']};

  border: 1px solid ${({ theme }) => theme.colors.disabled};
  border-radius: ${({ theme }) => theme.sizes['8px']};

  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.disabled};

  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.disabled};
  }

  :active {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const ButtonTag = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ theme }) => theme.sizes['160px']};
  height: ${({ theme }) => theme.sizes['32px']};

  padding: ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.sizes['24px']};

  margin-top: ${({ theme }) => theme.sizes['28px']};

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes['18px']};

  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};

`

export const Icon = styled.button`
  border: none;
  cursor: pointer;
`

export const Typography = styled.div`
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};

  word-break: break-all;
`
