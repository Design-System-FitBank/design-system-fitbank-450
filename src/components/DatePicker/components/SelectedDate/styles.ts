import styled from 'styled-components'

export const ButtonDate = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  font-size: 0.75em;
  line-height: 1em;
  font-weight: 700;
  color: #000000de;
  text-transform: capitalize;

  background-color: transparent;
  border: none;
`

export const ModalDate = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 100;

  height: 110px;

  overflow-x: hidden;

  background-color: #fff;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);

  padding: 10px;
`
export const ItemModal = styled.option`
  width: 100%;
  padding: 5px;
  font-size: 0.75em;
  line-height: 1em;
  font-weight: 700;
  color: #000000de;
  text-align: left;
  text-transform: capitalize;

  :hover,
  :active {
    background-color: #323751;
    color: #ffffffde;
  }
`
