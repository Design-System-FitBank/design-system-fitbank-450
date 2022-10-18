import React, { useState } from 'react'
import { Typography } from '../Typography'
import * as Styled from './styles'
import { Icon } from '../Icon'
interface InputProps {
  title: string
  placeholder: string
  disabled: boolean

  type: 'text' | 'password'

  validated?: string
}

export const Input: React.FC<InputProps> = ({ type = 'text', title, placeholder, disabled = false, validated }) => {
  const [text, setText] = useState<string>()
  const [hideIcon, setHideIcon] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (e: any) => {
    let textEntry: string = e.target.value
    setText(textEntry)
    setTimeout(() => {
      setChecked(true)
    }, 800)
  }

  const toggleIcon = hideIcon ? 'eyeClose' : 'eyeOpen'

  return (
    <>
      <Styled.Label data-testid='label'>
        <Typography variant='bodyLarge'>{title}</Typography>
      </Styled.Label>

      <Styled.Wrap>
        <Styled.InputContainer
          data-testid='input'
          placeholder={type === 'text' ? placeholder : '••••••••'}
          type={type === 'text' ? 'text' : hideIcon ? 'text' : 'password'}
          disabled={disabled}
          hasMessage={Boolean(validated)}
        />
        <Styled.Icon data-testid='icon' onClick={() => setHideIcon(!hideIcon)}>
          {type === 'password' && <Icon name={toggleIcon as any} />}
        </Styled.Icon>
      </Styled.Wrap>
      <div data-testid='message'>{validated}</div>
    </>
  )
}

// <Styled.Label data-testid='label'>
//     <Typography variant='bodyLarge'>{title}</Typography>
//   </Styled.Label>

//   <Styled.Wrap data-testid='container' isValid={Boolean(validator)}>
//     <Styled.InputContainer
//       data-testid='input'
//       type={type !== 'password' ? type : hideIcon ? 'text' : 'password'}
//       value={text}
//       placeholder={type === 'text' ? placeholder : '••••••••'}
//       disabled={disabled}
//       onChange={e => handleChange(e)}
//     ></Styled.InputContainer>
//     {type === 'password' && (
//       <Styled.Icon
//         data-testid='icon'
//         isDisable={disabled}
//         // isValid={toggleIcon === 'done'}
//         isValid={false}
//         onClick={() => setHideIcon(!hideIcon)}
//       >
//         {!Boolean(validator) && checked ? (
//           <Icon name='done' width={24} height={24} />
//         ) : (
//           <Icon name={toggleIcon as any} width={24} height={24} />
//         )}
//       </Styled.Icon>
//     )}
//   </Styled.Wrap>
//   {validator && (
//     <Styled.MessageError data-testid='message'>
//       <Typography variant='bodySmall'>{validator}</Typography>
//     </Styled.MessageError>
//   )}
