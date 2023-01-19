/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useOpen } from "../../hoc/useOpen";
import { Dropdown } from "./Dropdown";

export interface Props {
    label?: string;
    trigger: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
    options: string[];
}

export const Select = ({label, trigger, value, onChange, options}: Props) => {
    const {data, change} = useOpen();

    return (
        <Dropdown label={label} value={value} >
            <Dropdown.Trigger onClick={change} as={trigger}/>
            {data && <Dropdown.Menu>
                {options.map((option, index) => (
                    <Dropdown.Item onClick={onChange} key={index}>{option}</Dropdown.Item>
                ))}
            </Dropdown.Menu>}
        </Dropdown>
    )
}