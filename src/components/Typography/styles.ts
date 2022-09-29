import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.sizes['56px']};
  line-height: ${({ theme }) => theme.sizes['64px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.sizes['48px']};
  line-height: ${({ theme }) => theme.sizes['56px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.sizes['40px']};
  line-height: ${({ theme }) => theme.sizes['48px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.sizes['32px']};
  line-height: ${({ theme }) => theme.sizes['40px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const H5 = styled.h5`
  font-size: ${({ theme }) => theme.sizes['24px']};
  line-height: ${({ theme }) => theme.sizes['32px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const H6 = styled.h6`
  font-size: ${({ theme }) => theme.sizes['20px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const Subtitle = styled.sub`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: auto;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const Body = styled.body`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
`

export const BodySmall = styled.body`
  font-size: ${({ theme }) => theme.sizes['14px']};
  line-height: ${({ theme }) => theme.sizes['20px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
`

export const BodyBold = styled.body`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const BodyLarge = styled.body`
  font-size: ${({ theme }) => theme.sizes['18px']};
  line-height: ${({ theme }) => theme.sizes['28px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
`

export const Caption = styled.caption`
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  font-weight: ${({ theme }) => theme.font.weight.tiny};
`
