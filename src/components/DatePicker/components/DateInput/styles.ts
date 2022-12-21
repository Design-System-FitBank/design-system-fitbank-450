import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Label = styled.label`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-start;
  margin-bottom: 4px;
`

export const InputContainer = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.sizes['48px']};

  border-radius: ${({ theme }) => theme.sizes['6px']};
  border: 1px solid ${({ theme }) => theme.colors.disabled};

  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
  font-size: ${({ theme }) => theme.sizes['18px']};
  line-height: ${({ theme }) => theme.sizes['24px']};

  justify-content: flex-start;
  padding: 0px ${({ theme }) => theme.sizes['16px']};
  overflow-x: hidden;

  :hover {
    box-shadow: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.sizes['2px']}
      ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.colors.shadow};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.sizes['2px']}
      ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.colors.shadow};
    color: ${({ theme }) => theme.colors.primary};
  }

  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    background-color: ${({ theme }) => theme.colors.disabled};
    box-shadow: none;

    ::placeholder {
      color: ${({ theme }) => theme.colors.textGrey};
    }
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
`

export const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

export const Icon = styled.div`
  display: flex;
  position: absolute;

  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: ${({ theme }) => theme.sizes['62px']};
  height: 100%;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  border-left: none;
  border-top-right-radius: ${({ theme }) => theme.sizes['6px']};
  border-bottom-right-radius: ${({ theme }) => theme.sizes['6px']};

  transition: 0.5s;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
