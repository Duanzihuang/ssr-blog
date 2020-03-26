import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  ApartmentOutlined,
  FileOutlined,
  FormOutlined
} from '@ant-design/icons'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

// 导入子组件
import ArticleEdit from '../Article/Edit/index'
import ArticleList from '../Article/List/index'

const { Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function MyLayout() {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => setCollapsed(collapsed)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['3-1']}
          defaultOpenKeys={['3']}
          mode="inline"
        >
          <Menu.Item key="1">
            <DesktopOutlined />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <ApartmentOutlined />
            <span>权限管理</span>
          </Menu.Item>
          <SubMenu
            key="3"
            title={
              <span>
                <FormOutlined />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="3-1">
              <Link to="/layout/article/add">添加文章</Link>
            </Menu.Item>
            <Menu.Item key="3-2">
              <Link to="/layout/article/list">文章列表</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4">
            <FileOutlined />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Switch>
            <Route path="/layout/article/add" component={ArticleEdit} />
            <Route path="/layout/article/list" component={ArticleList} />
            <Redirect exact from="/layout/" to="/layout/article/add" />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2020 Created by Duanzihuang
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MyLayout
