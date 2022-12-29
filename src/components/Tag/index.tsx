import React, { useState } from 'react'

import * as Styled from './styles'

import { Typography } from '../Typography'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export interface TagButtonListProps {
  label: string
}

interface TagProps {
  /**
   * Função sem retorno que será chamada ao acionar o click
   */
  onClick?: () => any
  /**
   * Lista de tags que será do tipo
   * TagButtonListProps[] {
   *  label: string;
   * }
   * no qual é preciso passar
   * dentro do objeto o Label
   */
  tagButtonList: TagButtonListProps[]
}

export const Tag = ({ tagButtonList }: TagProps) => {
  const [textValue, setTextValue] = useState<string>()
  const [tagsList, setTagsList] = useState(tagButtonList)

  const handleChange = (event: string) => {
    setTextValue(event)
  }

  const addTag = () => {
    setTextValue('')
    if (textValue) tagsList.push({ label: textValue! })
  }

  const removeTag = tag => {
    setTagsList(tagsList.filter(item => !item.label.includes(tag)))
  }

  return (
    <Styled.Container data-testid='tag-container'>
      <Typography variant='body'>Tags</Typography>
      <Typography variant='bodySmall'>
        Insira marcações para identificar seus gastos. Use nossa sugestão ou personalise as tags.
      </Typography>

      <Styled.ContentContainer>
        <Styled.TagInput data-testid='taginput'>
          <Input title={''} placeholder={'Digite uma tag'} type={'text'} disabled={false} onchange={handleChange} />
        </Styled.TagInput>
        <Button onClick={addTag} disabled={false} size={'small'} type={'secondary'}>
          Adicionar
        </Button>
      </Styled.ContentContainer>

      <Styled.ContentContainer>
        {tagsList.map(tagList => (
          <Button
            onClick={() => removeTag(tagList.label)}
            disabled={false}
            size={'small'}
            type={'secondary'}
            icon={'trash'}
            iconRight={true}
          >
            {tagList.label}
          </Button>
        ))}
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
