import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './Toast.less';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
        msg: '',
    };
  }

  componentDidMount() {
      
  }

  render() {
    const { msg } = this.state;
    return (
        <div styleName="tips">
            <div styleName="content">{msg}</div>
        </div>
    );
  }
}

Toast.defaultProps = {
    seconds: 3000
}

Toast.propTypes = {
    msg: PropTypes.string,
    seconds: PropTypes.number
};

export default CSSModules(Toast, styles, { allowMultiple: true });
