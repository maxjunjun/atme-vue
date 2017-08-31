/**
 * Created by majun on 2017/5/10.
 */

import * as types from './mutations_types'


export default {
  [types.SET_USER_INFO](state, userinfo) {
    state.userinfo = userinfo || {}
  },
  [types.REMOVE_USERINFO](state) {
    state.userinfo = {}
  }
}
