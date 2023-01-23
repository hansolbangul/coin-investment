/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../../hoc/useFetch";
import { useOpen } from "../../../hoc/useOpen";
import { ticketList } from "../../../services/interface";
import { TouchDropdown } from "./TouchDropdown";

interface HeaderProps {
    [key: string]: string;
}

interface Props {
    label?: string;
    trigger: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
    // options: string[];
    body: ticketList[];
    head: HeaderProps
}

export function TouchSelect ({label, trigger, value, onChange, body, head}: Props) {

    return (
        <TouchDropdown label={label} value={value} >
            <TouchDropdown.Header>
                {Object.keys(head).map((item) => {
                    return <div key={item}>{item}</div>
                })}
            </TouchDropdown.Header>
            <TouchDropdown.Body>
                {body.map((item, index) => (
                    <TouchDropdown.Menu key={index} value={item}>
                        {Object.values(head).map((_item) => {
                            return <div key={index + _item}>
                                {item[_item]}
                            </div>
                        })}
                    </TouchDropdown.Menu>
                ))} 
            </TouchDropdown.Body>
        </TouchDropdown>
    )
}