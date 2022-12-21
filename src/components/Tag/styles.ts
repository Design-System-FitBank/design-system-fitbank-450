import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.textDisabled};

  width: 100%;
  weigth: ${({ theme }) => theme.sizes['62px']};
  padding: '24px 24px';

  transition: 1s;
  position: relative;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes['24px']};
`

export const TagContainer = styled.div`
  display: flex;

`

export const TagInput = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.sizes['287px']};
  height: ${({ theme }) => theme.sizes['48px']};

  border: none;//1px solid ${({ theme }) => theme.colors.disabled};
  //border-radius: ${({ theme }) => theme.sizes['6px']};
  //border-color: ${({ theme }) => theme.colors.primary};
  //padding: ${({ theme }) => theme.sizes['0px']} ${({ theme }) => theme.sizes['16px']};
  //padding-right: ${({ theme }) => theme.sizes['16px']};
  margin-right: ${({ theme }) => theme.sizes['24px']};

  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['14px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};

  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.dark};


  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
`

export const Iinput = styled.input`
  width: ${({ theme }) => theme.sizes['210px']};
  height: ${({ theme }) => theme.sizes['26px']};

  //border-radius: ${({ theme }) => theme.sizes['6px']};
  /* padding-left: ${({ theme }) => theme.sizes['16px']};
  padding-right: ${({ theme }) => theme.sizes['16px']}; */
  padding: ${({ theme }) => theme.sizes['0px']} ${({ theme }) => theme.sizes['8px']};
  margin-right: ${({ theme }) => theme.sizes['24px']};
  

  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['14px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};

  border: none;
  //border-color: ${({ theme }) => theme.colors.disabled};
  //background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.dark};


  /* ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  } */
`

export const InputContainer = styled.input<{ hasMessage?: boolean }>`
  width: 100%;
  /* min-width: ${({ theme }) => theme.sizes['320px']}; */
  height: ${({ theme }) => theme.sizes['48px']};
  border-radius: ${({ theme }) => theme.sizes['6px']};
  border: 1px solid ${({ theme, hasMessage }) => (hasMessage ? theme.colors.error : theme.colors.disabled)};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
  font-size: ${({ theme }) => theme.sizes['18px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  justify-content: flex-start;
  padding: 0px ${({ theme }) => theme.sizes['16px']};
  overflow-x: hidden;

  :hover {
    box-shadow: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.sizes['2px']}
      ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.colors.shadow};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.sizes['2px']} ${({ theme }) => theme.sizes['2px']}
      ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.colors.shadow};
    color: ${({ theme }) => theme.colors.primary};
  }
  :disabled {
    border: 1px solid ${({ theme }) => theme.colors.disabled};
    background-color: ${({ theme }) => theme.colors.disabled};
    box-shadow: none;

    ::placeholder {
      color: ${({ theme }) => theme.colors.textGrey};
    }
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.disabled};
  }
`

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes['24px']};
`

export const Button = styled.button`
  // display: flex;
  // justify-content: center;
  // align-items: center;

  // width: ${({ theme }) => theme.sizes['142px']};
  // height: ${({ theme }) => theme.sizes['32px']};

  // margin-left: ${({ theme }) => theme.sizes['24px']};

  border: none;
  // border-radius: ${({ theme }) => theme.sizes['8px']};

  // background-color: ${({ theme }) => theme.colors.light};
  // color: ${({ theme }) => theme.colors.disabled};

  cursor: pointer;

  // :hover {
  //   border: 1px solid ${({ theme }) => theme.colors.disabled};
  // }

  // :active {
  //   border: 1px solid ${({ theme }) => theme.colors.primary};
  //   color: ${({ theme }) => theme.colors.primary};
  // }
`
export const ButtonTag = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ theme }) => theme.sizes['160px']};
  height: ${({ theme }) => theme.sizes['32px']};

  padding: ${({ theme }) => theme.sizes['4px']} ${({ theme }) => theme.sizes['24px']};

  margin-top: ${({ theme }) => theme.sizes['28px']};

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes['18px']};

  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
`

export const Icon = styled.button`
  border: none;
  cursor: pointer;
`

export const Typography = styled.div`
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};

  word-break: break-all;
`
