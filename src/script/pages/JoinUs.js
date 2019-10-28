import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    Utils.updatePageTitle('合作加盟');
  }

  render() {
    return (
      <PageWrap>
        <div className="p-joinUs">
          <div className="p-banner">
            <img src={require('../../imgs/joinUs/banner.png')} alt="墨小数据" />
          </div>
          <div className="content">
            <div className="cb pes-box">
                <Title name="合伙人八大支持" desc="Partner's Eight Support" />
                <div className="list">
                    <div className="item">
                        <img src={require('../../imgs/joinUs/pes-1.png')} width="100%" />
                        <div className="tit">品牌授权</div>
                        <div className="desc">快速提升合伙人地方影响力</div>
                    </div>
                    <div className="item">
                        <img src={require('../../imgs/joinUs/pes-2.png')} width="100%" />
                        <div className="tit">信息系统</div>
                        <div className="desc">提供线上CRM管理系统</div>
                    </div>
                    <div className="item">
                        <img src={require('../../imgs/joinUs/pes-3.png')} width="100%" />
                        <div className="tit">业务培训</div>
                        <div className="desc">专业化的业务开展培训支持</div>
                    </div>
                    <div className="item">
                        <img src={require('../../imgs/joinUs/pes-4.png')} width="100%" />
                        <div className="tit">技术支持</div>
                        <div className="desc">专业团队强大的研发能力</div>
                    </div>
                    <div className="item">
                        <img src={require('../../imgs/joinUs/pes-5.png')} width="100%" />
                        <div className="tit">运营支持</div>
                        <div className="desc">VIP模式一站式售后服务</div>
                    </div>
                    <div className="item">
                        <img src={require('../../imgs/joinUs/pes-6.png')} width="100%" />
                        <div className="tit">产品支持</div>
                        <div className="desc">定期更新持续发布优秀新产品</div>
                    </div>
                    <div className="item">
                        <img src={require('../../imgs/joinUs/pes-7.png')} width="100%" />
                        <div className="tit">资源支持</div>
                        <div className="desc">战略合作提升运营商市场竞争力</div>
                    </div>
                    <div className="item">
                    <img src={require('../../imgs/joinUs/pes-8.png')} width="100%" />
                    <div className="tit">政策支持</div>
                    <div className="desc">完成年度目标享受高额返利</div>
                </div>
                </div>
            </div>
            <div className="cb fhop-box">
                <Title name="合伙人四大亮点" desc="Four Highlights Of Partners" />
                <img src={require('../../imgs/joinUs/fhop.png')} width="80%" alt="合伙人四大亮点" />
            </div>
            <div className="cb saop-box">
                <Title name="合伙人六大优势" desc="Six Advantages Of Partners" />
                <img src={require('../../imgs/joinUs/saop.png')} width="100%" />
                <div className="cont">
                    <ul>
                        <li>1.投资小风险低  利润回报快</li>
                        <li>2.费率透明，产品多样化</li>
                        <li>3.专业一站式服务团队</li>
                    </ul>
                    <ul>
                        <li>4.盈利模式清晰</li>
                        <li>5.独家区域保护</li>
                        <li>6.系统简单易操作</li>
                    </ul>
                </div>
            </div>
            <div className="cb afc-box">
                <Title name="申请合作" desc="Apply For Cooperation" />
                <div className="form">
                    <div className="item">
                        <div className="label">联系人</div>
                        <div><input type="text" placeholder="您的称呼" /></div>
                    </div>
                    <div className="item">
                        <div className="label">联系电话</div>
                        <div><input type="text" placeholder="联系电话" /></div>
                    </div>
                    <div className="item">
                        <div className="label">联系地址</div>
                        <div><input type="text" placeholder="联系地址" /></div>
                    </div>
                    <div className="item">
                        <div className="label">留言</div>
                        <div><textarea type="text" placeholder="写入一些信息……"></textarea></div>
                    </div>
                    <div className="submit">
                        <button>提交</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </PageWrap>
    );
  }
}

export default JoinUs;
