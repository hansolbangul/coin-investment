/** @jsxImportSource @emotion/react */
import React from "react";
import { PostBtn } from "../components/button/PostBtn";
import { Direction, Flex } from "../components/components";
import { TicketList } from "../components/list";
import { Accent } from "../global";

export const Home = () => {

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
            <TicketList />
        </Direction>
    )
}