// function createResource(url: any) {
//     let status = 'pending';
//     let result: any;

//     const promise = fetch(url)
//         // .then((data) => data.json())
//         .then((r) => {
//             status = 'success';
//             console.log(r)
//             result = r;
//         })
//         .catch((e) => {
//             status = 'error';
//             result = e;
//         });

//     console.log(status);

//     return {
//         read() {
//             if (status === 'pending') {
//                 throw promise;
//             } else if (status === 'error') {
//                 throw result;
//             } else if (status === 'success') {
//                 return result;
//             }
//         },
//         status
//     };
// }

// export default createResource

function wrapPromise(promise: any) {
    let status = 'pending'
    let response: any

    const suspender = promise.then(
        (res: any) => {
            status = 'success'
            response = res
        },
        (err: any) => {
            status = 'error'
            response = err
        },
    )

    // const read = () => {
    //     switch (status) {
    //         case 'pending':
    //             throw suspender
    //         case 'error':
    //             throw response
    //         default:
    //             return response
    //     }
    // }

    // return { read }
    return {
        read() {
            switch (status) {
                case 'pending':
                    throw suspender
                case 'error':
                    throw response
                default:
                    return response
            }
        },
    }
}

export default wrapPromise

