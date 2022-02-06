<template>
    <div class="home" v-if="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
        <router-link :to="{ name: 'EventList', query: { page: page - 1} }"
            rel="prev"
            v-if="page != 1">
            Pre Page</router-link>

        <router-link :to="{ name: 'EventList', query: { page: page + 1} }"
            rel="next"
            v-if="hasNextPage">
            Next Page</router-link>    
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
</style>