import React, { Component } from 'react';
import PageWrap from '../components/PageWrap';
import Title from '../components/Title';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    Utils.updatePageTitle('加入我们');
  }

  componentDidMount() {
    // 数据应该动态读取，然后使用react 事件比较合理
    var jobLi = $('#jobs-box').find('li');
    jobLi.click(function() {
      var jdb = $(this).find('.job-detail-box');
      var arrow = $(this).find('.arrow');
      jdb.toggleClass('none');
      arrow.toggleClass('down');
    });
  }

  render() {
    return (
      <PageWrap>
        <div className="p-jobs">
          <div className="p-banner">
            <img src={require('../../imgs/jobs/banner.png')} alt="加入我们" />
          </div>
          <div className="content">
            <div className="cb jobs">
                <Title name="加入我们" desc="Join Us" />
                <div className="job-list">
                  <div className="title">
                    <div>招聘岗位</div>
                    <div>工作地点</div>
                    <div>招聘人数</div>
                  </div>
                  <ul className="jobs-box" id="jobs-box">
                    <li>
                      <div className="job-tit">
                        <div className="job-name"><span className="name">UI/UX 设计</span><span className="arrow down"></span></div>
                        <div>武汉</div>
                        <div>2</div>
                      </div>
                      <div className="job-detail-box none">
                          <div className="job-detail">
                              <div className="item">
                                  <div className="tit">
                                      岗位职责:
                                  </div>
                                  <div className="desc">
                                      <p>1.熟悉office,excel,ppt,visio,XMind 等软件；</p>
                                      <p>2.能熟练使用ps,flash等软件；</p>
                                      <p>3.熟悉UI前端布局（HTML5+CSS3）者更佳；</p>
                                      <p>4.负责公司产品UI界面设计及优化(包括Web、移动端)，公司产品宣传的视频制作，</p>
                                      <p>以及一些office文档和流程图制作；</p>
                                      <p>5.配合产品经理进行页面布局和效果的整体实现，跟进开发保障UI还原效果，保证最</p>
                                      <p>终输出质量.</p>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="tit">
                                      岗位要求:
                                  </div>
                                  <div className="desc">
                                      <p>1.专科及以上学历，美术相关专业毕业优先，优秀的视觉设计能力，扎实的美术基础；</p>
                                      <p>2.1-2年以上UI产品设计经验，有交互经验者优先；</p>
                                      <p>3.注重细节设计，像素眼之称，严格要求最终交付效果；</p>
                                      <p>4.与项目成员能良好沟通，有优秀团队合作精神；</p>
                                      <p>5.请在简历中附真实设计作品或链接，应聘时请提供作品。</p>
                                  </div>
                              </div>
                            </div>
                      </div>
                    </li>
                    <li>
                        <div className="job-tit">
                          <div className="job-name"><span className="name">UI/UX 设计</span><span className="arrow down"></span></div>
                          <div>武汉</div>
                          <div>2</div>
                        </div>
                        <div className="job-detail-box none">
                            <div className="job-detail">
                                <div className="item">
                                    <div className="tit">
                                        岗位职责:
                                    </div>
                                    <div className="desc">
                                        <p>1.熟悉office,excel,ppt,visio,XMind 等软件；</p>
                                        <p>2.能熟练使用ps,flash等软件；</p>
                                        <p>3.熟悉UI前端布局（HTML5+CSS3）者更佳；</p>
                                        <p>4.负责公司产品UI界面设计及优化(包括Web、移动端)，公司产品宣传的视频制作，</p>
                                        <p>以及一些office文档和流程图制作；</p>
                                        <p>5.配合产品经理进行页面布局和效果的整体实现，跟进开发保障UI还原效果，保证最</p>
                                        <p>终输出质量.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="tit">
                                        岗位要求:
                                    </div>
                                    <div className="desc">
                                        <p>1.专科及以上学历，美术相关专业毕业优先，优秀的视觉设计能力，扎实的美术基础；</p>
                                        <p>2.1-2年以上UI产品设计经验，有交互经验者优先；</p>
                                        <p>3.注重细节设计，像素眼之称，严格要求最终交付效果；</p>
                                        <p>4.与项目成员能良好沟通，有优秀团队合作精神；</p>
                                        <p>5.请在简历中附真实设计作品或链接，应聘时请提供作品。</p>
                                    </div>
                                </div>
                              </div>
                        </div>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </PageWrap>
    );
  }
}

export default Jobs;
