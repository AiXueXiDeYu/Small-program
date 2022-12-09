import request from './network.js'
// 向外提供了getMultiData 方法
export const getMultiData = () => {
  // 返回一个什么东西，上面有then 方法
  // 解决js 异步的良药
  // return new Promise(() => {
  //   // 立即执行一个耗时的任务
  //   // resolve thenable
  //   wx.request({
  //     url: baseURL + option.url
  //   })
  // })
  return request({
    url:'/home/multidata'
  })
}

export  const getProducts = (type,page) => {
  return request ( {
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}