<template>
  <div class=" inset-0 flex items-center ">
    <button type="button" @click="openModal"
      class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
      SHOW OF STUDENT DATA
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">

      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel class=" rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

              <div class="table mt-10 ">
                <div class="">

                  <Search @setSearch="setSearch" />
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
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  

<script setup>

import Pagination from "./Pagination.vue";

import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import Search from './Search.vue';

import { computed } from "vue";

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}

const student = ref([]);
const search = ref();

const currentPage = ref(1);
const key = ref(1)

const studentData = computed(() => {

  let value = [...props.student]

  if (search.value?.length > 0) {
    value = student.value.filter((row) => {
      if (row.class.includes(search.value) ||
        row.surname.includes(search.value) ||
        row.name.includes(search.value) ||
        row.fatherName.includes(search.value) ||
        row.rollNo.includes(search.value) ||
        row.mobileNumber.includes(search.value)) {
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

const SetcurrentPage = (index) => {
  currentPage.value = index
  key.value++
}


const setSearch = (value) => {
  console.log(value);
  search.value = value
  key.value++
}

const props = defineProps({
  student: Object
})


</script>
  