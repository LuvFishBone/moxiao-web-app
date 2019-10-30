import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        partners: []
    };
  }

  componentWillMount() {
    Utils.updatePageTitle('联系我们');
  }

  componentDidMount() {
    this.getPartners(() => {
        var partnerSwiper = new Swiper ('#partners-box', {
            pagination: {
              el: '#partners-box .swiper-pagination',
            },
        })
    });

    // document.body.scrollTop = 0;
    // 百度地图API功能
    function G(id) {
        return document.getElementById(id);
    }
    var map = new BMap.Map("l-map");
    map.enableScrollWheelZoom();   	//启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    	//启用地图惯性拖拽，默认禁用
    var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
    });
    var msearch = '武汉市江岸区福星国际商户大厦2210室';
    local.search(msearch);  //百度地图关键字检索 默认加载一次
  }

  getPartners(cb) {
    API.get('/api/partners/list', {}, (res) => {
        const { data } = res;
        this.setState({
            partners: data
        }, () => cb());
      })
  }

  render() {
    return (
      <PageWrap>
        <div className="p-contactus">
          <div className="p-banner">
            <img src={require('../../imgs/contactUs/banner.png')} alt="墨小数据" />
          </div>
          <div className="content">
            <div className="cb ab-box">
                <Title name="关于我们" desc="About Us" />
                <img src={require('../../imgs/contactUs/gsjj.png')} width="100%" alt="公司简介" />
                <h1>公司简介</h1>
                <p>　　上海墨小数据科技有限公司是一家金融信息服务商，
                    2018年创于上海，致力于为各大金融机构以及信贷中介
                    提供创新、一站式整体解决方案，利用数据、技术和信
                    贷经纪管理提升金融服务效率。墨小数据以优质的底层
                    渠道、场景化定制服务，从而降低合作商的运营、管理
                    成本；通过大数据提升市场透明度，为合作商提供细分、
                    专业、精准的评级方案，打造资金和资产之间的高速通
                    道；多种金融服务工具以及渠道管理等方面实现线上操
                    作与管理。
                </p>
                <h1>企业文化</h1>
                <p>　　我们相信年轻的力量，多元，专业，实践，深耕，
                    梦想，我们拥抱变化，我们探索未知，专业，聚焦金融；
                    职能，引领变革；年轻，定义未来，墨小，让金融变简
                    单。诚信，专业，共赢，我们与生俱来的技术基因，不
                    断的催促着我用技术让金融变简单。我一直在思考，如
                    何更好的为您服务，我创造用户价值，理解您的需求，
                    并尽我所能成就您，和您一起找到更好的答案，我们聚
                    焦金融行业，帮助您更轻松地开展金融业务，不断提升
                    金融体系效率，探索前沿技术，助力金融机构数字化转
                    型。 
                </p>
                <img src={require('../../imgs/contactUs/qywh.png')} width="100%" alt="企业文化" />
            </div>
            <div className="cb dp-box">
                <Title name="发展历程" desc="Development Path" />
                <dl>
                    <dt><span>01</span>公司历程</dt>
                    <dd>● 2018年11月，墨小数据科技公司正式成立；</dd>
                    <dd>● 2019年3月，墨小数据APP上线，正式实现移动端进件系统与后台客户管理系统实时联动；</dd>
                    <dd>● 大数据、第三方征信功能正在持续开发中。</dd>
                </dl>
                <dl>
                    <dt><span>02</span>未来计划</dt>
                    <dd>● 后台可查看多个时段的数据分析；</dd>
                    <dd>● 节省客户的二次开发成本；</dd>
                    <dd>● 大数据、第三方征询查询审核贷款资质，更多功能正在持续开发中；</dd>
                </dl>
            </div>
            <div className="sp-box">
                <Title name="服务理念" desc="Service Philosophy" />
                <div className="item">
                    <img src={require('../../imgs/contactUs/sp.png')} width="100%" alt="市场第一" />
                    <div className="cont">
                        <h1>市场第一</h1>
                        <p>市场是通联赖以生存的基础，市场决定通联的命
                            运，把市场需求作为经营的出发点和落脚点，在
                            市场竞争中不断提升公司核心竞争力，不断创造
                            优良业绩。
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={require('../../imgs/contactUs/khdy.png')} width="100%" alt="市场第一" />
                    <div className="cont">
                        <h1>客户第一</h1>
                        <p>客户的高度认同和充分信赖是公司价值和发展
                            的源泉。坚持以客户为中心，从客户角度出发，
                            深耕行业，用专业服务为客户创造价值，实现
                            公司与客户双赢。
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={require('../../imgs/contactUs/fwdy.png')} width="100%" alt="市场第一" />
                    <div className="cont">
                        <h1>服务第一</h1>
                        <p>提供最适合的服务，不仅仅是一种服务质量的体
                            现， 更是一种思考方式，一种行为模式，一种下
                            意识的行为。
                        </p>
                    </div>
                </div>
            </div>
            <div className="cus-box">
                <Title name="联系我们" desc="Contact Us" />
                <div id="l-map" className="map-area"></div>
                <div className="cb cont">
                    <div className="item">联系电话：400-676-0009</div>
                    <div className="item">客服热线：027-85500630</div>
                    <div className="item">邮政编码：201400</div>
                    <div className="item">官方微信：墨小数据</div>
                    <div className="item">公司官网：www.moxiaoshuju.com</div>
                    <div className="item">公司地址：武汉市江岸区福星国际商户大厦2210室</div>
                </div>
            </div>
            <div className="cb mpc-box">
                <Title name="主要合作公司" desc="Major Partner Company" />
                <div className="list">
                    <div id="partners-box" className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.partners.map((item, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="item">
                                            <div className="tit">{item.name}</div>
                                            <div className="li">地址：{item.address}</div>
                                            <div className="li">电话：{item.tel}</div>
                                            <div className="li">邮箱：{item.email}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </PageWrap>
    );
  }
}

export default ContactUs;
