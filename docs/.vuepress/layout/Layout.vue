<template>
  <ParentLayout>
    <template #sidebar-bottom>
      <LayoutSidebarBottom/>
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import LayoutSidebarBottom from './sidebar/LayoutSidebarBottom.vue'
</script>
