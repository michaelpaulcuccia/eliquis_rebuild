import React from "react";
import styled from "styled-components";
import { breakpoints } from "@/utils/constants/screens";

const Container = styled.div`
  padding: 0 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;

    @media (max-width: ${breakpoints.md}px) {
      height: 100%;
      padding: 0 calc(1.47059vw + 5.29412px);
    }
`;

const ComponentWrapper = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default ComponentWrapper;