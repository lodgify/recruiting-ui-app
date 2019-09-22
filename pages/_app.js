import React from 'react';
import App, { Container } from 'next/app';

import withReduxStore from '../lib/withReduxStore';
import { Provider } from 'react-redux';

import '../modules/core/global.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    library.add(faReply);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}


export default withReduxStore(MyApp);
