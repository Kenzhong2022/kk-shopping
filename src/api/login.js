import request from '@/utils/request'

// 按需导出
// 1.获取图形验证码
export const getPic = () => {
  return request.get('/captcha/image')
}

// 2.获取短信验证码请求
export const msgCode = (captchaCode, mobile, captchaKey) => {
  // 记得写return
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode, // 用户填写的 图形验证码
      captchaKey, // 图形验证码自带的 key
      mobile// 用户填写的电话号码
    }
  })
}

// 3.登录请求
export const codeLogin = (mobile, smsCode) => {
  console.log(mobile, smsCode)
  return request.post('/passport/login', {
    form: {
      isParty: false, // 是否存在第三方用户信息
      partyData: {}, // 三方登录信息，默认为：{}
      mobile, // 用户填写的电话号码
      smsCode// 短信验证码
    }
  })
}
