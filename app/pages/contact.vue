<template>
    <h1>Contact</h1>
    <button @click="setPageLayout('default')">
        Change layout
    </button>
</template>

<script setup>
    const title = ref('Contact')

    setTimeout(()=>{
        title.value = 'New Contact'
    },2000)

    useHead({
        titleTemplate:title
    })

    definePageMeta({
        layout:'secondary'
    })

</script>