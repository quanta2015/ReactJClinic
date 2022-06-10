var mode = process.env.REACT_APP_MY_VAR
var API_SERVER = 'http://localhost'

if (mode === 'development') {
  API_SERVER = 'http://localhost'
}

if (mode === 'production') {
  API_SERVER = 'http://47.114.124.209'
}

export { API_SERVER }
