import React from 'react';
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

const StyledButton = styled.button`
  border-color: red;
  background-color: aqua;
  border-width: 10px;
`

const Button = (props: ButtonProps) => {
  const {label, onClick} = props;  
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  );
}

export default Button;