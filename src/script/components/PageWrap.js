import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './PageWrap.less';
import Header from './Header';
import Menu from './Menu';
import Brands from './Brands';
import Footer from './Footer';

class PageWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
    }
  }

  menuCallback = (res) => {
    this.setState({ showHeader: res });
  }

  componentDidMount() {
    document.getElementById('menu-list').addEventListener('touchmove', (e) => { e.preventDefault(); });
  }

  render() {
    const { showHeader } = this.state;
    return(
      <div styleName="page" style={{ backgroundColor: this.props.bgColor }}>
        <Header show={showHeader} />
        <Menu callback={this.menuCallback} />
        { this.props.children }
        <Brands />
        <Footer />
      </div>
    );
  }
}

PageWrap.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

export default CSSModules(PageWrap, styles);
