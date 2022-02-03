<!--
===================================
Main Vue File(Root Component)
===================================
-->

<template>
<div id="app">
	<div id="nav">
		<router-link :to="{ name: 'EventList' }">Events</router-link> |
		<router-link :to="{ name: 'About' }">About</router-link>
	</div>
	<h1>Events For Good</h1>
	<router-view></router-view>
</div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
@main-color: #2c3e50;
@link-color: #2c3e50;
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: @main-color;
    margin-top: 4rem;
}

#nav {
    padding: 2rem;
    a {
        font-weight: bold;
        color: @link-color;
    } 
}

h4 {
    font-size: 1.5rem;
}
</style>
