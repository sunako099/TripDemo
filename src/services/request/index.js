import axios from 'axios'
import { BASE_URL,TIMEOUT } from './config'
import useMainStore  from '@/stores/modules/main'

const mainStore=useMainStore()

class SRequest {
    constructor(baseURL,timeout=10000){
        this.instance=axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.request.use(config=>{
            mainStore.isLoading=true
            return config
        },err=>{
            return err  //一般不会发不出请求所以不用写
        })

        this.instance.interceptors.response.use(res=>{
            mainStore.isLoading=false
            return res
        },err=>{
            mainStore.isLoading=false
            return err
        })
    }

    request(config){
        return new Promise((resolve,reject)=>{
            this.instance.request(config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    get(config){
        return this.request({...config,method:"get"})
    }

    post(config){
        return this.request({...config,method:"post"})
    }
}

export default new SRequest(BASE_URL,TIMEOUT)