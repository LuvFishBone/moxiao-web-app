export default {
  apiSetting(type, url, opts) {
    const setting = {
      type,
      url,
      contentType: 'application/json',
      dataType: 'json',
      timeout: 8000,
    };
    $.extend(setting, opts);
    return setting;
  },
  errorHandle(xhr) {

  },
  query(type, url, ...args) {
    let argsSetting = {};
    if (args.length === 1) {
      argsSetting = typeof (args[0]) === 'function' ? { success: args[0] } : { data: args[0] };
    } else if (args.length === 2) {
      if (typeof (args[0]) === 'function') {
        argsSetting = typeof (args[1]) === 'function' ? { success: args[0], error: args[1] } : { success: args[0], ...args[1] };
      } else {
        argsSetting = typeof (args[1]) === 'function' ? { data: args[0], success: args[1] } : { data: args[0], ...args[1] };
      }
    } else if (args.length === 3) {
      if (typeof (args[0]) === 'function') {
        argsSetting = { success: args[0], error: args[1], ...args[2] };
      } else {
        argsSetting = typeof (args[2]) === 'function' ? { data: args[0], success: args[1], error: args[2] } : { data: args[0], success: args[1], ...args[2] };
      }
    }
    if (argsSetting.error === undefined) {
      argsSetting.error = (xhr) => {
        this.errorHandle(xhr);
      };
    }
    const setting = this.apiSetting(type, url, argsSetting);
    if (setting.data && setting.contentType !== 'application/x-www-form-urlencoded') {
      setting.data = type === 'get' ? $.param(setting.data) : JSON.stringify(setting.data);
    }
    return $.ajax(setting);
  },
  get(url, ...args) { // url, [data], success, [error], opt
    return this.query('get', url, ...args);
  },
  post(url, ...args) { // url, [data], success, [error], opt
    return this.query('post', url, ...args);
  },
  put(url, ...args) { // url, [data], success, [error], opt
    return this.query('put', url, ...args);
  },
};
