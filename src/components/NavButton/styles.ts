import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: ${({ theme }) => theme.sizes['92px']};
  height: ${({ theme }) => theme.sizes['92px']};
  padding: ${({ theme }) => theme.sizes['8px']} ${({ theme }) => theme.sizes['4px']};
  gap: ${({ theme }) => theme.sizes['4px']};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.sizes['16px']};
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.high.pure};
  color: ${({ theme }) => theme.colors.primary.pure};
  overflow: hidden;

  font-weight: 700;
  font-size: 12px;

  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.shadow};
  }

  :active {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.high.darkest};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.high.darkest};
    cursor: auto;
  }
`

export const Small = styled(Container)`
  width: ${({ theme }) => theme.sizes['56px']};
  height: ${({ theme }) => theme.sizes['56px']};
`
export const Large = styled(Container)`
  flex-direction: row;
  justify-content: flex-start;
  width: ${({ theme }) => theme.sizes['160px']};
  height: ${({ theme }) => theme.sizes['56px']};
  padding: ${({ theme }) => theme.sizes['8px']};
  gap: ${({ theme }) => theme.sizes['8px']};

  font-size: 14px;
`
export const Icon = styled.div`
  width: ${({ theme }) => theme.sizes['38px']};
  height: ${({ theme }) => theme.sizes['38px']};
`
export const Label = styled.div`
  width: auto;
  height: ${({ theme }) => theme.sizes['28px']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`
export const LabelLarge = styled.span`
  width: ${({ theme }) => theme.sizes['96px']};
  height: ${({ theme }) => theme.sizes['32px']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* overflow: hidden; */
`
