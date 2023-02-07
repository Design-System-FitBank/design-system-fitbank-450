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

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: auto;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const Body = styled.p`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const BodyBold = styled.p`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const BodySmall = styled.p`
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['20px']};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const BodySmallBold = styled.p`
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['20px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const BodyMedium = styled.p`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const BodyMediumBold = styled.p`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const BodyLarge = styled.p`
  font-size: ${({ theme }) => theme.sizes['20px']};
  line-height: ${({ theme }) => theme.sizes['28px']};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const BodyLargeBold = styled.p`
  font-size: ${({ theme }) => theme.sizes['20px']};
  line-height: ${({ theme }) => theme.sizes['28px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const Caption = styled.span`
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const CaptionBold = styled.span`
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const Button = styled.label`
  font-size: ${({ theme }) => theme.sizes['16px']};
  line-height: ${({ theme }) => theme.sizes['20px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const ButtonSmall = styled.label`
  font-size: ${({ theme }) => theme.sizes['12px']};
  line-height: ${({ theme }) => theme.sizes['16px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const ButtonLarge = styled.label`
  font-size: ${({ theme }) => theme.sizes['20px']};
  line-height: ${({ theme }) => theme.sizes['24px']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`
