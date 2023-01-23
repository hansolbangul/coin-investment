import { ReactNode } from "react";

export interface Props extends React.ComponentProps<'div'> {
    children: ReactNode;
}

export interface Size {
    [key: string]: string;
}

export interface Routes {
    name: string;
    nav: string
}

export interface coinList {
    market: string;
    korean_name: string;
    english_name: string;

}

export interface ticketList {
    market: string;
    trade_date: string;
    trade_time: string;
    trade_date_kst: string;
    trade_time_kst: string;
    trade_timestamp: number;
    opening_price: number;
    high_price: number;
    low_price: number;
    trade_price: number;
    prev_closing_price: number;
    change: string;
    change_price: number;
    change_rate: number;
    signed_change_price: number;
    signed_change_rate: number;
    trade_volume: number;
    acc_trade_price: number;
    acc_trade_price_24h: number;
    acc_trade_volume: number;
    acc_trade_volume_24h: number;
    highest_52_week_price: number;
    highest_52_week_date: string;
    lowest_52_week_price: number;
    lowest_52_week_date: string;
    timestamp: number;
    korean_name: string;
    english_name: string;
    [key: string]: string | number;
}

export interface LineProps {
    market: string,
    candle_date_time_utc: Date,
    candle_date_time_kst: Date,
    opening_price: number,
    high_price: number,
    low_price: number,
    trade_price: number,
    timestamp: number,
    candle_acc_trade_price: number,
    candle_acc_trade_volume: number,
    unit: number
}