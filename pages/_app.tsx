import Head from 'next/head'

import config from '../config.js'
import '../assets/stylesheets/styles.scss'
import Layout from '../layouts'

export default function HrysdOrg({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>{ config.title }</title>
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
