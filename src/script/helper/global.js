/**
 * 全局初始化
 */
import API from './api';
import Utils from './utils';
/* eslint no-undef: "warn" */
/* global $:true */
export default {
  init() {
    // 全局Utils
    window.Utils = Utils;

    // AJAX
    window.API = API;
    let loadingAjaxCount = 0;

    $(document).on('ajaxBeforeSend', (e, xhr, options) => {
      const url = options.url;
      if (url.indexOf('noLoading') === -1) {
        const $cpSpinnerMask = $('.cp-spinner-mask');
        // && url.indexOf('captcha/init') === -1 && url.indexOf('captchaValitate') === -1 极验无需显示loading层
        if ($cpSpinnerMask.css('display') !== 'block' && url.indexOf('captcha/init') === -1 && url.indexOf('captchaValitate') === -1 ) {
          $cpSpinnerMask.show();
        }
        loadingAjaxCount++;
      }
      if (!/^https?:\/\//.test(options.url)) {
        options.url = Utils.getApiPath() + options.url;
        if ($core.Cookies.get(MOBILE)) {
          xhr.setRequestHeader(MOBILE, $core.Cookies.get(MOBILE));
        }
        if ($core.Cookies.get(TOKEN)) {
          xhr.setRequestHeader(TOKEN, $core.Cookies.get(TOKEN));
        }
        xhr.setRequestHeader(PRODUCT_CODE, Utils.getProductCode());
        xhr.setRequestHeader(SOURCE_ID, 2);
        xhr.setRequestHeader(PARTNER_CODE, 'wld');
        // 设置渠道时，需修改此值，暂时为空
        xhr.setRequestHeader(ORIGIN, Utils.getChannel());
      }
    });
    $(document).on('ajaxComplete', () => {
      if (loadingAjaxCount <= 1) {
        $('.cp-spinner-mask').hide();
      }
      loadingAjaxCount--;
    });
  },
};
