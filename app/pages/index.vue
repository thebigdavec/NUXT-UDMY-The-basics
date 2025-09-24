<template>
    <h1>Home</h1>
    <ul v-if="!users.loader.value">
        <li v-for="user in users.names.value" :key="user">
            {{  user }}
        </li>
    </ul>
    <div v-else>Loading...</div>
    <hr/>
    <button @click="users.addUser">
        Add user name
    </button>

</template>

<script setup>
    // import { testComp } from '~/composables/test/testComp';
    const users = getUsers('Miles')
    console.log(testComp())
</script>