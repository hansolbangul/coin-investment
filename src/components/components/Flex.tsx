/** @jsxImportSource @emotion/react */
import React from "react";
import { Props } from "../../services/interface";

export const Flex = ({ children, ...props }: Props) => {
    return (
        <div {...props} css={{
            ...props.style,
            display: 'flex',
        }}>
            {children}
        </div>
    )
}

Flex.JustifyCenter = ({ children, ...props }: Props) => {
    return (
        <div {...props} css={{
            ...props.style,
            display: 'flex',
            justifyContent: 'center',
        }}>
            {children}
        </div>
    )
}

Flex.AlignCenter = ({ children, ...props }: Props) => {
    return (
        <div {...props} css={{
            ...props.style,
            display: 'flex',
            alignItems: 'center'
        }}>
            {children}
        </div>
    )
}

Flex.Center = ({ children, ...props }: Props) => {
    return (
        <div {...props} css={{
            ...props.style,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </div>
    )
}