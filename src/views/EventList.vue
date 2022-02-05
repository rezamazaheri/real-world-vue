<template>
    <div class="home" v-if="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    </div>
</template>

<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService'

const events = ref([{
    "id": 1001,
    "category": "Animal Welfare",
    "title": "Cat Adoption Day",
    "description": "Find your new feline friend at this event.",
    "location": "Meow Town",
    "date": "January 28, 2022",
    "time": "12:00",
    "organizer": "Kat Laydee"
}])

onMounted(async() => {
    try {
        const { data } = await EventService.getEvents()
        events.value = data
    } catch(error) {
        throw error
    }
})
</script>

<style lang="less">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>