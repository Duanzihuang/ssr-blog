import React from 'react'
import { Breadcrumb, Row, Col, Input, Select, Button, DatePicker } from 'antd'
import moment from 'moment'
//引入国际化设置（中文）
import locale from 'antd/lib/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const { Option } = Select
const { TextArea } = Input

function ArticleEdit() {
  const handleChange = () => {}

  const onPublicDateChange = (date, dateString) => {
    console.log(date)
    console.log(dateString)
  }
  const onUpdateDateChange = (date, dateString) => {
    console.log(date)
    console.log(dateString)
  }

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        <Breadcrumb.Item>编辑文章</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          backgroundColor: '#fff',
          borderRadius: 5
        }}
      >
        <Row>
          <Col span={18}>
            <Row>
              <Col span={19}>
                <Input placeholder="请输入博客标题" />
              </Col>
              <Col span={5}>
                <Select
                  defaultValue="1"
                  style={{ width: 120, marginLeft: 15 }}
                  onChange={handleChange}
                >
                  <Option value="1">图文教程</Option>
                  <Option value="2">视频教程</Option>
                </Select>
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={12}>
                <TextArea placeholder="文章内容" rows={25} />
              </Col>
              <Col style={{ marginLeft: 15 }} span={11}>
                <TextArea placeholder="预览内容" disabled rows={25} />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Button>暂存文章</Button>
              <Button type="primary" style={{ marginLeft: 5 }}>
                发布文章
              </Button>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <TextArea placeholder="文章简介" rows={5} />
            </Row>
            <Row style={{ marginTop: 10 }}>
              <TextArea placeholder="文章简介：等待编辑" disabled rows={5} />
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <DatePicker
                  placeholder="发布日期"
                  locale={locale}
                  onChange={onPublicDateChange}
                />
              </Col>
              <Col span={12}>
                <DatePicker
                  style={{ marginLeft: 5 }}
                  placeholder="修改日期"
                  locale={locale}
                  onChange={onUpdateDateChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ArticleEdit
