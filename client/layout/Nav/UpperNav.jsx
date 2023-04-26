import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/constants/palette'
import { breakpoints } from '../../utils/constants/screens';
import Flex from '@/utils/grid/Flex';

const Root = styled(Flex)`
    height: 24px;
    background: ${colors.purple};
    font-family: 'Arial';
    border-radius: 4px;
    
    @media (max-width: ${breakpoints.NavBreak}px) {
        height: 72px;
        justify-content: space-evenly;
        border-radius: 0px;
    }
    
    div {
        font-size: 14px;
        color: ${colors.white};

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }

        strong {
            color: ${colors.white};
        }

        &:first-child {
            padding-left: 8px;
        }

        &:last-child {
            padding-right: 8px;
        }
    }

    .hide-nav {
        @media (max-width: ${breakpoints.NavBreak}px) {
            display: none;
        }
    }

    .mobile-adjust {
        @media (max-width: ${breakpoints.NavBreak}px) {
            text-align: center;
        }
    }

    .hidden-desktop {
        display: none;

        @media (max-width: ${breakpoints.NavBreak}px) {
            display: block;
        }
    }
`;

export default function UpperNav() {
  return (
    <Root
        alignItems='center'
        justify='space-between'
    >    
        <div className='mobile-adjust'>U.S. FULL PRESCRIBING <br className='hidden-desktop'/>INFORMATION INCLUDING<br className='hidden-desktop'/> <strong>BOXED WARNINGS</strong></div>
        <div className='mobile-adjust'>MEDICATION <br className='hidden-desktop'/>GUIDE</div>
        <div className='hide-nav'>INDICATIONS</div>
        <div className='hide-nav'>HEALTHCARE PROFESSIONALS SITE</div>
    </Root>
  )
}
