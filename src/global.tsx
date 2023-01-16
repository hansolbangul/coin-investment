import React from "react";
import { Global, css } from "@emotion/react";

const style = (theme: any) => css`
    * {
        font-family: 'cookieRun Regular';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${theme.textColor};
        background-color: ${theme.bgColor};
    }
`;

export const GlobalStyle = () => {
    return <Global styles={style} />
}
