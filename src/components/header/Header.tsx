/** @jsxImportSource @emotion/react */
import React from "react";
import { Switch } from "../Switch";
import { HeaderForm } from "./HeaderForm";
import { Routes } from "../../services/interface";
import { useDark } from "../../hoc/useDark";
import { CancelBtn, SubmitBtn } from "../button";

interface HeaderProps {
    title: string,
    navs: Routes[]
}

export const Header = () => {

    return (
        <HeaderSet
            title="코인 모의투자"
            navs={[{ name: '투자하기', nav: '/trade' }]}
        />
    )
}

const HeaderSet = ({ title, navs }: HeaderProps) => {
    const [isDark, change] = useDark();

    return (
        <HeaderForm>
            <HeaderForm.Title label={title} />
            <HeaderForm.Nav>
                {navs.map((item, index) => <HeaderForm.NavItem nav={item} key={index} />)}
            </HeaderForm.Nav>
            <HeaderForm.Btn as={
                <>
                    <CancelBtn>Sign In</CancelBtn>
                    <SubmitBtn>Sign UP</SubmitBtn>
                </>
            } />
            <HeaderForm.Toggle>
                <Switch width={20} onClick={change} value={isDark} />
            </HeaderForm.Toggle>
        </HeaderForm>
    )
}