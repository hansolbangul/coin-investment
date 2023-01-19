/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import React, { ReactNode } from "react";
import { flex_center } from "../../global";
import { Props, Size } from "../../services/interface";

interface CircleProps extends Props {
    size?: string
}

const btnSize: Size = {
    small: '30px',
    default: '50px',
}

export const Circle = ({ children, size = 'default', ...props }: CircleProps) => {
    const theme = useTheme();

    return (
        <div {...props} css={{
            backgroundColor: theme.submitBgColor,
            width: btnSize[size],
            height: btnSize[size],
            borderRadius: '50%',
            cursor: 'pointer',
            ...flex_center,
        }}>
            {children}
        </div>
    )
}