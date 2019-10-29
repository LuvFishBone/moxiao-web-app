import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './Title.less';

const Title = ({ name, desc}) => {
  return (
    <div styleName="title-box">
        <div styleName="tit">{name}</div>
        <div styleName="desc">
            <span>{desc}</span>
        </div>
    </div>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CSSModules(Title, styles);
