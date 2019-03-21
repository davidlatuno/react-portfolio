import App, { Container } from 'next/app';
import Head from 'next/head';
import Favicon from 'react-favicon';

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>David Latuno</title>
        </Head>
        <Favicon url="../static/pics/letterD.ico" />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MainApp;
