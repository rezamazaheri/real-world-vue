
import useAxios from '../utils/http'

export default {
    getEvents: async() => {
        return await useAxios().get('/events') 
    },
    getEvent: async(id: number) => {
        return await useAxios().get('/events/' + id)
    }
}