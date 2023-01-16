import '@emotion/react'
// import { DefaultTheme } from './services/interface';


// type ThemeTpye = typeof DefaultTheme

declare module '@emotion/react' {
    export interface Theme {
        bgColor: string;
        textColor: string;
        accentColor: string;
        cardBgColor: string
    }
}