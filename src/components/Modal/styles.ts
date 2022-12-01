import styled from 'styled-components'

export const Container = styled.div<{ isClosed: boolean }>`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isClosed }) => isClosed ? 0 : 1}
`

export const ModalOverlay = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 100%;
  width: 100%;
  z-index: 400;
  transition: all 0.3s ease-in-out;
  opacity: 0.08
`

export const ModalContainer = styled.div`
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  position: absolute;
  top: 50;
  flex-direction: column;
  border-radius: 1rem;
  transition: 1s;
  z-index: 500;
`

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  height: 3.125rem;
  margin: 1rem;
`

export const ModalBody = styled.div`
  display: flex;
  width: 100%;
  height: 3.125rem;
  margin: 1rem;
`

export const ModalFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.greyLight};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  border-radius: 0 0 1rem 1rem;
`

