import React from 'react'

export const Trash = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      {...props}
    >
      <path
        d='M4 6.72H7.33333M20 6.72H7.33333M7.33333 6.72L9.33333 4H14.6667L16.6667 6.72M10 11.48L10.6667 18.28M14 11.48L13.3333 18.28M8 21H16L18.6667 8.76H12H5.33333L8 21Z'
        stroke='currentColor'
      />
    </svg>
  )
}
