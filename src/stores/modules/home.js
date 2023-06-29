import { defineStore } from "pinia";
import { getHomeHotSuggests,getHomeCategories,getHouselistData} from "@/services";

export const useHomeStore=defineStore("home",{
    state:()=>({
        hotSuggests:[],
        categories:[],
        houselist:[],
        currentPage:1
    }),
    actions:{
        async fetchHotSuggestData(){
            const res=await getHomeHotSuggests()
            this.hotSuggests=res.data
        },
        async fetchCategoriesData(){
            const res=await getHomeCategories()
            this.categories=res.data
        },
        async fetchHouselistData(){
            const res=await getHouselistData(this.currentPage)
            this.houselist.push(...res.data)
            this.currentPage++
        }
    }
})

