import React, { Suspense, useEffect, useState } from "react";
import { useFetch } from "../hoc/useFetch";
// import { useModal } from "../hoc/useModal";
// import { useFetch } from "../hoc/Fetch";

// const refetch = fetchData(
//     'https://run.mocky.io/v3/8a33e687-bc2f-41ea-b23d-3bc2fb452ead'
// )

export const Home = () => {
    const { data, refetch } = useFetch('https://run.mocky.io/v3/8a33e687-bc2f-41ea-b23d-3bc2fb452ead', {
        enabled: false
    })

    return (
        <Suspense fallback={<div>loading</div>}>
            <div>
                <button onClick={() => refetch()}>버튼</button>
                {/* <pre>{JSON.stringify(data)}</pre> */}
                <pre>{JSON.stringify(data)}</pre>
                {/* { userDetails?.name } */}
            </div>
        </Suspense>
    )
}