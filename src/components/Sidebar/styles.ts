import styled from 'styled-components'

export const Container = styled.div<{ isClosed: boolean }>`
  background-color: #f9f9f9;
  height: 100vh;
  width: ${({ isClosed, theme }) => (isClosed ? theme.sizes['62px'] : theme.sizes['320px'])};
  transition: 0.8s;
`

export const IconContainer = styled.div<{ isClosed: boolean }>`
  width: ${({ isClosed, theme }) => (isClosed ? theme.sizes['56px'] : theme.sizes['142px'])};
  height: ${({ theme }) => theme.sizes['38px']};

  margin: ${({ theme }) => theme.sizes['20px']} 0;
`

export const CloseNavBar = styled.div<{ isClosed: boolean }>`
  display: flex;
  justify-content: ${({ isClosed }) => (isClosed ? 'center' : 'flex-end')};
  align-items: center;

  margin: ${({ theme }) => theme.sizes['12px']};
  gap: ${({ theme }) => theme.sizes['12px']};

  font-weight: ${({ theme }) => theme.font.weight.regular};
  cursor: pointer;
`

export const AccountDetail = styled.div<{ isClosed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: ${({ isClosed }) => isClosed ? '80px' : '300px'};
  text-align: center;
`

export const ButtonsGrid = styled.div<{ isClosed: boolean }>`  
  display: ${({ isClosed }) => isClosed ? 'flex' : 'grid'};

  margin: 50px 0;

  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto; 
  
  justify-items: center;
  column-gap: 10px;
  row-gap: 15px;
  
  flex-direction: ${({ isClosed }) => isClosed ? 'column' : ''};
  justify-content: ${({ isClosed }) => isClosed ? 'center' : ''};
  align-items: ${({ isClosed }) => isClosed ? 'center' : ''};
  overflow-x: hidden;
`
