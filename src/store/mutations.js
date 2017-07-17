/**
 * Created by Administrator on 2017/6/8.
 */
import {deepClone, inArray} from 'utils';

function filterAsyncRouters(asyncRoutes, arrPermissionUrl) {
  const accessedRouters = asyncRoutes.filter(route => {
    if (inArray(route.path, arrPermissionUrl)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouters(route.children, arrPermissionUrl);
      }
      return true;
    }
    return false;
  })

  return accessedRouters;
}

export const mutations = {
  setRoutes(state, arrPermissionUrl) {
    var accessedRouters = filterAsyncRouters(state.asyncRoutes, arrPermissionUrl)
    state.routes = deepClone(state.routes.concat(accessedRouters));
    state.asyncRoutes = deepClone(accessedRouters);
  }
}
