import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/oauth/token',
    method: 'post',
    headers: { 'Authorization': 'Basic cGlnOnBpZw==', 'Content-Type': 'application/x-www-form-urlencoded' },
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      console.log(ret.substring(0, ret.length - 1))
      return ret
    }],
    data
  })
}
