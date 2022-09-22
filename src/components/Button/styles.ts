import styled from 'styled-components'

type ButtonProps = {
  disabled?: boolean
}

export const Container = styled.button<ButtonProps>`
  width: 210px;
  height: 48px;
  padding: 8px 24px;
  gap: 8px;
  background-color: ${({ disabled }) => (disabled ? '#ffffff' : '#323751')};
  border: 1px solid ${({ disabled }) => (disabled ? '#c4c4c4' : '#323751')};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ disabled }) => (disabled ? '#c4c4c4' : '#ffffff')};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  :hover {
    color: ${({ disabled }) => (disabled ? '#c4c4c4' : '#fcd669')};
  }

  :active {
    background-color: #fff;
    color: #323751;
    border: 1px solid #fcd669;
  }
`
export const Icon = styled.div`
  width: 32px;
  height: 32px;
`
