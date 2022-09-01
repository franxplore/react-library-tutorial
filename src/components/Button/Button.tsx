import React from 'react';
// import './Button.css';
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const ButtonStyled = styled.button`
  border-color: red;
  background-color: aqua;
  border-width: 10px;
`

const Button = (props: ButtonProps) => {
  const {label, onClick} = props;  
  return (
    <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
  );
}

export default Button;