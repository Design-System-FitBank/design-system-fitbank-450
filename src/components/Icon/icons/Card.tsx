import React from 'react'

export const Card = (props: React.SVGProps<SVGSVGElement>) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.6499 6.94995H5.33992C4.55568 6.94995 3.91992 7.58571 3.91992 8.36995V15.63C3.91992 16.4142 4.55568 17.05 5.33992 17.05H18.6499C19.4342 17.05 20.0699 16.4142 20.0699 15.63V8.36995C20.0699 7.58571 19.4342 6.94995 18.6499 6.94995ZM5.33992 5.94995H18.6499C19.9865 5.94995 21.0699 7.03342 21.0699 8.36995V15.63C21.0699 16.9665 19.9865 18.05 18.6499 18.05H5.33992C4.00339 18.05 2.91992 16.9665 2.91992 15.63V8.36995C2.91992 7.03342 4.00339 5.94995 5.33992 5.94995Z'
        fill='currentColor'
      />
      <path fillRule='evenodd' clipRule='evenodd' d='M18 15.67H6V14.67H18V15.67Z' fill='currentColor' />
      <path fillRule='evenodd' clipRule='evenodd' d='M5.5 10.5H7.09V11.5H5.5V10.5Z' fill='currentColor' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.34009 10V12H9.18009V10H6.34009ZM6.02009 9H9.50009C9.87564 9 10.1801 9.33548 10.1801 9.74931V12.2507C10.1801 12.6645 9.87564 13 9.50009 13H6.02009C5.64453 13 5.34009 12.6645 5.34009 12.2507V9.74931C5.34009 9.33548 5.64453 9 6.02009 9Z'
        fill='currentColor'
      />
      <path fillRule='evenodd' clipRule='evenodd' d='M18 12.05H15.01V11.05H18V12.05Z' fill='currentColor' />
    </svg>
  )
}
