import React from 'react';
import './Button.css';
import { css } from "@emotion/react";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const ButtonStyled = css`
  border-color: red;
`

const Button = (props: ButtonProps) => {
  const {label, onClick} = props;  
  return (
    <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
  );
}

export default Button;