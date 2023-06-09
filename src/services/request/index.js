import axios from 'axios'
import { BASE_URL,TIMEOUT } from './config'

class SRequest {
    constructor(baseURL,timeout=10000){
        this.instance=axios.create({
            baseURL,
            timeout
        })
    }

    request(config){
        return new Promise((resolve,reject)=>{
            axios.request(config).then(res=>{
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