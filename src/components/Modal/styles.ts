import styled from 'styled-components'

export const Container = styled.div<{ isClosed: boolean }>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isClosed }) => (isClosed ? 0 : 1)};
  transition: all 0.3s ease-in-out;
`

export const ModalBackdrop = styled.div<{ isClosed: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.dark};
  opacity: ${({ isClosed }) => (isClosed ? 0 : 1)};
  height: 100%;
  width: 100%;
  z-index: 400;
  transition: all 0.3s ease-in-out;
  opacity: 0.2;
`

export const ModalContainer = styled.div<{ isClosed: boolean }>`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.light};
  flex-direction: column;
  border-radius: ${({ theme }) => theme.sizes['16px']};
  z-index: 500;
  width: 656px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.sizes['16px']} ${({ theme }) => theme.sizes['26px']};
`

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  &::after {
    content: '';
    position: absolute;
    margin-top: ${({ theme }) => theme.sizes['7px']};
    height: ${({ theme }) => theme.sizes['3px']};
    width: ${({ theme }) => theme.sizes['50px']};
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`

export const ModalBody = styled.div`
  font-size: ${({ theme }) => theme.sizes['16px']};
  display: block;
  height: auto;
  word-wrap: break-word;
  margin: ${({ theme }) => theme.sizes['26px']};
  max-height: ${({ theme }) => theme.sizes['320px']};
  overflow-x: hidden;
  overflow-y: auto;
`

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.greyLight};
  height: ${({ theme }) => theme.sizes['78px']};
  border-radius: 0 0 ${({ theme }) => theme.sizes['16px']} ${({ theme }) => theme.sizes['16px']};
`
