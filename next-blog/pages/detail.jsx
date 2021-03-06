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

import axios from '../utils/axios'

// 导入markdown相关
// import ReactMarkdown from 'react-markdown'
// import MarkdownNavbar from 'markdown-navbar'
// import 'markdown-navbar/dist/navbar.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'

const Detail = ({ body }) => {
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  // 设置文章导航
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  const html = marked(body.content)

  return (
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
              <div className="detail-title">{body.title}</div>
              <div className="list-icon center">
                <span>
                  <CalendarOutlined />
                  {body.add_time}
                </span>
                <span>
                  <FolderOutlined />
                  {body.type_name}
                </span>
                <span>
                  <FireOutlined />
                  {body.view_count}
                </span>
              </div>
              <div
                className="detail-content"
                dangerouslySetInnerHTML={{ __html: html }}
              >
                {/* <ReactMarkdown source={markdown} escapeHtml={false} /> */}
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
              {/* <MarkdownNavbar
                className="article-menu"
                source={html}
                ordered={false}
              /> */}
              <div className="toc-list">{tocify && tocify.render()}</div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detail.getInitialProps = async ctx => {
  const result = await axios.get(`article/${ctx.query.id}`)

  return result.data
}

export default Detail
