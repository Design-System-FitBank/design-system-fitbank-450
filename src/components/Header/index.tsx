import React from "react";
import * as Styled from './styles'

export const Header = () => {
    return (<Styled.Container data-testid="container">
        <Styled.Input 
            data-testid='input'
            placeholder="Pesquise"

        />
        
    </Styled.Container>)
}