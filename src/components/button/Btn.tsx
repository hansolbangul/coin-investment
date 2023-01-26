/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import React from "react";
import { Size } from "../../services/interface";

interface Props extends React.ComponentProps<'button'> {
    children: string;
    size?: string;
}

const Btn = {
    width: '100%',
    borderRadius: '12px',
    cursor: 'pointer'
}

const btnSize: Size = {
    small: '10px 20px',
    default: '18px 40px',
    big: '24px 40px'
}

export const SubmitBtn = ({ children, size = 'default', ...props }: Props) => {
    const theme = useTheme();

    return (
        <button css={{
            color: theme.submitTextColor,
            backgroundColor: theme.submitBgColor,
            padding: btnSize[size],
            ...Btn,
            border: 'none'
        }} {...props}>
            {children}
        </button>
    )
}


export const CancelBtn = ({ children, size = 'default', ...props }: Props) => {
    const theme = useTheme();

    return (
        <button css={{
            color: theme.bgColor,
            backgroundColor: theme.textColor,
            padding: btnSize[size],
            ...Btn,
            border: 'none'
        }} {...props}>
            {children}
        </button>
    )
}