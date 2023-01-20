/** @jsxImportSource @emotion/react */
import React from "react";
import { Switch } from "../Switch";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../../atoms";
import { flex_align_center } from "../../global";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { SubmitBtn } from "../button/SubmitBtn";
import { CancelBtn } from "../button/CancelBtn";
import { Flex } from "../components/Direction";
import { HeaderForm } from "./HeaderForm";
import { Routes } from "../../services/interface";
import { useDark } from "../../hoc/useDark";

interface HeaderProps {
    title: string,
    navs: Routes[]
}

export const Header = () => {

    return (
        <HeaderSet
            title="코인모의투자"
            navs={[{name: 'main', nav: '/main'}]}
        />
    )
}

const HeaderSet = ({title, navs}: HeaderProps) => {
    const [isDark, change] = useDark();

    return (
        <HeaderForm>
            <HeaderForm.Title label={title} />
            <HeaderForm.Nav>
                {navs.map((item, index) => <HeaderForm.NavItem nav={item} key={index}/>)}
            </HeaderForm.Nav>
            <HeaderForm.Btn as={
                <>
                    <CancelBtn>Sign In</CancelBtn>
                    <SubmitBtn>Sign UP</SubmitBtn>
                </>
            }/>
            <HeaderForm.Toggle>
                <Switch width={20} onClick={change} value={isDark} />
            </HeaderForm.Toggle>
        </HeaderForm>
    )
}