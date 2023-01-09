import { Typography } from '../Typography'
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import * as Styled from './styles'
import { Icon } from '../Icon'

export interface UploadProps {
  onChangeFile?: (file: any) => void
}
export const Upload = ({ onChangeFile }) => {
  const _onChangeFile = (file: any) => {
    onChangeFile(file)
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
        <Dropzone onDrop={acceptedFiles => _onChangeFile(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <Styled.IconContainer data-testid='iconContainer' {...getRootProps()}>
                <Icon name='upload' width={86} height={86}></Icon>
              </Styled.IconContainer>
              <Typography variant='body'>Clique aqui ou arraste o arquivo para cá.</Typography>
              <Styled.input data-testid='input' {...getInputProps()} />
            </section>
          )}
        </Dropzone>
      </Styled.InputContainer>
    </Styled.Container>
  )
}
