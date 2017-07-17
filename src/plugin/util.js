export default {
  install(Vue, options) {
    //判断字符串是否是JSON格式
    Vue.prototype.isJsonString = function(value) {
      try {
        JSON.parse(value);
      } catch (e) {
        return false;
      }
      return true;
    }

    //判断是否为空
    Vue.prototype.isEmpty = function(value) {
      return value == undefined || value.trim() == '' || value == null;
    }

    Vue.prototype.httpPost = function (url, data, func) {
      Vue.prototype.$http.post(url, data).then((response) => {
        if (response.status != 200 || response.data == null || response.data.result != 0) {
          Vue.prototype.$message(response.data['msg'])
          return ;
        }
        func(response.data)
      })
    }
  }
}
