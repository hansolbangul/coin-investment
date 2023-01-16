import wrapPromise from './wrapPromise'

function fetchData(url: any) {
    const promise = fetch(url)
        .then((res) => res.json())
        .then((res) => {
            if (Array.isArray(res)) {
                return res;
            } else {
                return res.data;
            }
        })
    return wrapPromise(promise)
}

export default fetchData
