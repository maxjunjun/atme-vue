/**
 * Created by hanzhongao on 2017/8/14.
 */
import { fetch } from '~utils'

export const getConfig = param => {
  return fetch.post('/project/add', param)
}
