import React from 'react';
import styled from 'styled-components';
import Flex from '@/utils/grid/Flex';
//import { breakpoints } from '@/utils/constants/screens';

const Root = styled(Flex)`
    border: 1px solid gray;
    padding: 18px 6px;
    margin: 8px 6px;
    box-shadow: 0 0.125rem 0.125rem 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    //max-width: 330px;

`;

const IconAndHighLightWrapper = styled(Flex)`

    padding-bottom: 12px;

    img {
        height: 120px;
        width: 120px;
    }

    div {
        padding-left: 8px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
    }

`;

export default function StackedIconButton({
    icon,
    highlightText,
    buttonText,
    footerText
}) {
    console.log(icon)
  return (
    <Root
        direction='column'
    >
        <IconAndHighLightWrapper
            alignContent='center'
        >
            <img layout='raw' src={icon} alt='' />
            <div>{highlightText}</div>
        </IconAndHighLightWrapper>
        <div>{buttonText}</div>
        <div>{footerText}</div>
    </Root>
  )
}
