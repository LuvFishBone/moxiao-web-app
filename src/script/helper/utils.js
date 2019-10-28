const Utils = {

  updatePageTitle(title) {
    document.title = title;
  },

  isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  },

  formatMobile(mobile) {
    const reg = /^(\d{3})\d{4}(\d{4})$/;
    return mobile.replace(reg, '$1****$2');
  },

  formatDate(date, fmt) {
    if (Object.prototype.toString.call(date) === '[object Date]' && isNaN(date.getTime())) {
      // 无效的Date对象
      return '';
    }
    const time = {
      'y+': date.getFullYear(),
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    for (const key in time) {
      if (new RegExp(`(${key})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (time[key]) : ((`00${time[key]}`).substr((`${time[key]}`).length)));
      }
    }
    return fmt;
  },

  hideLoading() {
    $('.cp-spinner-mask').hide();
  },
};

export default Utils;
