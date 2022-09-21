import styled from 'styled-components';

export const Container = styled.button<{secondary?: boolean}>`
background-color: ${({theme, secondary}) => secondary ? theme.colors.secondary : theme.colors.primary};
`