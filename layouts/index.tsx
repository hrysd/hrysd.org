import Head from 'next/head';
import config from '../config.js'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>{ config.title }</title>
        <meta name='description' content={config.description} />
        <meta name='keywords'    content={config.keywords} />
        <meta name='theme-color' content={config.themeColor} />

        <link rel='canonical' href={config.url} />
      </Head>

      {children}

      <footer>
        (C) 2012 ~ @hrysd.
      </footer>
    </>
  );
}
