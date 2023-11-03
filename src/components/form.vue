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

    <div class="table mt-10">

      <table class="border-separate border-spacing-2 border border-slate-400">
        <thead>
          <tr>
            <th class="border border-slate-300">surname</th>
            <th class="border border-slate-300">name</th>
            <th class="border border-slate-300">fatherName</th>
            <th class="border border-slate-300">rollNo</th>
            <th class="border border-slate-300">mobileNumber</th>
            <th class="border border-slate-300">class</th>

            <FormKit type="search" placeholder="Search..." v-model="search" />
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

      <!-- paggination -->

      <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 text-black">
        <div class="flex flex-1 justify-between sm:hidden">
          <button href="#"
            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-50">Previous</button>
          <button href="#"
            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              Showing
              {{ '' }}
              <span class="font-medium ">1</span>
              {{ '' }}
              to
              {{ '' }}
              <span class="font-medium ">4</span>
              {{ '' }}
            </p>
          </div>
          <div>
            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">

              <button
                class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Previous</span>
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
              </button>
              <div v-for="(index) in (student.length > 2 ? Math.round(student.length / 2) : [])">
                <button @click="currentPage = index"
                  :class="currentPage == index ? 'relative z-10 inline-flex  items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : ' text-black relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'">{{
                    index }}</button>
              </div>

              <button
                class="relative inline-flex items-center text-black rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Next</span>
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </button>

            </nav>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
  
<script setup>

import { FormKit } from '@formkit/vue';
import { ref, computed } from 'vue';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'



const student = ref([]);
const search = ref();
const currentPage = ref(1);

const studentData = computed(() => {

  let value = [...student.value]

  if (search.value?.length > 0) {
    value = student.value.filter((row) =>

      row.surname.includes(search.value) ||
      row.name.includes(search.value) ||
      row.fatherName.includes(search.value) ||
      row.rollNo.includes(search.value) ||
      row.mobileNumber.includes(search.value) ||
      row.class.includes(search.value))
  }
    const startIndex = currentPage.value == 1 ? (currentPage.value - 1) : (currentPage.value - 1) * 2;
    const endIndex = startIndex + 2 > value.length ? value.length - 1 : startIndex + 2;
    return endIndex == 0 ? [...value ]: value.slice(startIndex, endIndex);
}

)


const submitForm = (data) => {
  student.value.push(data)
};

</script>