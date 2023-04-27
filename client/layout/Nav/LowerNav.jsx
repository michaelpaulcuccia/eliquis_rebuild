import React from 'react';
import styled from 'styled-components';
import Flex from '@/utils/grid/Flex';
import { colors } from '@/utils/constants/palette';
import { breakpoints } from '@/utils/constants/screens';
import { Spacer } from '@/components/Spacers';
import Button from '@/components/Button';

const Eliquis = '/logos/Eliquis_logo.svg';
const Phone = '/icons/Phone_Orange.svg';

const Root = styled.div`

    .hide-mobile {
        display: flex;
        @media (max-width: ${breakpoints.lg}px) {
            display: none;
        }
    }

    .show-mobile {
        display: none;
        @media (max-width: ${breakpoints.lg}px) {
            display: flex;
        }
    }
`;

const Desktop = styled(Flex)`
    height: 120px;
    color: ${colors.white};
    padding: 12px 20px;

    img {
        height: 100%;
    }

    .age-text {
       align-self: center;
       text-align: center;
    }

    .age-text-mobile {
        text-align: center;
        font-size: 12px;
        padding-bottom: 12px;
    }
`;

const PhoneWithText = styled(Flex)`
    height: 100%;

    img {
        height: 40%;
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

const Mobile = styled(Flex)`
    height: 185px;
    padding: 8px 8px;
    margin: 0 auto;
    max-width: 500px;

    .age-text-mobile {
        text-align: center;
        font-size: 12px;
        padding-bottom: 12px;
        font-weight: 600;
    }

    .hcp-text-mobile {
        align-self: flex-end;
        color: ${colors.orange};
        font-weight: 800;
        font-size: 14px;

        &:after {
            content: ' >'
        }
    }
`;

const MobileFlex = styled(Flex)`
    height: 60%;
    margin-top: -32px;

    img {
        height: 70%;
        padding-left: 16px;
    }

`;

export default function LowerNav() {
  return (
    <Root>
        <Desktop
            alignItems='center'
            justify='space-evenly'
            className='hide-mobile'
        >
        <img 
            src={Eliquis} alt='' 
        />
        <div 
            className='age-text-desktop'
        >
            This site is inteneded for U.S. <br/> residents 18 years of age or older.</div>
        <PhoneWithText
            alignItems='center'
        >
            <img src={Phone} alt='' />
            <div>Call Us at <span>1-855-ELIQUIS</span></div>
        </PhoneWithText>
        <Button
            fontFamily='arial'
        >
            ACTIVATE CO-PAY CARD
        </Button>
        </Desktop>
        {/* ******** */}
        <Mobile
            direction='column'
            className='show-mobile'
        >
            <div 
                className='age-text-mobile'
            >
                This site is inteneded for U.S. residents 18 years of age or older.
            </div>
            <div 
                className='hcp-text-mobile'
            >
                HEALTHCARE PROFESSIONALS SITE
            </div>
            <Spacer
                size={6} 
            />
            <div 
                className='hcp-text-mobile'
            >
                EN ESPANOL
            </div>
            <MobileFlex
                justify='space-between'
                alignItems='flex-end'
            >
                <img src={Eliquis} alt='' />
                <div>
                    <Button
                        fontFamily='arial'
                    >
                        ACTIVATE CO-PAY CARD
                    </Button>
                </div>
            </MobileFlex>
        </Mobile>
    </Root>
  )
}
