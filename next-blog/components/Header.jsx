import { useState, useEffect } from 'react'
import '../public/styles/components/header.css'
import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
  MessageOutlined
} from '@ant-design/icons'
import axios from '../utils/axios'
import Router from 'next/router'

function Header() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('types')

      setTypes(result.data.body)
    }

    fetchData()
  }, [])

  //跳转到列表页
  const handleClick = e => {
    if (e.key === '0') {
      Router.push('/index')
    } else {
      Router.push(`/list?id=${e.key}`)
    }
  }

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10}>
          <span className="header-logo">段子黄</span>
          <span className="header-title">专注于前端教学、研发</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <HomeOutlined />
              首页
            </Menu.Item>
            {types.map(item => {
              return (
                <Menu.Item key={item.id}>
                  {item.icon === 'youtube' && <YoutubeOutlined />}
                  {item.icon === 'smile' && <SmileOutlined />}
                  {item.icon === 'message' && <MessageOutlined />}
                  {item.type_name}
                </Menu.Item>
              )
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
