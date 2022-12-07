import React from 'react';

import * as Styled from './styles';

interface SkeletonProps {
  /**
   * altura obrigatória do componente
   */
  height: number
  /**
   * largura obrigatória do componente
   */
  width: number
  /**
   * radio da curvatura das pontas do componente
   */
  radius: number
}

export const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width,
  radius,
}) => {
  return <Styled.Container
    data-testid='skeleton'
    width={width}
    height={height}
    radius={radius}
  />;
}