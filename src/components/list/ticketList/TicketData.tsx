import React, { useEffect, useState } from "react";
import { UPBIT_SOCKET } from "../../../api/uri";
import { useWebSocket } from "../../../hoc/useWebSocket";
import { TicketLists } from "../../../services/interface";
import { krwPriceFormat, Percent } from "../../../utils/priceFormat";
import { LineChart } from "../../chart";
import { TicketList } from "./TicketList";

interface WebSocketProps extends TicketLists {
    code: string;
}

interface Props {
    data: TicketLists;
    changeInfo: {
        color: string;
        text: string;
    };
    icon: string;
    long: boolean;
}

export function TicketData({ data, changeInfo, icon, long }: Props) {
    const [isData, setIsData] = useState(data);
    const { connect, data: socketData, webSocket } = useWebSocket<WebSocketProps>(UPBIT_SOCKET);

    useEffect(() => {
        if (socketData) {
            setIsData((item) => ({ ...item, ...socketData }))
        }
    }, [socketData])

    useEffect(() => {
        var msg = [
            {
                "ticket": "TEST",
            },
            {
                "type": "ticker",
                "codes": [data.market]
            }
        ];
        if (connect) {
            webSocket?.send(
                JSON.stringify(msg)
            );
        }
    }, [connect]);

    return (
        <TicketList.Column key={isData.korean_name}>
            <TicketList.Menu>
                <img width={30} src={`https://coinicons-api.vercel.app/api/icon/${icon}`} alt={icon} />
                {isData.korean_name}
            </TicketList.Menu>
            <TicketList.Menu>
                {krwPriceFormat(isData.trade_price)}
            </TicketList.Menu>
            {long && <>
                <TicketList.Menu>
                    {krwPriceFormat(isData.highest_52_week_price)}
                </TicketList.Menu>
                <TicketList.Menu>
                    {krwPriceFormat(isData.lowest_52_week_price)}
                </TicketList.Menu>
            </>}
            <TicketList.Menu
                color={changeInfo.color}
            >
                {changeInfo.text} {Percent(isData.change_rate)}
            </TicketList.Menu>
            <TicketList.Menu>
                {krwPriceFormat(isData.acc_trade_price_24h)}
            </TicketList.Menu>
            {long && <>
                <TicketList.Menu>
                    <LineChart
                        market={isData.market}
                        minutes={1}
                        count={200}
                        color={changeInfo.color}
                    />
                </TicketList.Menu>
            </>}
        </TicketList.Column>
    )

}