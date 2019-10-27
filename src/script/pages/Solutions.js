import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class Solutions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    Utils.updatePageTitle('解决方案');
  }

  render() {
    return (
      <PageWrap>
        <div className="p-solutions">
          <div className="p-banner">
            <img src={require('../../imgs/solutions/banner.png')} alt="墨小数据" />
          </div>
          <div className="content">
            <div className="cb ts-box">
                <Title name="解决方案" desc="The Solution" />
                <div className="ts-img"></div>
                <div className="ts-txt">墨小致力于为各大金融机构以及信贷中介提供创新
一站式整体解决方案，利用数据、技术和信贷经纪管理
提升金融服务效率。为你提供最全面的业务服务支持，
我们正在研发助贷上面的更多产品如大数据和征信查询
让商户和客户同时拥有更好更舒服的服务体验。</div>
            </div>
            <div className="cb op-box">
                <Title name="操作流程" desc="Operating Procedures" />
                <div className="item">
                    <img src={require('../../imgs/solutions/op.png')} width="100%" alt="协议支付操作流程" />
                    <div className="cont">
                        <div className="tit">协议支付操作流程</div>
                        <div className="line"></div>
                        <div className="desc">企业版</div>
                        <div className="detail">查看详情>></div>
                    </div>
                </div>
                <div className="item">
                    <img src={require('../../imgs/solutions/op-1.png')} width="100%" alt="协议支付操作流程" />
                    <div className="cont">
                        <div className="tit">协议支付操作流程</div>
                        <div className="line"></div>
                        <div className="desc">信贷员版</div>
                        <div className="detail">查看详情>></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </PageWrap>
    );
  }
}

export default Solutions;
