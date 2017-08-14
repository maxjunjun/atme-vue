/**
 * Created by majun on 2017/3/31.
 */
import fetch from '@Utils/fetch'

// config
export const getConfig = param => {
  return fetch.get('/auth/config', param)
}
