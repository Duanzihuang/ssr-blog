import Head from 'next/head'
import { Button } from 'antd'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Button type="primary">我是按钮</Button>
  </div>
)

export default Home
