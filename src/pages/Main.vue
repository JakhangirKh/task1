<template>
  <div class="">
    <LayoutHeader />
    <slot />
    
  </div>
  <Home/>
</template>

<script setup>
import LayoutHeader from '@/components/layout/Header.vue'
import Home from '@/pages/Home.vue'

</script>
