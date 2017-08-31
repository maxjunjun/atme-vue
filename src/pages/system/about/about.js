/**
 * Created by majun on 2017/8/18.
 */
import { authService } from '~service'
const logger = new Logger('/system/about/index')
export default {
  name: 'demo',
  data() {
    return {
      number: 20.24444
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUserinfo
    }
  },
  created() {
    // store
    this.$store.dispatch('update_userinfo', { name: 'atme' }).then(() => {
      // this.user = this.$store.state.user.userinfo
    })

    // 请求
    // this.$fetch.get('https://www.baidu.com').then(data => {
    //   logger.info(data)
    // })

    // 服务
    authService.getConfig({ type: '1', url: 'http://aaaa' }).then(data => {
      logger.info(data)
    }).catch(err => {
      logger.info(err)
    })

    // 获取url地址
    const url = this.$store.getters.paths['demo-edit']

    // 日志
    logger.info('demo编辑页面地址为：', url)
  }
}
