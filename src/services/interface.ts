import { ReactNode } from "react";

export interface Props extends React.ComponentProps<'div'> {
    children: ReactNode;
}

export interface Size {
    [key: string]: string;
}