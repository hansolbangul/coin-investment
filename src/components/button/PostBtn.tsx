/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes, useTheme } from "@emotion/react";
import { Props } from "../../services/interface";
import { Circle } from "../circles/Circle";
import { Flex } from "../components/Direction";
import { ImArrowUpRight2 } from "react-icons/im";

interface divProps extends Props {
    children: string;
    onClick: () => void;
    ani?: boolean;
}

const floating = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
`

export const PostBtn = ({children, onClick, ani = false, ...props}: divProps) => {
    const theme = useTheme();
    const animation = ani ?  {
        animation: `${floating} 2s ease infinite`,
        animationDuration: '2s'
    } : {}

    return (
        <Flex.AlignCenter onClick={onClick} css={{
            color: theme.textColor,
            backgroundColor: theme.bgColor,
            border: `1px solid ${theme.textColor}`,
            padding: '8px',
            borderRadius: '40px',
            columnGap: '8px',
            justifyContent: 'space-between',
            cursor: 'pointer',
            ...animation
        }} {...props}>
            <div css={{
                flex: '1 1 auto',
                textAlign: 'center'
            }}>
                {children}
            </div>
            <Circle size="small">
                <ImArrowUpRight2 />
            </Circle>
        </Flex.AlignCenter>
    )
}