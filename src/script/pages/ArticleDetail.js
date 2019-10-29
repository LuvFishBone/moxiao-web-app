import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {}
    };
  }

  componentWillMount() {
    Utils.updatePageTitle('文章详情');
  }

  componentDidMount() {
    this.getArticleById();
  }

  getArticleById() {
    const id = this.props.match.params.id;
    API.get(`/api/article/queryById/${id}`, {}, (res) => {
      const { data } = res;
      this.setState({
        detail: data[0]
      });
    })
  }

  render() {
    const { detail } = this.state;
    const datatime = Utils.formatDt(detail.createTime).newsDate.year + '/' + Utils.formatDt(detail.createTime).newsDate.md;
    return (
      <PageWrap>
        <div className="p-article-detail">
            <h1 className="tit">{detail.title}</h1>
            <div className="info">时间：{datatime} 浏览量：{detail.views || 230}</div>
            <div className="cb contents">
                <div dangerouslySetInnerHTML={{__html: detail.content}} />
            </div>
        </div>
      </PageWrap>
    );
  }
}

export default ArticleDetail;
