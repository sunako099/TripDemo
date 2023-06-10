import { getCityAll } from "@/services";
import { defineStore } from "pinia";

export const useCityStore=defineStore("city",{
    state:()=>({
        allCities:{},
        currentCity:{cityName:"北京"}
    }),
    actions:{
        async fetchAllCitiesData(){
            const res=await getCityAll()
            this.allCities=res.data
        }
    }
})

