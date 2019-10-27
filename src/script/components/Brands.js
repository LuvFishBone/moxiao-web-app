import React from 'react';
import CSSModules from 'react-css-modules';
import Title from './Title';
import styles from './Brands.less';

const Brands = () => {
  return (
    <div styleName="brand">
        <Title name="合作品牌" desc="Cooperation Brand" />
        <div styleName="cont">
            <div styleName="item i1"></div>
            <div styleName="item i2"></div>
            <div styleName="item i3"></div>
            <div styleName="item i4"></div>
            <div styleName="item i5"></div>
        </div>
    </div>
  );
};


export default CSSModules(Brands, styles, { allowMultiple: true });
