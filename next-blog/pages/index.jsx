import Head from 'next/head'
import { Row, Col, List } from 'antd'
import Header from '../components/Header'
import { useState } from 'react'
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import axios from '../utils/axios'
import Link from 'next/link'

// 导入样式
import '../public/styles/pages/index.css'

// 导入子组件
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

const Home = ({ body }) => {
  const [list] = useState(body)

  return (
    <div className="container">
      <Head>
        <title>段子黄的博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新日志</div>}
            dataSource={list}
            itemLayout="vertical"
            renderItem={item => (
              <List.Item>
                <Link href={{ pathname: 'detail', query: { id: item.id } }}>
                  <a>
                    <div className="list-title">{item.title}</div>
                  </a>
                </Link>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined />
                    {item.add_time}
                  </span>
                  <span>
                    <FolderOutlined />
                    {item.type_name}
                  </span>
                  <span>
                    <FireOutlined />
                    {item.view_count}
                  </span>
                </div>
                <div className="list-context">{item.introduction}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="common-right" xs={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await axios.get('articles')

  return res.data
}

export default Home
