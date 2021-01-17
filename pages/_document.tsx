import Document, { Html, Head, Main, NextScript } from 'next/document'

import config from '../config.js'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta name='description' content={config.description} />
          <meta name='keywords'    content={config.keywords} />
          <meta name='theme-color' content={config.themeColor} />

          <link rel='canonical' href={config.url} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
