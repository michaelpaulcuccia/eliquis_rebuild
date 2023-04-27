import React from 'react';
import styled from 'styled-components';
import { colors } from '@/utils/constants/palette';

const Root = styled.button`
    padding: 8px 12px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "12px")};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Lato")};
    background: ${colors.orange};
    color: ${colors.white};
    border-radius: 4px;
    border: 1px solid ${colors.orange};
    font-weight: 800;
    cursor: pointer;

    &:hover {
        background: ${colors.darkOrange};
    }
`;

export default function Button({
    className,
    fontSize,
    fontFamily,
    children
}) {
  return (
    <Root
        className={className}
        fontSize={fontSize}
        fontFamily={fontFamily}
    >
        {children}
    </Root>
  )
}
