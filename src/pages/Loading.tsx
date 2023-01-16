/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const imageSize = {

}


export const Loading = () => {
    const isDark = useRecoilValue(isDarkAtom);
    const [path, setPath] = useState<any>(require('../assets/images/loading_white.gif'));

    useEffect(() => {
        if(isDark) setPath(require('../assets/images/loading_white.gif'))
        else setPath(require('../assets/images/loading_black.gif'))
    }, [isDark])
    
    return(
        <div>
            <img src={path} />
        </div>
    )
}