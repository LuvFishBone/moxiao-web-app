import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [
      ],
    };
  }

  componentWillMount() {
    Utils.updatePageTitle('新闻中心');
  }

  componentDidMount() {
    this.getArticleList();
  }

  getArticleList() {
    // 这里的分页之后再弄
    API.get('/api/article/listSimple', {}, (res) => {
      const { data } = res;
      this.setState({
        articleList: data
      });
    })
  }

  goDetail = (id) => {
    this.props.history.push(`/articleDetail/${id}`);
  }

  render() {
    const { articleList } = this.state; 
    return (
      <PageWrap>
        <div className="p-news">
          <div className="p-banner">
            <img src={require('../../imgs/news/banner.png')} alt="新闻中心" />
          </div>
          <div className="content">
            <Title name="新闻中心" desc="News Center" />
            <div className="cb list">
                {
                  articleList.map((item, index) => (
                    <div key={item.id} className={`item ${index === 0 ? 'top' : ''}`} onClick={() => this.goDetail(item.id)}>
                        {
                          index === 0 ? (<div className="img"><img src={require('../../imgs/news/article-top.png')} width="100%" /></div>) : ''
                        }
                        <div className="cont">
                            <div className="tit">{item.title}</div>
                            <div className="desc">{item.intro}</div>
                            {
                              index === 0 ? (<div className='date'>
                                <span className="icon"></span>
                                <span>{Utils.formatDt(item.createTime).newsDate.md}</span>
                              </div>) : ''
                            }
                        </div>
                    </div>
                  ))
                }
            </div>
            <div className="load-more">点击加载更多</div>
          </div>
        </div>
      </PageWrap>
    );
  }
}

export default News;
