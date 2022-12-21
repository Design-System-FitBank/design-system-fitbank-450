import React, { ReactNode, useState } from 'react'

import * as Styled from './styles'

import { Typography } from '../Typography'
import { Icon, IconsProps } from '../Icon'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export interface TagButtonListProps {
  label: string
}

interface TagProps {
  onClick?: () => any

  tagButtonList: TagButtonListProps[]
}

export const Tag = ({ tagButtonList }: TagProps) => {
  const [textValue, setTextValue] = useState<string>()
  const [tagsList, setTagsList] = useState(tagButtonList)

  const handleChange = (event: string) => {
    //const textEntry: string = event.target.value
    //console.log(event)
    setTextValue(event)
  }

  const handleChanges = (event: any) => {
    const textEntry: string = event.target.value
    //console.log(event)
    setTextValue(textEntry)
  }

  const addTag = () => {
    //setTagName(textValue)
    setTextValue('')
    if (textValue) tagsList.push({ label: textValue! })
  }

  const removeTag = tag => {
    setTagsList(tagsList.filter(item => !item.label.includes(tag)))
  }

  return (
    <Styled.Container>
      <Typography variant='body'>Tags</Typography>
      <Typography variant='bodySmall'>
        Insira marcações para identificar seus gastos. Use nossa sugestão ou personalise as tags.
      </Typography>

      {/* <Styled.TagInput>
        <Icon name={'user'} width={24} height={24} />

        <Styled.Iinput
          data-testid='input'
          value={textValue}
          //onChange={event => handleChanges(event)}
          placeholder='Digite uma tag'
        />
        <Icon name={'calendar'} width={24} height={24} />
      </Styled.TagInput> */}

      {/* <Styled.InputContainer */}

      {/* <Styled.Iinput data-testid='input' onChange={event => handleChange(event)} placeholder='Digite uma tag' /> */}
      <Styled.ContentContainer>
        <Styled.TagInput>
          <Input
            data-testid='input'
            placeholder={'Digite uma tag'}
            type={'text'}
            disabled={false}
            onchange={handleChange}
            title={''}
          />
        </Styled.TagInput>
        <Button data-testid='button' onClick={addTag} disabled={false} size={'small'} type={'secondary'}>
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
