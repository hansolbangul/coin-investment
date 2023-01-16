import styled from '@emotion/styled';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Home } from '../pages/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary fallback={<div>error</div>}>
                <Suspense fallback={<div>loading</div>}>
                    <Header />
                    <Body>
                        <Routes>
                            <Route path='/' element={<Home />} />
                        </Routes>
                    </Body>
                    <Footer />
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

const Body = styled.div`
    padding-top: 80px;

`