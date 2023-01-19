import React, { useState } from "react";

export const useOpen = () => {
    const [data, setData] = useState(false);

    const open = () => {
        setData(() => true);
    }

    const close = () => {
        setData(() => false);
    }

    const change = () => {
        setData(item => !item);
    }

    return {
        data, open, close, change
    }
}