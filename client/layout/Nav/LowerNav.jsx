import React from 'react';
import styled from 'styled-components';
import Flex from '@/utils/grid/Flex';
import { colors } from '@/utils/constants/palette';

const Eliquis = '/logos/Eliquis_logo.svg';
const Phone = '/icons/Phone_Orange.svg';

const Root = styled(Flex)`
    height: 120px;
    color: ${colors.white};
    padding: 12px 20px;

    img {
        height: 100%;
    }

    .age-text {
        text-align: center;
    }
`;

const CallContainer = styled(Flex)`
    height: 100%;

    img {
        height: 70%;
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
        <img src={Eliquis} alt='' />
        <div className='age-text'>This site is inteneded for U.S. <br/> residents 18 years of age or older.</div>
        <CallContainer
            alignItems='center'
        >
            <img src={Phone} alt='' />
            <div>Call Us at <span>1-855-ELIQUIS</span></div>
        </CallContainer>
        <CoPay>
            ACTIVATE CO-PAY CARD
        </CoPay>
    </Root>
  )
}
