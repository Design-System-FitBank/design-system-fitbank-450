import React from 'react'

export const Checked = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='100%' height='100%' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.81662 0.613036C8.03034 0.7879 8.06184 1.10291 7.88698 1.31663L3.03712 7.24424L0.146447 4.35357C-0.0488155 4.15831 -0.0488155 3.84172 0.146447 3.64646C0.341709 3.4512 0.658291 3.4512 0.853553 3.64646L2.96288 5.75579L7.11302 0.683396C7.28789 0.469674 7.6029 0.438173 7.81662 0.613036Z'
        fill='currentColor'
      />
    </svg>
  )
}
