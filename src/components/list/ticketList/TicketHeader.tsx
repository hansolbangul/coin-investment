import React from "react";
import { TicketList } from "./TicketList";

export function TicketHeader({ long }: { long: boolean }) {
    return (
        <TicketList.Column>
            <TicketList.Menu>Name</TicketList.Menu>
            <TicketList.Menu>Price</TicketList.Menu>
            {long && <>
                <TicketList.Menu>52주 최고가</TicketList.Menu>
                <TicketList.Menu>52주 최저가</TicketList.Menu>
            </>}
            <TicketList.Menu>Change 24H</TicketList.Menu>
            <TicketList.Menu>Trade 24H</TicketList.Menu>
            {long && <>
                <TicketList.Menu>Chart</TicketList.Menu>
            </>}
        </TicketList.Column>
    )
}