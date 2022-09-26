import React from 'react'

export const Xlsx = (props: React.SVGProps<SVGSVGElement>) => {
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
        d='M12 8V17M12 8H7.5V11M12 8H16.5V11M12 17H7.5V14M12 17H16.5V14M16.5 11H7.5M16.5 11V14M7.5 11V14M7.5 14H16.5M4 21V3H16L20 7V21H4Z'
        stroke='currentColor'
      />
    </svg>
  )
}
