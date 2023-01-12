import styled from 'styled-components'

export const Container = styled.div<{ opacity: number }>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;
  opacity: ${({ opacity }) => opacity};
`

export const BackdropModal = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 100%;
  width: 100%;
  z-index: 400;
  opacity: 0.2;
`

export const ContainerModal = styled.div<{ width: number; height: number; type: any }>`
  display: flex;
  position: relative;
  justify-content: ${({ type }) => (type === 'primary' ? 'space-between' : 'center')};
  background-color: ${({ theme }) => theme.colors.light};
  flex-direction: column;
  border-radius: ${({ theme }) => theme.sizes['16px']};
  z-index: 500;
  width: ${({ theme, width }) => (width ? `${width}rem` : theme.sizes['656px'])};
  height: ${({ height }) => (height ? `${height}rem` : 'auto')};
`

export const BodyModal = styled.div`
  font-size: ${({ theme }) => theme.sizes['16px']};
  display: flex;
  height: auto;
  word-wrap: break-word;
  margin: ${({ theme }) => theme.sizes['26px']};
  max-height: ${({ theme }) => theme.sizes['320px']};
  overflow-x: hidden;
  overflow-y: auto;
`
