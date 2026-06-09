<script setup lang="ts">
definePageMeta({
    middleware: [
        function(to, from) {
            console.log('LOCAL middleware!');
        }
    ]
})
</script>

<template>
    <h2>Home</h2>
</template>

<style scoped>
    hr {
        border: 1px solid light-dark(lightgreen, darkgreen);
    }
</style>