import axios from 'axios';
const BASEURL1 = 'http://123.207.32.32:8000/api/v1';
const BASEURL2 = 'http://106.54.54.237:8000/api/v1';

export function request(config, success){
  // 创建实例
  const instance = axios.create({
    baseURL: BASEURL2,
  });

  // 把参数返回给用户，数据有很多种方式返回给用户，这是一种
  // 1、
  // instance(config).then(res => {
  //   success(res.data.data);
  // })

  // 2、这个方式不够优雅
  // return new Promise((resolve, reject) => {
  //   instance(config).then(res => {
  //     resolve(res);
  //   })
  // })

  instance.interceptors.request.use(config => {
    console.log(config);
    return config;
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    console.log('响应拦截');
    return res.data;
  }, err => {

  })

  return instance(config);
}