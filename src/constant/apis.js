var mode = process.env.REACT_APP_MY_VAR
var API_SERVER = 'http://localhost'

if (mode === 'development') {
  // API_SERVER = 'http://ans-hz.cn:8080'
  API_SERVER = 'http://47.114.124.209'
}

if (mode === 'production') {
  // API_SERVER = 'http://ans-hz.cn:8080'
  API_SERVER = 'http://47.114.124.209'
}

export { API_SERVER }
