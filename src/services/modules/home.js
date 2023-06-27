import SRquest from '../request'

export function getHomeHotSuggests(){
    return SRquest.get({
        url:"/home/hotSuggests"
    })
}

export function getHomeCategories(){
    return SRquest.get({
        url:"/home/categories"
    })
}

export function getHouselistData(){
    return SRquest.get({
        url:"/home/houselist",
        params:{        //如果是post请求这里是data:{}还记得吗？
            page:1
        }
    })
}