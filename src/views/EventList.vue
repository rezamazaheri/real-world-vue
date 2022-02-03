<template>
<div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
</div>
</template>

<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import { ref } from 'vue'

const events = ref(null)
</script>

<style lang="less">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>