import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './Menu.less';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        menuStatus: false,
    };
  }

  componentDidMount() {
      
  }

  toggleMenu = () => {
      this.setState({
        menuStatus:!this.state.menuStatus
      }, () => {
          this.props.callback(this.state.menuStatus);
      });
  }

  render() {
    const { menuStatus } = this.state;
    return (
        <div styleName="header-menu">
            <div styleName="menu" onClick={this.toggleMenu}>
                <div styleName="logo"></div>
                <div styleName="btn">
                    <div styleName={`x ${!menuStatus ? '' : 'collapse rotate30 rotate45'}`}></div>
                    <div styleName={`y ${!menuStatus ? 'disb' : 'disn'}`}></div>
                    <div styleName={`z ${!menuStatus ? '' : 'collapse rotate150 rotate135'}`}></div>
                </div>
            </div>
            <div id="menu-list" styleName={`menu-list ${!menuStatus ? '' : 'on'}`}>
                <ul styleName={!menuStatus ? '' : 'open'}>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/products">产品介绍</Link></li>
                    <li><Link to="/solution">解决方案</Link></li>
                    <li><Link to="/news">新闻中心</Link></li>
                    <li><Link to="/joinUs">合作加盟</Link></li>
                    <li><Link to="/contactUs">联系我们</Link></li>
                </ul>
            </div>
        </div>
    );
  }
}

Menu.propTypes = {
    callback: PropTypes.func
};

export default CSSModules(Menu, styles, { allowMultiple: true });
