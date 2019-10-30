import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    Utils.updatePageTitle('产品介绍');
  }

  render() {
    return (
      <PageWrap>
        <div className="p-products">
          <div className="p-banner">
            <img src={require('../../imgs/products/banner.png')} alt="墨小数据" />
          </div>
          <div className="content">
            <div className="pd-box cb">
              <Title name="产品介绍" desc="Product Description" />
              <div className="item">
                <div className="tit">聚合支付</div>
                <div className="line"></div>
                <div className="stit">聚合签约</div>
                <div className="stit1">聚合扣款</div>
                <div className="desc">操作流程最便捷，支持分期单笔费用最优，0.3%每笔，适合绝大部分中小型业务</div>
              </div>
              <div className="item">
                <div className="tit">协议支付</div>
                <div className="line"></div>
                <div className="stit">协议签约</div>
                <div className="stit1">协议扣款</div>
                <div className="desc">未来主流的业务形态，客户签约授权过程前置，剩余流程与合众支付、大额支付保持一致</div>
              </div>
              {/* <div className="item">
                <div className="tit">大额支付</div>
                <div className="line"></div>
                <div className="stit">大额签约</div>
                <div className="stit1">大额扣款</div>
                <div className="desc">针对大额款项划扣，一次性一笔最高划扣25万按笔数收费，小钱解决大问题</div>
              </div> */}
            </div>
            <div className="sm">
              <Title name="解决传统模式六大痛点" desc="Solution mode" />
              <div className="banner">
                <img src={require('../../imgs/products/sm.png')} alt="解决传统模式六大痛点" />
              </div>
            </div>
          </div>
        </div>
      </PageWrap>
    );
  }
}

export default Products;
