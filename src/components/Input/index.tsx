import React from 'react'

interface InputProps {
  title: string
  placeholder: string
}

export const Input: React.FC<InputProps> = ({ title, placeholder }) => {
  return (
    <div>
      <label data-testid='label'>{title}</label>
      <input data-testid='input' placeholder={placeholder} />
    </div>
  )
}
