import Link from 'next/link'
import Script from 'next/script'
import '../styles/bootstrap.min.css'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></Script>

<Script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin/>

<Script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin/>
  </Layout>
    </>
  )
}
