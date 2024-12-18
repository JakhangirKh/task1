<template>
  <section class="max-w-[1070px] w-full mx-auto items-center p-4 justify-between">
    <div class="flex items-center mt-[128px] flex-col mx-auto">
      <h2 class="text-white-200 font-bold mb-2">
        Create, explore, & collect digital art NFTs. The new creative economy. Start your search
      </h2>
      <h1 class="text-black-100 text-4xl font-bold">The new creative economy.</h1>
      <CButton
        class="items-center rounded-full border border-white-300 py-4 px-6 flex gap-2 bg-white-100 text-black-100 text-base mt-6 font-bold"
      >
        Start your search
      </CButton>
    </div>
    <div class="grid grid-cols-3 gap-8 my-[100px]">
      <CCardVue />
      <CCardVue />
      <CCardVue />
      <CCardVue />
      <CCardVue />
      <CCardVue />
      <CCardVue />
      <CCardVue />
      <CCardVue />
    </div>
    <CButton
    class="items-center mx-auto justify-center rounded-full border border-white-300 py-4 px-6 flex gap-2 bg-white-100 text-black-100 text-base mt-6 font-bold"
    >Load more</CButton
    >
  </section>
</template>

<script setup>
import CCardVue from '@/components/base/CCard.vue'
import CButton from '../components/base/CButton.vue'
</script>

<style lang="scss" scoped></style>
