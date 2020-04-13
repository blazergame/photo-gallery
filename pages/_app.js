import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Title from '../components/Title';
import Home from '../pages/index';
import '../css/tailwind.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return(
            <div>
                <Component {...pageProps} />
            </div>
        )
    }
}

export default MyApp;