/**
 * Created by majun on 2017/3/31.
 */
import fetch from '@Utils/fetch'
import  { auth } from '@Constants/api'
// config
export const getConfig = param => {
  return fetch.get(auth.GET_CONFIG, param)
}
