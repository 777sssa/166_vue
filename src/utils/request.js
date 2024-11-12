import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://10.29.169.93:8180',
  timeout: 1000000
})

instance.interceptors.request.use(function(config) {
  return config
}, function(error) {
  return Promise.reject(error)
})


instance.interceptors.response.use(function(response) {
  const res = response.data
  return res
}, function(error) {
  return Promise.reject(error)
})

export default instance