/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { UPBIT_API } from "../../../api/uri";
import { useFetch } from "../../../hoc/useFetch";
import { coinList, TicketLists } from "../../../services/interface";
import { Flex } from "../../components";
import { TicketData } from "./TicketData";
import { TicketHeader } from "./TicketHeader";

interface Props {
    children: React.ReactNode;
}

interface TableProps extends React.ComponentProps<'table'> {
    children: React.ReactNode;
}

export function TicketList({ long = true }: { long?: boolean }) {
    const theme = useTheme();
    const [isData, setIsData] = useState<TicketLists[]>([]);
    const coinList = useFetch<coinList[]>(UPBIT_API + '/market/all?isDetails=false', 'coinList').data.filter(item => item.market.substring(0, 3) === 'KRW');
    const { data: tickerList } = useFetch<TicketLists[]>(UPBIT_API + `/ticker?markets=${coinList.slice(0, 20).map(item => item.market).join(', ')}`, 'ticker');

    useEffect(() => {
        setIsData(() => tickerList.map((item, index) => ({ ...item, ...coinList[index] })));
    }, [])
    return (

        <TicketList.Table style={{
            backgroundColor: theme.ticketListBgColor,
        }}>
            <TicketList.Header>
                <TicketHeader long={long} />
            </TicketList.Header>
            <TicketList.Body>
                {isData.map((item) => {
                    const icon = item.market.split('-')[1].toLowerCase()
                    const changeInfo = item.change === 'RISE' ? {
                        color: '#c43a31',
                        text: '+'
                    } : {
                        color: '#1361C4',
                        text: '-'
                    }
                    return (
                        <TicketData long={long} key={item.market} data={item} changeInfo={changeInfo} icon={icon} />
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