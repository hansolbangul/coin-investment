import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isModalAtom } from '../atoms';
import { Modal } from '../components/modals/Modals';
import { Home } from '../pages/Home';
import { Loading } from '../pages/Loading';

export const Router = () => {
    const {status} = useRecoilValue(isModalAtom);
    return (
        <BrowserRouter>
            <ErrorBoundary fallback={<div>error</div>}>
                {/* <Suspense fallback={<Loading></Loading>}> */}
                <Suspense fallback={<div>loading</div>}>
                    {status && <Modal />}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        {/* <Route element={<NotFound />} /> */}
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    );
}
