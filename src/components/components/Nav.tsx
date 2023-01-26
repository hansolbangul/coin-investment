/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

interface Props extends React.ComponentProps<'a'> {
    to: string;
    children: React.ReactNode;
}

export const Nav = ({ to, children, ...props }: Props) => {
    const theme = useTheme();

    return (
        <Link
            css={{
                color: theme.textColor,
                textDecoration: 'none',
                ...props.style
            }}
            to={to}>
            {children}
        </Link>
    )
}