import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Footer.less';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          status: false,
          title: '关于我们',
          list: [
            { name: '公司简介', path: '/contactUs' },
            { name: '企业文化', path: '/contactUs' },
            { name: '发展历程', path: '/contactUs' },
            { name: '服务理念', path: '/contactUs' },
            { name: '招贤纳士', path: '/jobs' },
          ]
        },
        {
          status: false,
          title: '解决方案',
          list: [
            { name: '信贷员版', path: '/solution' },
            { name: '企业版', path: '/solution' },
          ]
        },
        {
          status: false,
          title: '合作加盟',
          list: [
            { name: '城市合伙人', path: '/joinUs' },
          ]
        },
        {
          status: false,
          title: '联系我们',
          list: [
            { name: '联系电话：400-676-0009/027-85500630', path: '/contactUs' },
            { name: '联系地址：武汉市江岸区福星国际商户大厦2210室', path: '/contactUs' },
          ]
        }
      ]
    }
  }

  clickHandle = (index) => {
    let res = this.state.data;
    res[index].status = !res[index].status;
    this.setState({
      ...this.state.data,
      res,
    });
  }

  render() {
    const { data } = this.state;
    return(
      <div styleName="footer">
          <div styleName="foot-nav">
            {
              data.map((item, index) => (
                <div key={item.title} styleName="item">
                  <div styleName="tit" onClick={() => this.clickHandle(index)}>
                      <span>{item.title}</span>
                      <span>{item.status ? '-' : '+'  }</span>
                  </div>
                  <ul styleName={`list ${item.status ? '' : 'hide'}`}>
                    {
                      item.list.map((litem, index) => (
                        <li key={index}><Link to={litem.path}>{litem.name}</Link></li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
          <div styleName="qr-code">
            <img src={require('../../imgs/footer/wechat.png')} alt="墨小数据微信" />
            <div styleName="txt">关注公众号</div>
          </div>
          <div styleName="copyright">
            Copyright © 2018 墨小科技 . All Rights Reserved.
          </div>
      </div>
    );
  }
}

export default CSSModules(Footer, styles, { allowMultiple: true });
