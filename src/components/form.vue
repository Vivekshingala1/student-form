<template>
  <div>

    <h1 class="my-2.5 text-2xl">STUDENT FORM :-</h1>

    <div class="ml-5">

      <FormKit type="form" @submit="submitForm">

        <FormKit type="text" label="Student Surname*" placeholder="Student Surname" name="surname" />

        <FormKit type="text" label="Student Name*" placeholder="Student name" name="name" />

        <FormKit type="text" label="Student FatherName*" placeholder="Student fathername" name="fatherName" />

        <FormKit type="number" label="Roll No.*" name="rollNo" step="1" />

        <FormKit type="number" label="Mobile number" name="mobileNumber" />

        <FormKit type="select" label="class*" name="class" :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" />

      </FormKit>

    </div>

    <div class="table mt-10 ">
      <div class="">
      <Search @setSearch="setSearch"/>
    </div>
      <table class="border-separate border-spacing-2 border border-slate-400" :key="key">
        <thead>
          <tr>

            <th class="border border-slate-300">surname</th>
            <th class="border border-slate-300">name</th>
            <th class="border border-slate-300">fatherName</th>
            <th class="border border-slate-300">rollNo</th>
            <th class="border border-slate-300">mobileNumber</th>
            <th class="border border-slate-300">class</th>

           

          </tr>
   
        </thead>
        <tbody>
          <tr v-for="student in studentData">
            <td class="border border-slate-300">{{ student.surname }} </td>
            <td class="border border-slate-300">{{ student.name }} </td>
            <td class="border border-slate-300">{{ student.fatherName }} </td>
            <td class="border border-slate-300">{{ student.rollNo }} </td>
            <td class="border border-slate-300">{{ student.mobileNumber }} </td>
            <td class="border border-slate-300">{{ student.class }} </td>
          </tr>
        </tbody>

      </table>

      <Pagination :student="student" :currentPage="currentPage" @SetcurrentPage="SetcurrentPage" />

    </div>
  </div>
</template>
  
<script setup>


import { FormKit } from '@formkit/vue';
import { ref, computed } from 'vue';
import Pagination from "./Pagination.vue"
import Search from './search.vue';

const student = ref([]);
const search = ref();

const currentPage = ref(1);
const key = ref(1)

const studentData = computed(() => {

  let value = [...student.value]

  if (search.value?.length > 0) {
    value = student.value.filter((row) =>{
      if(row.class.includes(search.value) ||
       row.surname.includes(search.value) ||
        row.name.includes(search.value) ||
         row.fatherName.includes(search.value) || 
         row.rollNo.includes(search.value) || 
         row.mobileNumber.includes(search.value)  ){
        return row
      }
    }
    )
  }

  const startIndex = currentPage.value == 1 ? (currentPage.value - 1) : (currentPage.value - 1) * 2;
  const endIndex = startIndex + 2 > value.length ? value.length - 1 : startIndex + 2;
  return endIndex == 0 ? [...value] : value.slice(startIndex, endIndex);

}

)


const submitForm = (data) => {
  console.log(data);
  student.value.push(data)
};



const SetcurrentPage = (index) => {
  currentPage.value = index
  key.value++
}


const setSearch = (value) => {
  console.log(value);
  search.value = value
  key.value++
}


</script>