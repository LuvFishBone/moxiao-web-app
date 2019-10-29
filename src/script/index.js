// using an ES6 transpiler
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import '../style/app.less';
import Global from './helper/global';
import App from './app';

Global.init();

const render = (Component) => {
  ReactDOM.render(<AppContainer><Component /></AppContainer>, document.getElementById('app'));
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => { render(App); });
}
