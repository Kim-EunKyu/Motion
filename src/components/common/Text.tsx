import React from "react";
import styled, { css } from "styled-components";

interface TextProps {
  size?: number;
  color?: string;
}

const TextBlock = styled.div<TextProps>`
  ${(props) =>
    props.size
      ? css`
          font-size: ${props.size}px;
        `
      : css`
          font-size: 11px;
        `}
  ${(props) =>
    props.color
      ? css`
          color: ${props.color};
        `
      : css`
          color: black;
        `}
`;

const Text: React.FC<TextProps> = ({ size, color, children }) => {
  return (
    <TextBlock size={size} color={color}>
      {children}
    </TextBlock>
  );
};

export default Text;
