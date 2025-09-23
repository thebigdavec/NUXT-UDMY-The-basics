<template>
    <h1 :class="$style.blue">Home</h1>
    <Card/>
    <hr/>
    <Profile/>
    <hr/>
    <Other/>
</template>

<style module>
    .blue {
        color:blue
    }
</style>

<script setup>
  
    useHead({
        link:[{
            rel:'stylesheet',
            href:'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css'
        }]
    })

</script>