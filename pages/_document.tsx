import Document, { Html, Head, Main, NextScript } from 'next/document'

import config from '../config.js'

class MyDocument extends Document {
  render() {
    const isProduction = process.env.NODE_ENV === 'production';
    const shouldRenderScripts = this.props.unstable_runtimeJS || isProduction;

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
          {shouldRenderScripts ? null : <NextScript />}
        </body>
      </Html>
    )
  }
}

export default MyDocument
