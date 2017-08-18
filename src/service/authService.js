/**
 * Created by majun on 2017/3/31.
 */

import  { auth } from '~api'
// config
export const getConfig = param => {
  return auth.getConfig(param)
}
