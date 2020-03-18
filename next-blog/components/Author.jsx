import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

import '../public/styles/components/author.css'

const Author = () => (
  <div className="author-div common-box">
    <div>
      <Avatar
        size={100}
        src="https://avatars1.githubusercontent.com/u/15682154?s=460&u=3a840f67691f90eaeeebde0c88a60c64953e19c1&v=4"
      />
    </div>
    <div className="author-introduction">
      专注于前端教学、研发工作，从事IT行业9年，立志于做更好的IT教程给同学们用。
      <Divider>社交账号</Divider>
      <a target="_blank" href="https://github.com/Duanzihuang">
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
      </a>
      <Avatar size={28} icon={<QqOutlined />} className="account" />
      <Avatar size={28} icon={<WechatOutlined />} className="account" />
    </div>
  </div>
)

export default Author
