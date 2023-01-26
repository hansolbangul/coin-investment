/** @jsxImportSource @emotion/react */
import React from "react";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../../atoms";
import { useTheme } from "@emotion/react";
import { Routes } from "../../services/interface";
import { Flex, Nav } from "../components";

interface Props extends React.ComponentProps<'div'> {
    children: React.ReactNode;
}

interface BtnProps extends React.ComponentProps<'div'> {
    as: React.ReactNode;
}

export const HeaderForm = ({ children }: Props) => {
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
            borderBottom: `1px solid ${theme.textColor}`,
            backgroundColor: theme.bgColor,
            zIndex: 10
        }}>
            {children}
        </Flex.AlignCenter>
    )
}

HeaderForm.Title = ({ label }: { label: string }) => {
    return (
        <Nav to="/" style={{
            fontSize: '2.6vmin'
        }}>
            {label}
        </Nav>
    )
}

HeaderForm.Nav = ({ children }: Props) => {
    return (
        <Flex.AlignCenter css={{
            flex: '1 1 auto',
            padding: '0 10px',
            fontSize: '1.8vmin'
        }}>
            {children}
        </Flex.AlignCenter>
    )
}

HeaderForm.NavItem = ({ nav }: { nav: Routes }) => {
    return (
        <Nav to={nav.nav}>
            {nav.name}
        </Nav>
    )
}

HeaderForm.Btn = ({ as, ...props }: BtnProps) => {

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

HeaderForm.Toggle = ({ children }: Props) => {

    return (
        <>
            {children}
        </>
    )
}