import SRequest from '../request'
import { BASE_URL } from '../request/config'

export function getCityAll(){
    return SRequest.get({
        url:BASE_URL+"/city/all"
    })
}