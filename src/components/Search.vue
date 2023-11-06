<template>

<!-- <input type="text" @input="emit('setSearch',$event.target.value)" placeholder="search"/> -->

<FormKit type="search" placeholder="Search..." v-model="search" @input="emit('setSearch',$event)"  />


</template>

<script setup>

    const emit = defineEmits(["setSearch"])

</script>