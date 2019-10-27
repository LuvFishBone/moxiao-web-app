import React,{ Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Footer.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div styleName="footer">
          <div styleName="foot-nav">
            <div styleName="item">
                <div styleName="tit">
                    <span>关于我们</span>
                    <span>+</span>
                </div>
                <ul styleName="list">
                    <li>公司简介</li>
                    <li>企业文化</li>
                    <li>发展历程</li>
                    <li>服务理念</li>
                    <li>招贤纳士</li>
                </ul>
            </div>
            <div styleName="item">
                <div styleName="tit">
                    <span>解决方案</span>
                    <span>+</span>
                </div>
                <ul styleName="list">
                    <li>信贷员版</li>
                    <li>企业版</li>
                </ul>
            </div>
            <div styleName="item">
                <div styleName="tit">
                    <span>合作加盟</span>
                    <span>+</span>
                </div>
                <ul styleName="list">
                    <li>城市合伙人</li>
                </ul>
            </div>
            <div styleName="item">
                <div styleName="tit">
                    <span>联系我们</span>
                    <span>+</span>
                </div>
                <ul styleName="list">
                    <li>联系电话：400-676-0009/027-85500630</li>
                    <li>联系地址：武汉市江岸区福星国际商户大厦2210室</li>
                </ul>
            </div>
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

export default CSSModules(Footer, styles);
