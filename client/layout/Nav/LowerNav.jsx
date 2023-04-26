import React from 'react';
import styled from 'styled-components';
import Flex from '@/utils/grid/Flex';
import { colors } from '@/utils/constants/palette';
import { breakpoints } from '@/utils/constants/screens';

const Eliquis = '/logos/Eliquis_logo.svg';
const Phone = '/icons/Phone_Orange.svg';

const Root = styled(Flex)`
    height: 120px;
    color: ${colors.white};
    padding: 12px 20px;

    @media (max-width: ${breakpoints.NavBreak}px) {
        flex-direction: column;
        justify-content: flex-start;
        height: 200px;
        padding: 8px 4px;
        margin: 0 auto;
    }

    img {
        height: 100%;

        @media (max-width: ${breakpoints.NavBreak}px) {
            align-self: flex-start;
            height: 40%;
        }
    }

    .age-text-desktop {
       align-self: center;
       text-align: center;
    }

    .age-text-mobile {
        text-align: center;
        font-size: 12px;
        padding-bottom: 12px;
    }

    .hcp-text-mobile {
        align-self: flex-end;
        padding-bottom: 12px;
        color: ${colors.orange};
        font-weight: 800;
        font-size: 14px;

        &:after {
            content: ' >'
        }
    }

    .hide-mobile {
        display: block;
        @media (max-width: ${breakpoints.NavBreak}px) {
            display: none;
        }
    }

    .show-mobile {
        display: none;
        @media (max-width: ${breakpoints.NavBreak}px) {
            display: block;
        }
    }

`;

const PhoneWithText = styled(Flex)`
    height: 100%;

    img {
        height: 40%;

        //hide-mobile class causing flex issues
        @media (max-width: ${breakpoints.NavBreak}px) {
            display: none;
        }
    }

    div {
    padding-left: 8px;
    font-weight: 800;

    span {
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    //hide-mobile class causing flex issues
    @media (max-width: ${breakpoints.NavBreak}px) {
        display: none;
    }
}
`;

const CoPay = styled.div`
    padding: 14px 12px;
    background: ${colors.orange};
    color: ${colors.white};
    border-radius: 8px;
    font-weight: 800;
    cursor: pointer;
    transition: background 1s ease-in-out;

    &:hover {
        background: linear-gradient(#ff6718, #ff6718);
    }
`;

export default function LowerNav() {
  return (
    <Root
        alignItems='center'
        justify='space-evenly'
    >
        <div className='age-text-mobile show-mobile'>This site is inteneded for U.S. residents 18 years of age or older.</div>
        <div className='hcp-text-mobile show-mobile'>HEALTHCARE PROFESSIONALS SITE</div>
        <img src={Eliquis} alt='' />
        <div className='age-text-desktop hide-mobile'>This site is inteneded for U.S. <br/> residents 18 years of age or older.</div>
        <PhoneWithText
            alignItems='center'
        >
            <img src={Phone} alt='' />
            <div>Call Us at <span>1-855-ELIQUIS</span></div>
        </PhoneWithText>
        <CoPay
            className='hide-mobile'
        >
            ACTIVATE CO-PAY CARD
        </CoPay>
    </Root>
  )
}
