<template>
  <div class="mid-canvas flex-1 h-100%">
    <div class="view-contain" :style="{ width: viewWid + 'px' }">
      <div
        class="view"
        :style="{ width: viewWid + 'px', height: viewHig + 'px' }"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const cxt = getCurrentInstance();
const bus = cxt?.appContext.config.globalProperties.$bus;
const viewWid = ref(1920);
const viewHig = ref(1080);
bus.on("handleWidValueInput", (val) => {
  viewWid.value = val;
});
bus.on("handleHeightValueInput", (val) => {
  viewHig.value = val;
});
</script>
<style lang="less" scoped>
.mid-canvas {
  padding: 16px;
  background: #ddd;
  overflow: hidden;
}
.view-contain {
  height: 100%;
  overflow-x: scroll;
}
.view {
  background: #fff;
  background-image: linear-gradient(
      90deg,
      rgba(241, 243, 244, 1) 10%,
      transparent 0
    ),
    linear-gradient(rgba(241, 243, 244, 1) 10%, transparent 0);
  background-size: 10px 10px;
  margin-left: 50%;
  transform: translateX(-50%);
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #ddd;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--color-neutral-4);
}
</style>
