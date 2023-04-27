import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/constants/palette';
import Flex from '@/utils/grid/Flex';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';

const Root = styled.div`
  width: 100vw;
`;

const Wrapper = styled(Flex)`
  max-width: 1040px;
  margin: 0 auto;
  border-bottom: 3px solid ${colors.orange};
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
