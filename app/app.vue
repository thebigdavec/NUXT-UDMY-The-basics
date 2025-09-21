<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script setup>
  // useHead({
  //   title:'Awesome app',
  //   meta:[
  //     {name:'description',content:'Some description...'}
  //   ],
  //   link:[
  //     {
  //       rel:'stylesheet',
  //       href:'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css'
  //     }
  //   ]
  // })

  useSeoMeta({
    title:'Awesome app',
    ogTitle:'Awesome app',
    description:'Some descript..',
    ogDescription:'Some description....'
  })


</script>