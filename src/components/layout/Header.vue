<template>
  <header class="max-w-[1070px] flex w-full mx-auto items-center p-4 justify-between">
    <div class="flex gap-2 items-center">
      <!-- <img src="/public/img/logo.png" alt=""> -->
      <h3 class="text-2xl text-black-100">crypter</h3>
      <div class="border w-8 rotate-90 text-black-100"></div>
      <p class="text-sm font-bold text-black-100">Discovery</p>
      <p class="text-sm font-bold text-white-200">How it work</p>
    </div>
    <div class="flex items-center relative gap-6">
      <CInput type="text" placeholder="Search" class="" />
      <!-- <img class="text-lg absolute right-2  " src="/public/svg/Line.svg" alt=""> -->
      <a href="#!"><img class="text-xl" src="/public/svg/bell.svg" alt="" /></a>
      <div class="flex items-center gap-3">
        <CButton
          class="items-center rounded-full py-3 px-4 flex gap-2 bg-blue-100 text-white-100 text-sm font-bold"
        >
          Upload
        </CButton>
        <CButton
          class="items-center rounded-full border border-white-300 py-3 px-4 flex gap-2 bg-white-100 text-black-100 text-sm font-bold"
        >
          Connect Wallet
        </CButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import CInput from '../base/CInput.vue'
import CButton from '../base/CButton.vue'
</script>
