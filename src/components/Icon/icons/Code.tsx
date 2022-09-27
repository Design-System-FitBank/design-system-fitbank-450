import React from 'react'

export const Code = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.5 2C6.5 2 5.5 2 5.5 5V10C5.5 11 4 12 2 12C4 12 5.5 12.5 5.5 14V19C5.5 22 6.5 22 9.5 22'
        stroke='currentColor'
      />
      <path
        d='M14.5 2C17.5 2 18.5 2 18.5 5V10C18.5 11 20 12 22 12C20 12 18.5 12.5 18.5 14V19C18.5 22 17.5 22 14.5 22'
        stroke='currentColor'
      />
    </svg>
  )
}
