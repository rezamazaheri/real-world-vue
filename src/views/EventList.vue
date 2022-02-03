<template>
<div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
</div>
</template>

<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'
const BASE_URL = 'https://my-json-server.typicode.com/rezamazaheri/real-world-vue/'

const events = ref([])

onMounted( async() => {
    try {
        const { data } = await axios.get(BASE_URL + 'events')
        events.value = data
    }
    catch(error) {
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