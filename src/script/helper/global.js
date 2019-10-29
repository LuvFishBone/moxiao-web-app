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
        if ($cpSpinnerMask.css('display') !== 'block') {
          $cpSpinnerMask.show();
        }
        loadingAjaxCount++;
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
