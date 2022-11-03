import { Icon } from "../Icon";
import React from "react";
import * as Styled from './styles'

export const Header = () => {
    return (<Styled.Container data-testid="container">
        <Styled.Wrap data-testid="wrap">
        <Styled.Input
            data-testid='input'
            placeholder="Pesquise"
        />
        <Styled.Search
            data-testid='lupa'>
            <Icon width={24} height={24} name= "search"/>
        </Styled.Search>
        </Styled.Wrap>
    </Styled.Container>)
}