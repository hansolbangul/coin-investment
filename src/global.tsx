import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

const style = (theme: any) => css`
    * {
        font-family: 'cookieRun Regular';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        color: ${theme.textColor};
        background-color: ${theme.bgColor};
    }
`;

export const Accent = styled.span`
    color: ${props => props.theme.accentColor};
`

export const flex_center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const flex_align_center = {
    display: 'flex',
    alignItems: 'center'
}

export const GlobalStyle = () => {
    return <Global styles={style} />
}
