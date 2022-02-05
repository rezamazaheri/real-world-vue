<!--
====================================
Building Block of the App
====================================
-->

<template>
    <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: event?.id } }">
        <div class="event-card" v-if="event">
            <span>@ {{ event.time }} on {{ event.date }}</span>
            <h4>{{ event.title }}</h4>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { Event } from './model/Event'

const props = defineProps({
    event: Object as () => Event
})
</script>

<style lang="less">
@card-color: #39495c;
@link-color: #2c3e50;
.event-card {
    padding: 1rem;
    cursor: pointer;
    border: 1px solid @card-color;
    margin-bottom: 0.5rem;
    &:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
    }
}

.event-link {
    color: @link-color;
    width: 50%;
    text-decoration: none;
}
</style>