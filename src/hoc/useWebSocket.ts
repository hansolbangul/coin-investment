import React, { useEffect, useRef, useState } from "react";

interface ExportType<T> {
    connect: boolean;
    data: T | null;
    webSocket: WebSocket | null;
}

export function useWebSocket<T>(url: string): ExportType<T> {
    const [socketConnected, setSocketConnected] = useState(false);
    const [data, setData] = useState<T | null>(null);

    const webSocketUrl = url;
    let ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        if (!ws.current) {
            ws.current = new WebSocket(webSocketUrl);
            ws.current.binaryType = 'arraybuffer';
            ws.current.onopen = () => {
                setSocketConnected(true);
            };
            ws.current.onclose = (error) => {
                console.log(error);
            };
            ws.current.onerror = (error) => {
                console.log(error);
            };
            ws.current.onmessage = (evt) => {
                let enc = new TextDecoder('utf-8');
                let arr = new Uint8Array(evt.data);
                const response = JSON.parse(enc.decode(arr));
                setData(() => response);
            };
        }
        return () => {
            ws.current?.close();
        };
    }, [])

    return {
        connect: socketConnected,
        data: data,
        webSocket: ws.current
    }
}