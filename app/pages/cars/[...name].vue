<template>
    <h1>Cars page</h1>
    <p>{{ $route.params.name }}</p>
</template>

<script setup>
    const route = useRoute();
    console.log(route.params.name)
</script>