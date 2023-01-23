import { useEffect, useMemo, useState } from "react";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useQuery } from "react-query";
import { fetchPost } from "../api/api";

export function useFetch<F>(uri: string, cache: string | string[], option: object = {}): {
    isLoading: boolean,
    data: F,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
} {
    const { isLoading, data, refetch } = useQuery<any>(cache, () =>
        fetchPost(uri),
        { suspense: true, refetchOnWindowFocus: false, ...option }
    );

    return { isLoading, data, refetch }
}