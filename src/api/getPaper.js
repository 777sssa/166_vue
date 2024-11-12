import request from '@/utils/request'

// 获取作者信息
export const getPaper = (name) => {
  return request.get('paper/findByPaperName', {
    params: {
      name
    }
  })
}