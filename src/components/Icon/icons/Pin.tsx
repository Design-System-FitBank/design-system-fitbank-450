import React from 'react'

export const Pin = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.9581 3.42029L20.5953 7.59178L17.6352 13.6295L15.9329 15.1276L14.0034 12.9087L8.87451 7.03188L10.577 5.54731L16.9581 3.42029ZM11.0833 6.43265L10.2857 7.12808L14.7568 12.2512L16.0274 13.7123L16.825 13.0104L19.4049 7.74817L16.6422 4.57966L11.0833 6.43265Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.716 9.33618L14.0267 11.9956L3.11214 19.8558L2.45703 19.1061L11.716 9.33618ZM6.82869 15.947L12.5532 11.8244L11.6839 10.8239L6.82869 15.947Z'
        fill='currentColor'
      />
    </svg>
  )
}
