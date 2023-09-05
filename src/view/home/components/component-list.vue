<template>
  <div class="component-list w-140px p16px">
    <div class="list flex flex-wrap">
      <div
        class="item text-center p-12px"
        v-for="(item, index) in componentList"
        :key="index"
      >
        <component :is="item.icon" size="22"></component>
        <span class="block mt10px">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getComponentList } from "./data";
const componentList = getComponentList();
</script>

<style lang="less" scoped>
.component-list {
  border-right: 1px solid var(--color-neutral-3);
}
:deep(.arco-icon) {
  color: var(--color-neutral-4);
}
.item {
  span {
    color: var(--color-neutral-6);
  }
}
</style>
