import React from 'react';

import * as Styled from './styles';

interface SkeletonProps {
  height: number
  width: number
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