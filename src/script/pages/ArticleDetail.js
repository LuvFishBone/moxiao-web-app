import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    Utils.updatePageTitle('文章详情');
  }

  componentDidMount() {

  }

  render() {
    return (
      <PageWrap>
        <div className="p-article-detail">
            <h1 className="tit">坚守合规经营，履职反洗钱义务</h1>
            <div className="info">时间：2019-09-03 浏览量：7307</div>
            <div className="cb contents">
                这里是文章内容
            </div>
        </div>
      </PageWrap>
    );
  }
}

export default ArticleDetail;
