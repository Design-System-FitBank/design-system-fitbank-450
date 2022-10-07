import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    width: ${({theme})=> theme.sizes['320px']};
    height: ${({theme})=> theme.sizes['64px']};

`

export const Label = styled.label`
    text-transform: capitalize;
    position: relative;
    left: 1px;
    max-width: ${({theme})=> theme.sizes['320px']};
    max-height: ${({theme})=> theme.sizes['20px']};
    color:${({theme})=> theme.colors.primary}; 
    
`
export const Input = styled.input`
    
    text-transform: capitalize;
    width: ${({theme})=> theme.sizes['320px']};
    height: ${({theme})=> theme.sizes['48px']};
    border-radius: ${({theme})=> theme.sizes['6px']}; 
    padding-top: ${({theme})=> theme.sizes['12px']}; 
    padding-right: ${({theme})=> theme.sizes['16px']}; 
    padding-bottom: ${({theme})=> theme.sizes['12px']}; 
    padding-left: ${({theme})=> theme.sizes['16px']}; 
    border: 1px solid ${({theme})=> theme.colors.disabled}; 
    background-color: ${({theme})=> theme.colors.light}; 
    &::placeholder{
            color:${({theme})=> theme.colors.textDisabled};
            font-size: ${({theme})=> theme.sizes['18px']};            
}
`