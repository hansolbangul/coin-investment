import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { fetchPost } from "../api/api";

export const useFetch = (uri: string, option: object) => {
    const { isLoading, data, refetch } = useQuery<any>(['test'], () =>
        fetchPost(uri),
        { suspense: true, ...option }
    );

    return { isLoading, data, refetch }
}