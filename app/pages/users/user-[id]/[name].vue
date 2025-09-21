<template>
    <h1>User by ID and Name</h1>
    <p>ID:{{ $route.params.id }}</p>
    <p>NAME:{{ $route.params.name }}</p>
</template>


<script setup>
    const route = useRoute();
    console.log(route.params.id)
    console.log(route.params.name)
</script>