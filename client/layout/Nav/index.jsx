import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/constants/palette'
import Flex from '@/utils/grid/Flex';
import UpperNav from './UpperNav';

const Root = styled.div`
    width: 100vw;
`;

const Wrapper = styled(Flex)`
    max-width: 1040px;
    margin: 0 auto;
`;

const LowerContainer = styled(Flex)`
    height: 120px;
    background: ${colors.purple};
    color: ${colors.white};
`;

export default function Nav() {
  return (
    <Root>
        <Wrapper direction='column'>
            <UpperNav/>
            <LowerContainer></LowerContainer>
        </Wrapper>
    </Root>
  )
}
