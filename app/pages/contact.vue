<template>
    <h1>Contact</h1>
</template>

<script setup>
    const title = ref('Contact')

    setTimeout(()=>{
        title.value = 'New Contact'
    },2000)

    useHead({
        titleTemplate:title
    })
</script>