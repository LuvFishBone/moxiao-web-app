import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    Utils.updatePageTitle('首页');
  }

  componentDidMount() {
    var mySwiper = new Swiper ('.home-banner', {
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }

  render() {
    return (
      <PageWrap>
        <div className="p-home">
          <div className="p-banner">
            <div className="home-banner swiper-container">
                <div className="swiper-wrapper">
                    {/* <div className="swiper-slide"><img src={require('../../imgs/home/banner-1.png')} alt="墨小数据" /></div> */}
                    <div className="swiper-slide"><img src={require('../../imgs/home/banner-2.png')} alt="墨小数据" /></div>
                    <div className="swiper-slide"><img src={require('../../imgs/home/banner-3.png')} alt="墨小数据" /></div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="content">
            <Title name="产品优势" desc="Product advantages" />
            <div className="pa-box cb">
              <div className="pa pa-1">
                <div className="tit">聚合支付</div>
                <div className="line"></div>
                <div className="desc">聚合签约、聚合扣款</div>
              </div>
              <div className="pa pa-2">
                <div className="tit">聚合支付</div>
                <div className="line"></div>
                <div className="desc">聚合签约、聚合扣款</div>
              </div>
              <div className="pa pa-3">
                <div className="tit">聚合支付</div>
                <div className="line"></div>
                <div className="desc">聚合签约、聚合扣款</div>
              </div>
            </div>
            <Title name="关于协议支付" desc="About Agreement Payment" />
            <div className="pa-box cb">
              <div className="pa pa-4"></div>
              <div className="aap-tit">第三方支付公司旗下品牌，更安全，更高效！</div>
              <div className="aap-cont"><b>“墨小协议支付”</b>是墨小数据专注于信贷行业而开发
的服务平台，旨在为信贷公司提供方便、快捷的客户身
份识别、签约、协议扣款及移动支付收款等全流程线上
一站式服务，节省业务办理时间与成本，全面提升信贷
公司的客户服务能力。</div>
            </div>
            <Title name="产品优势" desc="Product advantages" />
            <div className="pa-box cb">
              <div className="pa-box-item">
                <div className="item i1">
                  <div className="cont">
                    <span className="icon"></span>
                    <div className="desc">提高扣款审批效率</div>
                  </div>
                </div>
                <div className="item i2">
                  <div className="cont">
                    <span className="icon"></span>
                    <div className="desc">防范欺诈风险</div>
                  </div>
                </div>
              </div>
              <div className="pa-box-item">
                <div className="item i3">
                  <div className="cont">
                    <span className="icon"></span>
                    <div className="desc">降低经营成本</div>
                  </div>
                </div>
                <div className="item i4">
                  <div className="cont">
                    <span className="icon"></span>
                    <div className="desc">数据安全性</div>
                  </div>
                </div>
              </div>
              <div className="pa-box-item">
                <div className="item i5">
                  <div className="cont">
                    <span className="icon"></span>
                    <div className="desc">多重认证具有法律效应</div>
                  </div>
                </div>
                <div className="item i6">
                    <div className="cont">
                      <span className="icon"></span>
                      <div className="desc">操作简单快捷</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </PageWrap>
    );
  }
}

export default Home;
