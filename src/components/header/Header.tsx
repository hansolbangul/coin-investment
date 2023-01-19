/** @jsxImportSource @emotion/react */
import React from "react";
import { Switch } from "../Switch";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../../atoms";
import { flex_align_center } from "../../global";
import styled from "@emotion/styled";

export const Header = () => {
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);

    const toggleSwitch = () => setIsDark(!isDark);

    return (
        <HeaderForm css={{
            ...flex_align_center,
        }}>
            <Switch width={20} onClick={toggleSwitch} value={isDark} />
        </HeaderForm>
    )
}

const HeaderForm = styled.div`
    width: 100vw;
    height: 80px;
    font-weight: 700;
    position: fixed;
    border-bottom: 1px solid ${props => props.theme.textColor};
    padding: 6px 30px;
`