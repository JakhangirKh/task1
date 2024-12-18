<template>
    <div class=" relative">
      <input
        v-model="inputValue"
        autocomplete="off"
        :type
        id="input"
        name="input"
        :placeholder
      class="  py-1 pl-2 outline-none border rounded-lg border-white-300"
      />
    </div>
    
  </template>
  
  <script setup>
  import { ref } from "vue"
  defineProps({
    placeholder: {
      type: String,
      required: true,
    },
  
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      required: true,
    },
  })
  
  const inputValue = ref()
  </script>
  