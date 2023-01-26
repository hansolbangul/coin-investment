/** @jsxImportSource @emotion/react */
import React from "react";
import { Props } from "../../services/interface";

export const Direction = ({ children, ...props }: Props) => {
    return (
        <div {...props} css={{
            ...props.style,
            display: 'flex',
            flexDirection: 'column',
        }}>
            {children}
        </div>
    )
}

Direction.JustifyCenter = ({ children, ...props }: Props) => {
    return (
        <div {...props} css={{
            ...props.style,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            {children}
        </div>
    )
}

Direction.AlignCenter = ({ children, ...props }: Props) => {
    return (
        <div {...props} css={{
            ...props.style,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {children}
        </div>
    )
}

Direction.Center = ({ children, ...props }: Props) => {
    return (
        <div {...props} css={{
            ...props.style,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </div>
    )
}