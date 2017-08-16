/**
 * Created by majun on 2017/3/31.
 */
import fetch from '~utils/fetch'
import  { auth } from '~constants/api'
// config
export const getConfig = param => {
  return fetch.get(auth.GET_CONFIG, param)
}
