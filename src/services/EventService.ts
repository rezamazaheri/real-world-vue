
import useAxios from '../utils/http'

export default {
    getEventList: async() => {
        return await useAxios().get('/events') 
    }
}