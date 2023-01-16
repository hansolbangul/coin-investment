/** @jsxImportSource @emotion/react */
import React from "react";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../../atoms";
import { Circle } from "../circles/Circle";

export const Footer = () => {
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);

    const changeDarkMode = () => {
        setIsDark(!isDark);
    }

    return (
        <Circle onClick={() => changeDarkMode()} style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer'
        }}>
            O
        </Circle>
    )
}