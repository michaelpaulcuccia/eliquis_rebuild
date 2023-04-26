import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@/utils/constants/screens';

const ResponsiveRoot = styled.span`
  display: block;
  padding: ${({ size }) => size}px;

  @media (max-width: ${breakpoints.lg}px) {
      padding: ${({ when }) => when.lg}px;
    }

  @media (max-width: ${breakpoints.md}px) {
      padding: ${({ when }) => when.md}px;
    }

   @media (max-width: ${breakpoints.sm}px) {
      padding: ${({ when }) => when.sm}px;
    }

 `;

export function ResponsiveSpacer({ 
  className, 
  children,
  size,
  when
}) {
  return (
    <ResponsiveRoot 
        className={className} 
        size={size}
        when={when}
    >
      {children}
    </ResponsiveRoot>
  );
}

//ex: size={8} when={{ lg: 12, md: 8, sm: 6 }} 

const SpacerRoot = styled.span`
  display: block;
  padding: ${({ size }) => size}px;
`;

export function Spacer({ 
  className, 
  size, 
  children, 
}) {
  return (
    <SpacerRoot className={className} size={size}>
      {children}
    </SpacerRoot>
  );
}