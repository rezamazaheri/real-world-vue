<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService'
import { useRoute } from 'vue-router'

const event = ref({
    "id": 1001,
    "category": "",
    "title": "",
    "description": "",
    "location": "",
    "date": "",
    "time": "",
    "organizer": ""
})
const route = useRoute()

onMounted(async() => { 
    try {
        const { data } = await EventService.getEvent(Number(route.params.id))
        event.value = data
    } catch(error) {
        throw error
    }
})
</script>

<style lang="less">
</style>