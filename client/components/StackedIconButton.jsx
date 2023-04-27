import React from 'react';
import styled from 'styled-components';
import Flex from '@/utils/grid/Flex';
import { Spacer } from './Spacers';
import { colors } from '@/utils/constants/palette';
import { breakpoints } from '@/utils/constants/screens';

const Root = styled(Flex)`
    border: 1px solid gray;
    padding: 24px 4px 18px 8px;
    margin: 8px 6px;
    box-shadow: 0 0.125rem 0.125rem 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    width: 30%;

    @media (max-width: ${breakpoints.lg}px) {
        width: 100%;
    }
`;

const IconAndHighLightWrapper = styled(Flex)`
    padding-bottom: 12px;

    @media (max-width: ${breakpoints.lg}px) {
        align-items: center;
        justify-content: center;
    }

    img {
        width: 40%;
        height: 100%;

        @media (max-width: ${breakpoints.lg}px) {
            width: 25%;
        }
    }

    div {
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        width: 60%;

        @media (max-width: ${breakpoints.lg}px) {
            width: 60%;
            padding-left: 20px;
            text-align: left;
        }
    }

`;

const BottomTextWrapper = styled(Flex)`
    margin-top: auto;

    .btn-text {
        font-size: 18px;
        font-weight: 600;
        color: ${colors.orange};
        cursor: pointer;
        padding-bottom: 8px;

        &:hover {
            text-decoration: underline;
            color: ${colors.darkOrange};
        }
    }

    .footer-text {
        font-weight: 500;
        text-align: center;
    }
`;

export default function StackedIconButton({
    icon,
    highlightText,
    buttonText,
    footerText,
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
        <Spacer size={8}/>
        <BottomTextWrapper
            direction='column'
            alignItems='center'
        >
            <div className='btn-text'>{buttonText}</div>
            <div className='footer-text'>{footerText}</div>
        </BottomTextWrapper>
    </Root>
  )
}
