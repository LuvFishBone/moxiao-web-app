import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class Solution extends Component {
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
            <div className="cb cp-box">
              <Title name="城市合伙人" desc="City Partner" />
              <div className="item">
                <img src={require('../../imgs/solutions/cp-1.png')} width="100%" alt="资源" />
                <div className="tit">资源</div>
                <div className="desc">协议代扣与金融产品强绑定，发挥虹吸效应，汇聚当地金融资源</div>
              </div>
              <div className="item">
                <img src={require('../../imgs/solutions/cp-2.png')} width="100%" alt="资源" />
                <div className="tit">人脉</div>
                <div className="desc">协议代扣强适配、高粘性的特征，滚雪球般吸收行业人脉</div>
              </div>
              <div className="item">
                <img src={require('../../imgs/solutions/cp-3.png')} width="100%" alt="资源" />
                <div className="tit">收益</div>
                <div className="desc">超大额度让利，让您在当地展业有更丰厚的资金支持，收获更多收益</div>
              </div>
              <div className="item">
                <img src={require('../../imgs/solutions/cp-4.png')} width="100%" alt="资源" />
                <div className="tit">活动联结</div>
                <div className="desc">基于协议代扣线上、线下活动联结，增强客户黏性，提升市场渗透率和转化率</div>
              </div>
              <div className="item">
                <img src={require('../../imgs/solutions/cp-5.png')} width="100%" alt="资源" />
                <div className="tit">合作机构</div>
                <div className="desc">与当地大小渠道商、贷款平台、理财FA、大型物业、行政/生活费用缴纳平台等合作</div>
              </div>
              <div className="item">
                <img src={require('../../imgs/solutions/cp-6.png')} width="100%" alt="资源" />
                <div className="tit">交流平台</div>
                <div className="desc">打造资方、渠道、第三方、第四方合作交流平台</div>
              </div>
            </div>
          </div>
        </div>
      </PageWrap>
    );
  }
}

export default Solution;
