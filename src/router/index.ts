/*
=============================
App Navigation
=============================
*/

import { createRouter, createWebHistory } from "vue-router";
import EventList from '../views/EventList.vue'
const About = () => import('../views/About.vue')
const EventDetails = () => import('../views/EventDetails.vue')

const routes = [
    {
        path: '/',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }, 
    {
        path: '/event/:id',
        name: 'EventDetails',
        props: true,
        component: EventDetails
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})