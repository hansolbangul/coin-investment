import React from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { fetchPost } from "../api/api";
import { isDarkAtom } from "../atoms";

export const useDark = () => {
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);

    const change = () => {
        setIsDark(() => !isDark)
    }

    return [isDark, change]
}