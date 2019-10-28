import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    Utils.updatePageTitle('新闻中心');
  }

  componentDidMount() {

  }

  render() {
    return (
      <PageWrap>
        <div className="p-news">
          <div className="p-banner">
            <img src={require('../../imgs/news/banner.png')} alt="新闻中心" />
          </div>
          <div className="content">
            <Title name="新闻中心" desc="News Center" />
            <div className="cb list">
                <div className="item top">
                    <div className="img">
                        <img src={require('../../imgs/news/article-top.png')} width="100%" />
                    </div>
                    <div className="cont">
                        <div className="tit">坚守合规经验，履职反洗钱义务</div>
                        <div className="desc">合规经营是企业践行社会责任最基本的内容。墨小支付合规经营是企业践行社会责任最基本的内容。墨小支付落实中国人民银行、行业监管机构及行业协会的落实中国人民银行、行业监管机构及行业协会的</div>
                        <div className="date">
                            <span className="icon"></span>
                            <span>09-03</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="cont">
                        <div className="tit">坚守合规经验，履职反洗钱义务</div>
                        <div className="desc">合规经营是企业践行社会责任最基本的内容。墨小支付落实中国人民银行、行业监管机构及行业协会合规经营是企业践行社会责任最基本的内容。墨小支付落实中国人民银行、行业监管机构及行业协会的合规经营是企业践行社会责任最基本的内容。墨小支付落实中国人民银行、行业监管机构及行业协会的合规经营是企业践行社会责任最基本的内容。墨小支付落实中国人民银行、行业监管机构及行业协会的</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </PageWrap>
    );
  }
}

export default News;
