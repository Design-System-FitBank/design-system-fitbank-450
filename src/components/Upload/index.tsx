import { Typography } from '../Typography'
import React, { useState } from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'

export const Upload = () => {
  const [selectedFile, setSelectedFile] = useState()

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])

  }

  return (
    <Styled.Container data-testid='container'>
      <Styled.Title data-testid='title'>
        <Typography variant='h6'>Anexar arquivo</Typography>
      </Styled.Title>
      <Styled.BodyText data-testid='bodyText'>
        <Typography variant='body'>Você pode inserir uma descrição ou mensagem para o recebedor</Typography>
      </Styled.BodyText>
      <Styled.InputContainer data-testid='inputContainer' tabIndex={0}>
        <Styled.IconContainer data-testid='iconContainer'>
          <Icon name='upload' width={86} height={86}></Icon>
        </Styled.IconContainer>
        Clique aqui ou arraste o arquivo para cá.
        <Styled.input type='file' onChange={changeHandler}></Styled.input>
      </Styled.InputContainer>
    </Styled.Container>
  )
}
