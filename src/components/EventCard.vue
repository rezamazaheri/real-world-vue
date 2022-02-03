<!--
====================================
Building Block of the App
====================================
-->

<template>
  <div class="event-card">
        <span>@ {{ event.time }} on {{ event.date }}</span>
        <h4>{{ event.title }}</h4>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Event } from './model/Event'

const props = defineProps({
    event: Object as () => Event
})

</script>

<style lang="less">
@card-color: #39495c;
.event-card {
    padding: 1rem;
    width: 30%;
    cursor: pointer;
    border: 1px solid @card-color;
    margin-bottom: 0.5rem;
    &:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
    }
}
</style>