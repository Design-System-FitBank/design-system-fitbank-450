import React, { ReactNode, useState } from 'react'

import * as Styled from './styles'

import { Typography } from '../Typography'
import { Icon, IconsProps } from '../Icon'

export interface TagButtonListProps {
  label: string
}

interface TagProps {
  onClick?: () => any

  tagButtonList: TagButtonListProps[]
}

export const Tag = ({ tagButtonList }: TagProps) => {
  const [textValue, setTextValue] = useState<string>()
  const [tagName, setTagName] = useState<string>()
  const [tagsList, setTagsList] = useState(tagButtonList)

  const handleChange = (event: any) => {
    const textEntry: string = event.target.value
    setTextValue(textEntry)
  }

  const addTag = () => {
    setTagName(textValue)
    setTextValue('')
    if (textValue) tagsList.push({ label: textValue! })
  }

  const removeTag = key => {
    setTagsList(tagsList.filter(x => !x.label.includes(key)))
  }

  return (
    <Styled.Container>
      <Typography variant='body'>Tags</Typography>
      <Typography variant='bodySmall'>
        Insira marcações para identificar seus gastos. Use nossa sugestão ou personalise as tags.
      </Typography>

      <Styled.Wrap data-testid='wrap'>
        <Styled.Input
          data-testid='input'
          value={textValue}
          onChange={event => handleChange(event)}
          placeholder='Digite uma tag'
        />
        <Styled.Button data-testid='button' onClick={addTag} disabled={false}>
          <Typography variant='caption'>Adicionar</Typography>
        </Styled.Button>
      </Styled.Wrap>

      <Styled.Wrap data-testid='wrap'>
        {tagsList.map(tagList => (
          <Styled.ButtonTag data-testid='tag-button' onClick={() => {}} disabled={false}>
            <Styled.Typography>{tagList.label}</Styled.Typography>
            <Styled.Icon onClick={() => removeTag(tagList.label)}>
              <Icon name={'trash'} width={24} height={24} />
            </Styled.Icon>
          </Styled.ButtonTag>
        ))}
      </Styled.Wrap>
    </Styled.Container>
  )
}
