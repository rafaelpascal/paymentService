import axios from 'axios'

const apiClient = axios.create({
    // baseURL: 'http://192.168.1.139:5004/api/v2/auth/user',
    baseURL: 'http://localhost:3000/api/payment/v3/auth',
    withCredentials: false,
    method: 'post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW5UeXBlIjoxLCJmaXJzdE5hbWUiOiJPZ2EiLCJsYXN0TmFtZSI6Ik1ha28iLCJlbWFpbCI6Im9nYW1ha29AYXBwbWFydGdyb3VwLmNvbSIsInBob25lIjoiMDkwODM0NTQ5MzgzIiwicGFzc3dvcmRSZXNldCI6MSwiY3JlYXRlZEJ5IjpudWxsLCJpYXQiOjE2MzM5OTc3MTcsImV4cCI6MTYzNjU4OTcxN30.Lfy7tmLkxnONg2zShoNUGZy6NSs5dXQu6Xxvph2CGuo'      
    },
})

export default {
    get(path){
        return apiClient.get(path)
    },
    post(path,data){
      console.log(data)
      return apiClient.post(path,data)
  },
}