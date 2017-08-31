/**
 * Created by majun on 2017/5/10.
 */

import * as types from './mutations_types.js'

export default {
  update_userinfo: ({
    commit
  }, userinfo) => new Promise(resolve => {
    commit(types.SET_USER_INFO, userinfo)
    resolve()
  }),
  remove_userinfo: ({
    commit
  }) => new Promise(resolve => {
    commit(types.REMOVE_USERINFO)
    resolve()
  })
}
