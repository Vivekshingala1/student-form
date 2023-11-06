<template>

<!-- <input type="text" @input="emit('setSearch',$event.target.value)" placeholder="search"/> -->

<FormKit type="search" placeholder="Search..." v-model="search" @onchange="emit('setSearch',$event.target.value)" />


</template>

<script setup>

    const emit = defineEmits(["setSearch"])

</script>