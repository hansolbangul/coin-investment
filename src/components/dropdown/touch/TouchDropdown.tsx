/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useOpen } from "../../../hoc/useOpen";
import { Props } from "../../../services/interface";
import { Direction, Flex } from "../../components";

interface DropProps {
    label?: string;
    value: string;
    children: React.ReactNode;
}

export const TouchDropdown = ({ label, value, children }: DropProps) => {

    return (
        <Direction
            css={{
                padding: '10px',
                backgroundColor: 'gray',
            }}
        >
            <div>{label}</div>
            {children}
        </Direction>
    )
}

TouchDropdown.Header = ({ children }: Props) => {

    return (
        <Flex>
            {children}
        </Flex>
    )
}


TouchDropdown.Body = ({ children }: Props) => {

    return (
        <Direction>
            {children}
        </Direction>
    )
}


TouchDropdown.Trigger = ({ as, onClick }: { as: React.ReactNode; onClick: () => void }) => {
    return (
        <div onClick={onClick}>
            {as}
        </div>
    )
}

TouchDropdown.Menu = ({ children, value }: { children: React.ReactNode; value: any }) => {
    return (
        <Flex>
            {children}
        </Flex>
    )
}

TouchDropdown.View = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}