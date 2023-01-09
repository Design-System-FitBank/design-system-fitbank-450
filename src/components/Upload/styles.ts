import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
width: ${({ theme }) => theme.sizes['464px']};
height: ${({ theme }) => theme.sizes['272px']};
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 0px;
gap: ${({ theme }) => theme.sizes['24px']};
`
export const Title = styled.div`
width: ${({ theme }) => theme.sizes['144px']};
height: ${({ theme }) => theme.sizes['24px']};
font-weight: ${({ theme }) => theme.font.weight.regular};
font-size: ${({ theme }) => theme.sizes['20px']};
line-height: ${({ theme }) => theme.sizes['24px']};
text-align: center;
color: ${({ theme }) => theme.colors.low.medium};
`
export const BodyText = styled.div`
width: ${({ theme }) => theme.sizes['464px']};
height: ${({ theme }) => theme.sizes['20px']};
font-weight: ${({ theme }) => theme.font.weight.tiny};
font-size: ${({ theme }) => theme.sizes['14px']};
line-height: ${({ theme }) => theme.sizes['20px']};
color: ${({ theme }) => theme.colors.low.medium};
`
export const InputContainer = styled.label`
width: ${({ theme }) => theme.sizes['464px']};
height: ${({ theme }) => theme.sizes['164px']};
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