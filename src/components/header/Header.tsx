/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { flex_align_center } from "../../theme";
import { Switch } from "../Switch";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../../atoms";

export const Header = () => {
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);

    const toggleSwitch = () => setIsDark(!isDark);

    return (
        <div css={{
            ...flex_align_center,
            width: '100vw',
            height: '80px',
            fontWeight: 700,
            position: 'fixed'
        }}>
            <Switch width={20} onClick={toggleSwitch} value={isDark} />
        </div>
    )
}

