<template>
  <div>

    <h1 class="my-2.5 text-2xl">STUDENT FORM :-</h1>

    <div class="ml-5">

      <FormKit type="form"  @submit="submitForm" >

        <FormKit type="text" label="Student Surname*" placeholder="Student Surname" name="surname" />

        <FormKit type="text" label="Student Name*" placeholder="Student name" name="name" />

        <FormKit type="text" label="Student FatherName*" placeholder="Student fathername" name="fatherName" />

        <FormKit type="number" label="Roll No.*" name="rollNo" step="1" />

        <FormKit type="number" label="Mobile number" name="mobileNumber" />

        <FormKit type="select" label="class*" name="class" :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" />

      </FormKit> 

      <Popover :student="student"/>
    </div>
  </div>

  
</template>
  
<script setup>


import { FormKit } from '@formkit/vue';
import { ref, computed } from 'vue';
import Popover from "./Popover.vue";

const student = ref([]);


const submitForm = (data) => {
  console.log(data);
  student.value.push(data)
};



</script>