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
      return value == undefined || value.trim() == '';
    }
  }
}
