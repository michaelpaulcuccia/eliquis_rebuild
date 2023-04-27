import React from 'react';
import styled from 'styled-components';
import Flex from '@/utils/grid/Flex';
import { Spacer } from '@/components/Spacers';
import { breakpoints } from '@/utils/constants/screens';

const BMS = '/logos/BMS_Logo.png';
const PF = '/logos/PF_Logo.png';

const Root = styled(Flex)`

`;

const LogoContainer = styled(Flex)`
    padding-bottom: 12px;

    .bms_logo {
        width: 331px;
        padding-right: 4px;

        @media (max-width: ${breakpoints.lg}px) {
            max-width: 170px;
        }
    }

    .pf_logo {
        width: 190px;
        padding-left: 4px;

        @media (max-width: ${breakpoints.lg}px) {
            max-width: 98px;
        }
    }
`;

const Links = styled(Flex)`
    padding-bottom: 20px;
    cursor: pointer;

    .left-div {
        padding-right: 12px;

        &:hover {
            text-decoration: underline;
        }
    }

    .right-div {
        padding-left: 12px;

        &:hover {
            text-decoration: underline;
        }
    }
    .has-walls {
        border-left: 1px solid black;
        border-right: 1px solid black;
        padding-right: 12px;
        padding-left: 12px;

        &:hover {
            text-decoration: underline;
        }
    }

`;

const Legal = styled(Flex)`
    div {
        padding-bottom: 8px;

        @media (max-width: ${breakpoints.lg}px) {
            text-align: center;
            padding: 0 6px 8px 6px;
        }
    }
`;

export default function Footer() {
  return (
    <Root
        direction='column'
        alignItems='center'
    >
        <LogoContainer>
            <img className='bms_logo' src={BMS} alt='' />
            <img className='pf_logo' src={PF} alt='' />
        </LogoContainer>
        <Links>
            <div className='left-div'>Legal Notice</div>
            <div className='has-walls'>Privacy Policy</div>
            <div className='right-div'>Site Map</div>
        </Links>
        <Legal
            direction='column'
            alignItems='center'
        >
            <div>ELIQUIS® and the ELIQUIS logo are trademarks of Bristol-Myers Squibb Company.</div>
            <div>All other trademarks are property of their respective companies.</div>
            <div>© 2023 Michael Cuccia, Frontend Engineer 04/23</div>
        </Legal>
        <Spacer size={18} />
    </Root>
  )
}
