/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { ticketList } from "../../../services/interface";
import { krwPriceFormat, Percent } from "../../../utils/priceFormat";
import { LineChart } from "../../chart/LineChart";
import { Flex } from "../../components/Direction";

interface Div {
    data: ticketList[];
}

interface Props {
    children: React.ReactNode;
}

interface TableProps extends React.ComponentProps<'table'> {
    children: React.ReactNode;
}

export function TicketList({ data }: Div) {
    const theme = useTheme();
    return (

        <TicketList.Table style={{
            backgroundColor: theme.ticketListBgColor,
        }}>
            <TicketList.Header>
                <TicketList.Column>
                    <TicketList.Menu>Name</TicketList.Menu>
                    <TicketList.Menu>Price</TicketList.Menu>
                    <TicketList.Menu>52주 최고가</TicketList.Menu>
                    <TicketList.Menu>52주 최저가</TicketList.Menu>
                    <TicketList.Menu>Change 24H</TicketList.Menu>
                    <TicketList.Menu>Trade 24H</TicketList.Menu>
                    <TicketList.Menu>Chart</TicketList.Menu>
                </TicketList.Column>
            </TicketList.Header>
            <TicketList.Body>
                {/* {data.map(({ market, korean_name, trade_price, change, change_rate }) => { */}
                {data.map((item) => {
                    const icon = item.market.split('-')[1].toLowerCase()
                    const changeInfo = item.change === 'RISE' ? {
                        color: '#c43a31',
                        text: '+'
                    } : {
                        color: '#1361C4',
                        text: '-'
                    }
                    return (
                        <TicketList.Column key={item.korean_name}>
                            <TicketList.Menu>
                                <img width={30} src={`https://coinicons-api.vercel.app/api/icon/${icon}`} alt={icon} />
                                {item.korean_name}
                            </TicketList.Menu>
                            <TicketList.Menu>
                                {krwPriceFormat(item.trade_price)}
                            </TicketList.Menu>
                            <TicketList.Menu>
                                {krwPriceFormat(item.highest_52_week_price)}
                            </TicketList.Menu>
                            <TicketList.Menu>
                                {krwPriceFormat(item.lowest_52_week_price)}
                            </TicketList.Menu>
                            <TicketList.Menu
                                color={changeInfo.color}
                            >
                                {changeInfo.text} {Percent(item.change_rate)}
                            </TicketList.Menu>
                            <TicketList.Menu>
                                {krwPriceFormat(item.acc_trade_price_24h)}
                            </TicketList.Menu>
                            <TicketList.Menu>
                                <LineChart
                                    market={item.market}
                                    minutes={1}
                                    count={200}
                                    color={changeInfo.color}
                                />
                            </TicketList.Menu>
                        </TicketList.Column>
                    )
                })}
            </TicketList.Body>
        </TicketList.Table>
    )
}

TicketList.Table = ({ children, ...props }: TableProps) => {
    return (
        <table css={{
            ...props.style,
            padding: '20px',
            borderRadius: '24px',
            flex: '1 1 auto'
        }}>
            {children}
        </table>
    )
}

TicketList.Header = ({ children }: Props) => {

    return (
        <thead>
            {children}
        </thead>
    )
}

TicketList.Body = ({ children }: Props) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

TicketList.Column = ({ children }: Props) => {

    return (
        <tr >
            {children}
        </tr>
    )
}

TicketList.Menu = ({ children, color }: { children: React.ReactNode; color?: string; }) => {
    return (
        <td >
            <MenuData css={{
                width: '100%',
                padding: '10px',
                columnGap: '8px',
                height: '80px',
                color: color
            }}>
                {children}
            </MenuData>
        </td>
    )
}

const MenuData = styled(Flex.AlignCenter)`
    .VictoryContainer{
        width: auto !important;
    }
`