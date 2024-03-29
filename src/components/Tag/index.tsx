import * as Styled from './styles'

import React, { useState } from 'react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Typography } from '../Typography'
import { Validator } from '../../_utils/validator'

export interface TagButtonListProps {
  label: string
}

export interface TagProps {
  /**
   * Função sem retorno que será chamada ao acionar o click
   */
  onClick: (tag: TagButtonListProps[]) => any
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

export const Tag = ({ tagButtonList, onClick }: TagProps) => {
  const [disable, setDisable] = useState(true)
  const [textValue, setTextValue] = useState<string>()
  const [tagsList, setTagsList] = useState(tagButtonList)

  const handleChange = (event: string) => {
    setTextValue(event)
    {
      event !== '' && !Validator.validation('tag', event) ? setDisable(false) : setDisable(true)
    }
  }

  const addTag = () => {
    if (!tagsList.find(item => item.label === textValue) && textValue) {
      setTagsList([...tagsList, { label: textValue }])
      onClick([...tagsList, { label: textValue }])
    }
  }

  const removeTag = tag => {
    setTagsList(tagsList.filter(item => item.label !== tag))
    onClick(tagsList.filter(item => item.label !== tag))
  }

  return (
    <Styled.Container data-testid='tag-container'>
      <Typography variant='bodyLarge' data-testid='tag-title'>
        Tags
      </Typography>
      <Typography variant='body' data-testid='tag-subtitle'>
        Insira marcações para identificar seus gastos. Use nossa sugestão ou personalize as tags.
      </Typography>

      <Styled.TagContent data-testid='tag-content'>
        <Styled.TagInput data-testid='tag-input'>
          <Input
            title={''}
            validator={'tag'}
            placeholder={'Digite uma tag'}
            type={'text'}
            disabled={false}
            onChange={handleChange}
          />
        </Styled.TagInput>
        <Button onClick={addTag} disabled={disable} size={'small'} type={'secondary'} data-testid='tag-buttonAdd'>
          Adicionar
        </Button>
      </Styled.TagContent>

      <Styled.TagContent data-testid='tag-component'>
        <Styled.Wrap data-testid='wrap'>
          {tagsList.map((tagList, index) => (
            <Button
              key={index}
              onClick={() => removeTag(tagList.label)}
              disabled={false}
              size={'small'}
              type={'secondary'}
              icon={'trash'}
              iconRight={true}
              data-testid='tag-trash'
            >
              {tagList.label}
            </Button>
          ))}
        </Styled.Wrap>
      </Styled.TagContent>
    </Styled.Container>
  )
}
