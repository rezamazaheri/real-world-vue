<template>
    <div class="home" v-if="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
        <div class="pagination">
            <router-link :to="{ name: 'EventList', query: { page: page - 1} }"
                id="page_prev"
                rel="prev"
                v-if="page != 1">
                &#60;Pre Page</router-link>

            <router-link :to="{ name: 'EventList', query: { page: page + 1} }"
                id="page_next"
                rel="next"
                v-if="hasNextPage">
                Next Pag&#62;</router-link> 
        </div>   
    </div>
</template>

<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import { ref, computed, onMounted } from 'vue'
import EventService from '../services/EventService'

let events = ref([{
    "id": 1001,
    "category": "",
    "title": "",
    "description": "",
    "location": "",
    "date": "",
    "time": "",
    "organizer": ""
}])

const props = defineProps({
    page :{
        type: Number,
        required: true
    }
})

const PER_PAGE = 2

onMounted(async() => {
    try {  
        const response = await EventService.getEvents(PER_PAGE, props.page)
        events.value = response.data
        totalEvents.value = Number(response.headers['x-total-count'])
    } catch(error) {
        throw error
    }
})

let totalEvents = ref(0)

const hasNextPage = computed(() => {
    let totalPages = Math.ceil(totalEvents.value / PER_PAGE)
    return props.page < totalPages
})
</script>

<style lang="less">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pagination {
    display: flex;
    width: 50%;
    a {
        flex: 1;
        text-decoration: none;
        color: #2c3e50;
    }
}
#page_prev {
    text-align: left;
}
#page_next {
    text-align: right;
}

</style>