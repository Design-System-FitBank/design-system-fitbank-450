import styled from 'styled-components'

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
  
  > svg{
    color: ${({ theme }) => theme.colors.error};
  }
  }
`
/*Dá a margem entre o icon e o subtitle*/
export const TextAllign = styled.div`
  padding: 24px 0px 24px 0px;
  
`