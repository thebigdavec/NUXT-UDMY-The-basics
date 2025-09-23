<template>
    <h1>Home</h1>
    <NuxtLink 
        :to="'https://google.com'" target="_blank"
    >
    Go to google</NuxtLink>
    <hr/>
    <button @click="router.push('/contact')">
        Go to contact
    </button>
</template>

<script setup>
    const router = useRouter();


</script>