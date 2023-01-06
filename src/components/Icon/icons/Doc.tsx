import React from 'react'

export const Doc = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='100%' height='100%' viewBox='0 0 28 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M20.6982 2.88867H4.2C3.61652 2.88867 3.05694 3.12046 2.64436 3.53304C2.23178 3.94562 2 4.5052 2 5.08867V34.2285H26V8.08385L20.6982 2.88867ZM21.5 0.888672H4.2C3.08609 0.888672 2.0178 1.33117 1.23015 2.11882C0.442498 2.90648 0 3.97476 0 5.08867L0 36.2285H28V7.22852L21.5 0.888672Z'
        fill='#323751'
      />
      <path d='M22.0506 16.5678V18.6048H13.0156H6.00781V16.5678H22.0506Z' fill='#323751' />
      <path d='M22.1225 21.3986V23.5007H6.00781V21.3986H22.1225Z' fill='#323751' />
      <path d='M6.00781 10.1022H14.1596V12.0262H6.00781V10.1022Z' fill='#323751' />
      <path d='M22.0526 26.2732V28.3753H6.00781V26.2732H22.0526Z' fill='#323751' />
    </svg>
  )
}
