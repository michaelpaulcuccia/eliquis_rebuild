import React from "react";
import styled from "styled-components";
import { breakpoints } from "@/utils/constants/screens";

const Container = styled.div`
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;

    @media (max-width: ${breakpoints.md}px) {
      height: 100%;
    }
`;

const ComponentWrapper = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default ComponentWrapper;