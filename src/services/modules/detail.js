import SRequest from "../request"

export function getDetailInfos(houseId){
    return SRequest.get({
        url:"/detail/infos",
        params:{
            houseId
        }
    })
}