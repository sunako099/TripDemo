import SRquest from '../request'

export function getHomeHotSuggests(){
    return SRquest.get({
        url:"/home/hotSuggests"
    })
}