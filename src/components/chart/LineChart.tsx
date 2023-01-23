import styled from "@emotion/styled";
import React from "react";
import {
    VictoryChart, VictoryLine,
    VictoryTheme
} from 'victory';
import { UPBIT_API } from "../../api/uri";
import { useFetch } from "../../hoc/useFetch";
import { LineProps, ticketList } from "../../services/interface";

interface Props {
    minutes: number;
    market: string;
    count: number;
    color: string;
}

// 'https://api.upbit.com/v1/candles/minutes/30?market=KRW-BTC&count=50'


export const LineChart = ({ market, minutes, count, color }: Props) => {
    const { data } = useFetch<LineProps[]>(UPBIT_API + `/candles/minutes/${minutes}?market=${market}&count=${count}`, [market, 'chart']);

    return (
        <VictoryLine
            width={100}
            height={50}
            padding={0}
            style={{
                data: { stroke: color },
            }}
            data={data.map(({ trade_price }, index) => ({
                x: index + 1,
                y: trade_price
            }))}
        />
    )
}