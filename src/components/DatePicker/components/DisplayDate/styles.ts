import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #323751;

  width: 100%;
  height: 32px;

  text-transform: capitalize;
  color: #fff;
  font-size: 0.75em;
  line-height: 1em;
`

export const CurrentDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #efefef;

  height: 199px;

  padding-top: 14px;
  padding-bottom: 9px;
`

export const ShortMonth = styled.div`
  font-size: 1.5em;
  line-height: 1.75em;
  color: #323751;
  text-transform: uppercase;
`

export const BigDay = styled.div`
  font-size: 5em;
  color: #323751;
`

export const CurrentYear = styled.div`
  font-size: 1.5em;
  line-height: 1.75em;
  color: #3c3c3c8a;
`
