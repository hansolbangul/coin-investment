/** @jsxImportSource @emotion/react */
import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { flex_center } from "../theme";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

interface SwitchProps {
    onClick: () => void;
    value: boolean;
    style?: React.CSSProperties;
    width: number;
}

export const Switch = ({ onClick, value, width }: SwitchProps) => {

    const sizeSetting = (size: number) => {
        return ({
            form: {
                width: size * 2 + 'px',
                height: size + (size / 4) + 'px',
                display: 'flex',
                justifyContent: 'flex-start',
                borderRadius: '50px',
                padding: size / 8 + 'px',
                cursor: 'pointer'
            },
            btn: {
                width: size + 'px',
                height: size + 'px',
                borderRadius: '40px',
                ...flex_center
            }
        })
    }

    return (
        <SwitchForm css={{
            ...sizeSetting(width).form
        }} data-isOn={value} onClick={onClick}>
            <SwitchBtn css={{
                ...sizeSetting(width).btn
            }} layout transition={spring}>
                {value ? <MdOutlineDarkMode /> : <MdLightMode />}
            </SwitchBtn>
        </SwitchForm>
    )
}

const SwitchForm = styled.div`
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    &[data-isOn='true'] {
        justify-content: flex-end;
    }
`

const SwitchBtn = styled(motion.div)`
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
`