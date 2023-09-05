<template>
  <div class="property-config w-260px text-center p16px">
    <a-form :model="form" :style="{ width: '230px' }">
      <a-form-item field="name" label="label">
        <a-input v-model="form.name" placeholder="请输入" />
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
const form = ref({
  name: "",
});
</script>
<style lang="less" scoped>
.property-config {
  border-left: 1px solid var(--color-neutral-3);
}
</style>
