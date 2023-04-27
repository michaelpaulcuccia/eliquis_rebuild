import React from 'react';
import styled from 'styled-components';
import Flex from '@/utils/grid/Flex';

const Root = styled(Flex)`
    img {
        width: 60px;
        padding-right: 12px;
    }
`;

export default function IconWithRightText({
    className,
    icon, 
    text
}) {
  return (
    <Root
        alignItems='center'
        className={className}
    >
        <img src={icon} alt=''/>
        <div>{text}</div>
    </Root>
  )
}
