
import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

function FirstPost() {
    return (
    <Layout>
    <Head>
        <title>First Post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
        <Link href="/">
            <a>bACK HOME</a>
        </Link>
    </h2>
    </Layout>
    )}

export default FirstPost
