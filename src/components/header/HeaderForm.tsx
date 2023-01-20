/** @jsxImportSource @emotion/react */
import React from "react";
import { Switch } from "../Switch";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../../atoms";
import { flex_align_center } from "../../global";
import { useTheme } from "@emotion/react";
import { SubmitBtn } from "../button/SubmitBtn";
import { CancelBtn } from "../button/CancelBtn";
import { Flex } from "../components/Direction";
import { Routes } from "../../services/interface";

interface Props extends React.ComponentProps<'div'> {
    children: React.ReactNode;
}

interface BtnProps extends React.ComponentProps<'div'> {
    as: React.ReactNode;
}

export const HeaderForm = ({children}: Props) => {
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);
    const theme = useTheme();

    const toggleSwitch = () => setIsDark(!isDark);

    return (
        <Flex.AlignCenter css={{
            width: '100vw',
            height: '80px',
            fontWeight: 700,
            position: 'fixed',
            padding: '6px 30px',
            borderBottom: `1px solid ${theme.textColor}`
        }}>
            {children}
        </Flex.AlignCenter>
    )
}

HeaderForm.Title = ({label}: {label: string}) => {
    return (
        <>
            {label}
        </>
    )
}

HeaderForm.Nav = ({children}: Props) => {
    return (
        <Flex.AlignCenter css={{
            flex: '1 1 auto',
            padding: '0 10px'
        }}>
            {children}
        </Flex.AlignCenter>
    )
}

HeaderForm.NavItem = ({nav}: {nav: Routes}) => {
    return (
        <div>
            {nav.name}
        </div>
    )
}

HeaderForm.Btn = ({as, ...props}: BtnProps) => {

    return (
        <Flex.AlignCenter {...props} css={{
            width: '300px',
            padding: '0 10px',
            columnGap: '10px'
        }}>
           {as} 
        </Flex.AlignCenter>
    )
}

HeaderForm.Toggle = ({children}: Props) => {

    return (
        <>
            {children}
        </>
    )
}