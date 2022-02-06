
import useAxios from '../utils/http'

export default {
    getEvents: async(perPage: number, page:number) => {
        return await useAxios().get('/events?_limit=' + perPage + '&_page=' + page) 
    },
    getEvent: async(id: number) => {
        return await useAxios().get('/events/' + id)
    }
}