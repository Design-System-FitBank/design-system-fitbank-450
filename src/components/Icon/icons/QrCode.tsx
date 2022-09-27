import React from 'react'

export const QrCode = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path fillRule='evenodd' clipRule='evenodd' d='M21 20L18 20L18 19L20 19L20 17L21 17L21 20Z' fill='currentColor' />
      <path fillRule='evenodd' clipRule='evenodd' d='M3 3L6 3L6 4L4 4L4 6L3 6L3 3Z' fill='currentColor' />
      <path fillRule='evenodd' clipRule='evenodd' d='M21 3L21 6L20 6L20 4L18 4L18 3L21 3Z' fill='currentColor' />
      <path fillRule='evenodd' clipRule='evenodd' d='M3 20L3 17L4 17L4 19L6 19L6 20L3 20Z' fill='currentColor' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 13L7 13L7 16L10 16L10 13ZM11 12L11 17L6 17L6 12L11 12Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17 13L14 13L14 16L17 16L17 13ZM18 12L18 17L13 17L13 12L18 12Z'
        fill='currentColor'
      />
      <path fillRule='evenodd' clipRule='evenodd' d='M15 14L16 14L16 15L15 15L15 14Z' fill='currentColor' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17 7L14 7L14 10L17 10L17 7ZM18 6L18 11L13 11L13 6L18 6Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 7L7 7L7 9.99994L10 9.99994L10 7ZM11 6L11 10.9999L6 10.9999L6 6L11 6Z'
        fill='currentColor'
      />
      <path fillRule='evenodd' clipRule='evenodd' d='M8 8L9 8L9 9L8 9L8 8Z' fill='currentColor' />
    </svg>
  )
}
