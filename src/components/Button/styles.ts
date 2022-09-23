import styled from 'styled-components'

type ButtonProps = {
  disabled?: boolean
  size?: string
}

export const Container = styled.button<ButtonProps>`
  width: ${({ size }) => (size === 'small' ? '142px' : '210px')};
  height: ${({ size }) => (size === 'small' ? '32px' : '48px')};
  padding: ${({ size }) => (size === 'small' ? '4px 12px' : '8px 24px')};
  gap: ${({ size }) => (size === 'small' ? '6px' : '7px')};
  background-color: ${({ disabled }) => (disabled ? '#ffffff' : '#323751')};
  border: 1px solid ${({ disabled }) => (disabled ? '#c4c4c4' : '#323751')};
  border-radius: ${({ size }) => (size === 'small' ? '8px' : '10px')};
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ disabled }) => (disabled ? '#c4c4c4' : '#ffffff')};
  font-weight: 500;
  font-size: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '14px' : '19px')};

  :hover {
    color: ${({ disabled }) => (disabled ? '#c4c4c4' : '#fcd669')};
  }

  :active {
    background-color: #ffffff;
    color: ${({ disabled }) => (disabled ? '#c4c4c4' : '#323751')};
    border: 1px solid ${({ disabled }) => (disabled ? '#c4c4c4' : '#fcd669')};
  }
`
export const Icon = styled.div<ButtonProps>`
  width: ${({ size }) => (size === 'small' ? '20px' : '32px')};
  height: ${({ size }) => (size === 'small' ? '20px' : '32px')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxLabel = styled.div<ButtonProps>`
  width: ${({ size }) => (size === 'small' ? '62px' : '82px')};
  height: ${({ size }) => (size === 'small' ? '14px' : '19px')};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
