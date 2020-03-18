import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'

// 导入子组件
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

// 导入样式
import '../public/styles/pages/detail.css'

// 导入markdown相关
import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

let markdown =
  '# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n' +
  '`console.log(111)` \n\n' +
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n' +
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '``` var a=11; ```'

const Detail = () => (
  <div className="container">
    <Head>
      <title>详情</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Row className="common-main" type="flex" justify="center">
      <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        <div>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">图文教程</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">xxx</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detail-title">
              React实战视频教程-段子黄blog开发(更新第10集)
            </div>
            <div className="list-icon center">
              <span>
                <CalendarOutlined />
                2019-06-28
              </span>
              <span>
                <FolderOutlined />
                图文教程
              </span>
              <span>
                <FireOutlined />
                6600
              </span>
            </div>
            <div className="detail-content">
              <ReactMarkdown source={markdown} escapeHtml={false} />
            </div>
          </div>
        </div>
      </Col>
      <Col className="common-right" xs={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
        <Affix offsetTop={5}>
          <div className="detail-nav common-box">
            <div className="nav-title">文章目录</div>
            <MarkdownNavbar
              className="article-menu"
              source={markdown}
              ordered={false}
            />
          </div>
        </Affix>
      </Col>
    </Row>
    <Footer />
  </div>
)

export default Detail
