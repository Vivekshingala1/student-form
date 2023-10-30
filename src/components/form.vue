<template>

    <div>

        <h1 class="my-2.5 text-2xl">STUDENT FORM :-</h1>

        <div class="ml-5">
            <FormKit type="form" @submit="submitForm">

                <FormKit type="text" label="Student Surname*" placeholder="Student Surname" name="surname"/>

                <FormKit type="text" label="Student Name*" placeholder="Student name" name="name" />

                <FormKit type="text" label="Student FatherName*" placeholder="Student fathername" name="fatherName" />

                <FormKit type="number" label="Roll No.*" name="rollNo" step="1"  />

                <FormKit type="number" label="Mobile number" name="mobileNumber"  />

                <FormKit type="select" label="class*" name="class"
                    :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"  />

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

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in student">
                        <td class="border border-slate-300">{{student.surname }} </td>
                        <td class="border border-slate-300">{{student.name}} </td>
                        <td class="border border-slate-300">{{student.fatherName}} </td>
                        <td class="border border-slate-300">{{student.rollNo}} </td>
                        <td class="border border-slate-300">{{student.mobileNumber}} </td>
                        <td class="border border-slate-300">{{student.class}} </td>
                    </tr>

                </tbody>

            </table>

        </div>

    </div>

</template>
  
<script setup>
import { FormKit } from '@formkit/vue';

import { ref } from 'vue';

const student = ref([]);

const submitForm = (data) => {
    student.value.push(data);
};


</script>
  