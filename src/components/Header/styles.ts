import styled from 'styled-components';

export const Container = styled.div`
display: flex;
height: ${({ theme }) => theme.sizes['64px']};
 border: 1px solid;
 width : 100%;
 background-color: ${({ theme }) => theme.colors.primary};
 align-items: center;
 padding-left: ${({ theme }) => theme.sizes['12px']};
 `
export const Input = styled.input`
    height: ${({ theme }) => theme.sizes['38px']};
    width: ${({ theme }) => theme.sizes['410px']}; 
    border-radius: ${({ theme }) => theme.sizes['10px']};
    padding-left: ${({ theme }) => theme.sizes['28px']};
    font-style: italic;
    font-weight: ${({ theme }) => theme.font.weight.tiny};
    font-size: ${({ theme }) => theme.sizes['12px']};
    line-height: ${({ theme }) => theme.sizes['14px']};
    color: ${({ theme }) => theme.colors.light};
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
    ::placeholder {
        color: ${({ theme }) => theme.colors.light};
      }
 `
export const Search = styled.div`
    color: ${({ theme }) => theme.colors.light};
    position: absolute;
    right: 20px;
    top: 8px;
    cursor: pointer;
    max-width: 100px;
 `
export const Wrap = styled.div`
    display: flex;
    position: relative;
    align-items: center;  
 `