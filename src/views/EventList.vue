<template>
<div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
</div>
</template>

<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService'

const events = ref([])

onMounted( async() => {
    try {
        const { data } = await EventService.getEventList()
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