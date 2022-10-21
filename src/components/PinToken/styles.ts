import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.sizes['16px']};
`

export const PinBox = styled.input`
  width: ${({ theme }) => theme.sizes['42px']};
  height: ${({ theme }) => theme.sizes['42px']};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.light};

  border: 1px solid ${({ theme }) => theme.colors.textDisabled};
  border-radius: ${({ theme }) => theme.sizes['6px']};

  text-align: center;
  font-size: ${({ theme }) => theme.sizes['18px']};
  line-height: ${({ theme }) => theme.sizes['24px']}; ;
`
