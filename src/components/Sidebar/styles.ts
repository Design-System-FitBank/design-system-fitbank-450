import styled from 'styled-components'

export const Container = styled.div<{ isClosed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.high.light};
  box-shadow: 2px 6px 20px ${({ theme }) => theme.colors.shadow};

  height: 100%;
  width: ${({ isClosed, theme }) => (isClosed ? theme.sizes['60px'] : theme.sizes['320px'])};
  padding: ${({ isClosed }) => (isClosed ? '20px 0px' : '20px 10px')};

  transition: 1s;
  position: relative;
`

export const LogoContainer = styled.div<{ isClosed: boolean }>`
  width: ${({ isClosed, theme }) => (isClosed ? theme.sizes['56px'] : theme.sizes['140px'])};
  height: ${({ theme }) => theme.sizes['40px']};

  margin: ${({ isClosed }) => (isClosed ? '0px 4px' : '0px 20px')};

  transition: 1s;
`

export const CloseNavBar = styled.div<{ isClosed: boolean }>`
  display: flex;
  justify-content: ${({ isClosed }) => (isClosed ? 'center' : 'flex-end')};
  align-items: center;

  margin: ${({ theme }) => theme.sizes['12px']};
  gap: ${({ theme }) => theme.sizes['12px']};

  font-weight: ${({ theme }) => theme.font.weight.regular};
  cursor: pointer;

  transition: 1s;
`

export const AccountDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  transition: 1s;
`

export const ChildContent = styled.div<{ isClosed: boolean }>`
  width: 100%;
  display: ${({ isClosed }) => (isClosed ? 'none' : 'flex')};
  align-items: ${({ isClosed }) => (isClosed ? 'none' : 'center')};
  justify-content: ${({ isClosed }) => (isClosed ? 'none' : 'center')};

  overflow: hidden;
`

export const ButtonsGrid = styled.div<{ isClosed: boolean }>`
  display: ${({ isClosed }) => (isClosed ? 'flex' : 'grid')};

  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;

  justify-items: center;
  column-gap: ${({ theme }) => theme.sizes['12px']};
  row-gap: ${({ theme }) => theme.sizes['16px']};

  flex-direction: ${({ isClosed }) => isClosed && 'column'};
  justify-content: ${({ isClosed }) => isClosed && 'center'};
  align-items: ${({ isClosed }) => isClosed && 'center'};

  overflow: hidden;
  height: auto;
  transition: 1s;
`

export const SignOutButton = styled.div<{ isClosed: boolean }>`
  display: flex;
  justify-content: ${({ isClosed }) => (isClosed ? 'center' : 'flex-end')};
  align-items: ${({ isClosed }) => (isClosed ? 'center' : 'flex-end')};

  margin: ${({ theme }) => theme.sizes['12px']};
  gap: ${({ theme }) => theme.sizes['12px']};

  font-weight: ${({ theme }) => theme.font.weight.regular};
  cursor: pointer;

  transition: 1s;
`

export const AlignButton = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;
  gap: ${({ theme }) => theme.sizes['16px']}
`
