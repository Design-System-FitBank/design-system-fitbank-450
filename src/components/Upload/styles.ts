import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
width: ${({ theme }) => theme.sizes['464px']};
height: ${({ theme }) => theme.sizes['272px']};
display: flex;
flex-direction: column;
align-items: flex-start;
padding: ${({ theme }) => theme.sizes['8px']};
gap: ${({ theme }) => theme.sizes['24px']};
`
export const Title = styled.div`
top: ${({ theme }) => theme.sizes['8px']};
text-align: center;
color: ${({ theme }) => theme.colors.low.medium};
`
export const BodyText = styled.div`
color: ${({ theme }) => theme.colors.low.medium};
`
export const InputContainer = styled.label`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${({ theme }) => theme.sizes['24px']};
gap: ${({ theme }) => theme.sizes['10px']};
background-color: ${({ theme }) => theme.colors.high.light};
border: 1px dashed ${({ theme }) => theme.colors.primary.pure};
`
export const input = styled.input`
display: none;
`
export const IconContainer = styled.div`
display: flex;
justify-content: center;
color: ${({ theme }) => theme.colors.primary.lightest}
`