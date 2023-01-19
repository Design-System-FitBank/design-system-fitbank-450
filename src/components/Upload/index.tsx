import { Typography } from '../Typography'
import React from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'

export interface UploadProps {
  onChangeFile?: (file: any) => void
}
export const Upload = ({ onChangeFile }) => {
  function overrideEventDefaults(event) {
    event.preventDefault()
    event.stopPropagation()
  }
  function handleDragAndDropFiles(event) {
    overrideEventDefaults(event)
    if (!event.dataTransfer) return
    _onChangeFile(event.dataTransfer.files)
  }

  const _onChangeFile = (file: any) => {
    onChangeFile(file)
  }
  return (
    <Styled.Container
      data-testid='container'
      onDrop={e => handleDragAndDropFiles(e)}
      onDragOver={e => overrideEventDefaults(e)}
      onDragEnter={e => overrideEventDefaults(e)}
      onDragLeave={e => overrideEventDefaults(e)}
    >
      <Styled.Title data-testid='title'>
        <Typography variant='h6'>Anexar arquivo</Typography>
      </Styled.Title>
      <Styled.BodyText data-testid='bodyText'>
        <Typography variant='bodySmall'>Você pode inserir uma descrição ou mensagem para o recebedor</Typography>
      </Styled.BodyText>
      <Styled.InputContainer data-testid='inputContainer' tabIndex={0}>
        <Styled.IconContainer data-testid='iconContainer'>
          <Icon name='upload' width={86} height={86}></Icon>
        </Styled.IconContainer>
        <Styled.BodyText>
          <Typography variant='bodySmall'>Clique aqui ou arraste o arquivo para cá.</Typography>
        </Styled.BodyText>
        <Styled.input data-testid='input' type={'file'} onChange={_onChangeFile} />
      </Styled.InputContainer>
    </Styled.Container>
  )
}
