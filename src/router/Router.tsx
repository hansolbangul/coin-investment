import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Test } from '../components/study/Home';
import { Home } from '../pages/Home';
import { Loading } from '../pages/Loading';

export const Router = () => {
    const {status} = useRecoilValue(isModalAtom);
    return (
        <BrowserRouter>
            <ErrorBoundary fallback={<div>error</div>}>
                {/* <Suspense fallback={<Loading></Loading>}> */}
                <Suspense fallback={<div>loading</div>}>
                    <Body>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/test' element={< Test/>} />
                        </Routes>
                    </Body>
                    <Footer />
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    );
}
