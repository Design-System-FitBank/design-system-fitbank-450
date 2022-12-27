import React from 'react'
import * as moment from 'moment'

import * as Styled from './styles'

export const DisplayDate: React.FC<{date: moment.Moment}> = ({date}) => {
  return (
    <>
      <Styled.Header>{date.format('dddd')}</Styled.Header>
      <Styled.CurrentDate>
        <Styled.ShortMonth>{date.format('MMM')}</Styled.ShortMonth>
        <Styled.BigDay>{date.format('DD')}</Styled.BigDay>
        <Styled.CurrentYear>{date.format('YYYY')}</Styled.CurrentYear>
      </Styled.CurrentDate>
    </>
  )
}
