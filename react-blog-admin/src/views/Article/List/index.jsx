import React from 'react'
import { Breadcrumb, Table, Button } from 'antd'

function ArticleList() {
  const columns = [
    {
      title: '标题',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: '类别',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '发布时间',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: '浏览量',
      key: 'address',
      dataIndex: 'address'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="primary">修 改</Button>
          <Button type="danger" style={{ marginLeft: 5 }}>
            删 除
          </Button>
        </span>
      )
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      time: '2020-03-26',
      age: 32,
      address: '11'
    },
    {
      key: '2',
      name: 'Jim Green',
      time: '2020-03-26',
      age: 42,
      address: '22'
    },
    {
      key: '3',
      name: 'Joe Black',
      time: '2020-03-26',
      age: 32,
      address: '33'
    }
  ]

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        <Breadcrumb.Item>文章列表</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          backgroundColor: '#fff',
          borderRadius: 5
        }}
      >
        <Table bordered columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default ArticleList
