import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Header.less';

class Header extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.show);
        this.state = {
            show: false
        };
    }

    componentWillReceiveProps(nextProp) {
        this.setState({
            show: nextProp.show
        });
    }

    render() {
        return (
            <div styleName={classNames('header', !this.state.show ? 'show': 'hide')}>
                <div styleName="left">客服电话: 400-676-0009</div>
                <div styleName="right">
                    <a styleName="item" href="javascript:void(0)">登录</a>
                    <a styleName="item" href="javascript:void(0)">注册</a>
                </div>
            </div>
          );
    }
}

Header.propTypes = {
    show: PropTypes.bool
};

export default CSSModules(Header, styles, { allowMultiple: true });
