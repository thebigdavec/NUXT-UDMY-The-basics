<template>
    <h3>Contact</h3>
    <p>Red: {{ $red }}</p>
    <p>Blue: {{ $blue }}</p>

    <button @click="$alertName('Francis')">
        Alert name
    </button>
    <hr/>
    <MyButton>Click Me</MyButton>

</template>

<script setup> 
    const {$red, $blue} = useNuxtApp();
    console.log($red,$blue)
</script>