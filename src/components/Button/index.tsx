import React from 'react';

import * as Styled from './styles'

interface ButtonProps {
  secondary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  /**
   * Função sem retorno que será chamada ao clicar no botão
   */
  onClick: () => void;
}


export const Button = ({
  secondary = false,
  size = 'medium',
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Container
      secondary={secondary}
      type="button"
      onClick={onClick}
      {...props}
    >
      {label}
    </Styled.Container>
  );
};
