/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import React from "react";
import { Size } from "../../services/interface";
import { Btn } from "./buttonCss/css";

interface Props extends React.ComponentProps<'button'> {
    children: string;
    size?: string;
}

const btnSize: Size = {
    default: '18px 40px',
    big: '24px 40px'
}

export const SubmitBtn = ({children, size = 'default', ...props}: Props) => {
    const theme = useTheme();

    return (
        <button css={{
            color: theme.submitTextColor,
            backgroundColor: theme.submitBgColor,
            padding: btnSize[size],
            ...Btn
        }} {...props}>
            {children}
        </button>
    )
}