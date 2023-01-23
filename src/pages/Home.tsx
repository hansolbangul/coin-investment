/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { UPBIT_API } from "../api/uri";
import { PostBtn } from "../components/button/PostBtn";
import { LineChart } from "../components/chart/LineChart";
import { Flex } from "../components/components/Direction";
import { Direction } from "../components/components/Flex";
import { TouchSelect } from "../components/dropdown/touch/TouchSelect";
import { TicketList } from "../components/list/ticketList/TicketList";
import { Accent } from "../global";
import { useFetch } from "../hoc/useFetch";
import { coinList, ticketList } from "../services/interface";

export const Home = () => {
    const [isData, setIsData] = useState<ticketList[]>([]);
    const coinList = useFetch<coinList[]>(UPBIT_API + '/market/all?isDetails=false', 'coinList').data.filter(item => item.market.substring(0, 3) === 'KRW');
    const { data: tickerList } = useFetch<ticketList[]>(UPBIT_API + `/ticker?markets=${coinList.slice(0, 20).map(item => item.market).join(', ')}`, 'ticker');

    useEffect(() => {
        console.log(tickerList)
        setIsData(() => tickerList.map((item, index) => ({ ...item, ...coinList[index] })));
    }, [])

    return (
        <Direction css={{
            padding: '20px'
        }}>
            <Flex.AlignCenter css={{
                justifyContent: 'space-around',
                padding: '7vmin 4vmin',
            }}>
                <Direction>
                    <div css={{
                        fontSize: '8vmin',
                        fontFamily: 'cookieRun Bold',
                    }}>
                        <Accent>'대중'</Accent>을 따라하는 것은<br />
                        평균으로 <Accent>'후퇴'</Accent>하겠다는 말이다.<br />
                        <Accent>'나만'</Accent>의 투자를 해보자!
                    </div>
                </Direction>
                <Direction>
                    <Direction.Center css={{
                        fontSize: '3vmin'
                    }}>
                        <span>지금 당장</span>
                        <span><Accent>'모의투자'</Accent>하러 가기</span>
                        <PostBtn
                            ani
                            css={{
                                marginTop: '10px'
                            }}
                            onClick={() => console.log('')}>투자하러 가기</PostBtn>
                    </Direction.Center>
                </Direction>
            </Flex.AlignCenter>

            <Flex.AlignCenter>
                <TicketList
                    data={isData}
                />
                {/* <LineChart /> */}
            </Flex.AlignCenter>
        </Direction>
    )
}