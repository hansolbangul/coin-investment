/** @jsxImportSource @emotion/react */
import React from "react";
import { Direction } from "../components/Flex";

interface DropProps {
    label?: string;
    value: string;
    children: React.ReactNode;
}

export const Dropdown = ({label, value, children}: DropProps ) => {

    return (
        <Direction
            css={{
                padding: '10px',
            }}
        >
            <div>{label}</div>
            {children}
        </Direction>
    )
}

Dropdown.Trigger = ({as, onClick}: {as: React.ReactNode; onClick: () => void}) => {
    return (
        <div onClick={onClick}>
            {as}
        </div>
    )
}

Dropdown.Menu = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Dropdown.Item = ({children, onClick}: {
    children: string, onClick: (value: string) => void
}) => {
    return (
        <div css={{
            cursor: 'pointer'
        }} onClick={() => onClick(children)}>
            {children}
        </div>
    )
}