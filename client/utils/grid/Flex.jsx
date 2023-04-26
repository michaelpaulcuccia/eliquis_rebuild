import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "initial")};
  flex-direction: ${({ direction }) => (direction ? direction : "initial")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "initial")};
  align-content: ${({ alignContent }) => (alignContent ? alignContent : "initial")};
  align-items: ${({ alignItems}) => (alignItems? alignItems: "initial")};
`;

export default function Flex({
  className,
  children,
  justify,
  direction,
  wrap,
  alignContent,
  alignItems
}) {
  return (
    <StyledFlex
      className={className}
      justify={justify}
      direction={direction}
      wrap={wrap}
      alignContent={alignContent}
      alignItems={alignItems}
    >
      {children}
    </StyledFlex>
  );
}