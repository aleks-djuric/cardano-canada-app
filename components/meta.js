import Head from 'next/head'

export default function Meta() {
  return (
    <>
      <Head>
        <title>Cardano Canada</title>
        <meta name="description" content="Your source for all things Cardano."/>

        // From https://favicon.io/favicon-converter/
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>

        // From https://tailwindui.com/documentation
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
    </>
  )
}
