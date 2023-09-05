<template>
  <div class="main">
    <headerOperation></headerOperation>
    <div class="flex flex-justify-between h-100% view">
      <componentList></componentList>
      <midCanvas></midCanvas>
      <rightProperty></rightProperty>
    </div>
  </div>
</template>
<script lang="ts" setup>
import headerOperation from "./components/header-operation.vue";
import componentList from "./components/component-list.vue";
import midCanvas from "./components/mid-canvas.vue";
import rightProperty from "./components/right-property.vue";

const form = reactive({
  name: "",
  post: "",
  isRead: false,
});
const handleSubmit = (data) => {
  console.log(data);
};
</script>
<style lang="less" socped>
.main {
  height: 89vh;
}
.view {
}
</style>
