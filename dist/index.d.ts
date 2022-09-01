/// <reference types="react" />
interface ButtonProps {
    label: string;
    onClick: () => void;
}
declare const Button: (props: ButtonProps) => JSX.Element;

export { Button };
