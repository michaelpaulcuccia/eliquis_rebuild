import React from 'react';
import styled from 'styled-components';
import Flex from '@/utils/grid/Flex';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';

const Root = styled.div`
    width: 100vw;
`;

const Wrapper = styled(Flex)`
    max-width: 1040px;
    margin: 0 auto;
`;

export default function Nav() {
  return (
    <Root>
        <Wrapper direction='column'>
            <UpperNav/>
            <LowerNav/>
        </Wrapper>
    </Root>
  )
}
