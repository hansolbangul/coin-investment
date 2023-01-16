/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { Props } from "../../services/interface";
import { flex_center } from "../../theme";

export const Circle = ({ children, ...props }: Props) => {
    console.log(children, props);
    return (
        <div onClick={props.onClick} css={{
            minWidth: '50px',
            minHeight: '50px',
            borderRadius: '50%',
            ...flex_center,
            ...props.style
        }}>
            {children}
        </div>
    )
}