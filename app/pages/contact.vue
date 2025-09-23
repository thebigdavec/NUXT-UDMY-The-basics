<template>
    <h3>Contact</h3>
</template>

<script setup>
    definePageMeta({
        middleware:[
            function(to,from){
                console.log('LOCAL middleware')
            },
            'name'
        ]
    })

</script>