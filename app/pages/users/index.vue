<template>
    <h1>Users</h1>
</template>

<script setup>
    const route = useRoute();
    console.log(route.meta)
    useHead(route.meta)

    definePageMeta({
        title:'Users',
        meta:[
            {name:'description',content:'Users description'}
        ],
        something:'hey...'
    })
</script>