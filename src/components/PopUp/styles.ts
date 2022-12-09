import styled from 'styled-components'

// export const PopUpContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 656px;
//   height: 308px;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.colors.light};
//   border-radius: ${({ theme }) => theme.sizes['16px']};
//   z-index: 500;
// `

export const BoxLoading = styled.div`
  display: flex;
  align-items: center;
  justifycontent: center;
  width: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
`

export const SuccessContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const TextAllign = styled.div`
  padding-top: 31px;
  padding-bottom: 24px;
`
