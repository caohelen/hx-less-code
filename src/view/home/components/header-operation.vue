<template>
  <div class="header-operation">
    <div>
      <a-space>
        <a-button type="primary">保存</a-button>
        <a-button>重置</a-button>
      </a-space>
    </div>
    <div>
      <span>画布大小：</span>
      <a-input-number
        :style="{ width: '120px' }"
        v-model="widValue"
        allow-clear
        @input="handleWidValueInput"
        :min="0"
        :max="1920"
      />
      *
      <a-input-number
        :style="{ width: '120px' }"
        v-model="higValue"
        allow-clear
        @input="handleHeightValueInput"
        :min="0"
        :max="1080"
      />
    </div>
    <a-button type="primary">生成代码</a-button>
  </div>
</template>
<script lang="ts" setup>
const cxt = getCurrentInstance();
const bus = cxt?.appContext.config.globalProperties.$bus;
// 监听
const widValue = ref(1920);
const higValue = ref(1080);
const handleWidValueInput = (val) => {
  bus.emit("handleWidValueInput", val);
};
const handleHeightValueInput = (val) => {
  bus.emit("handleHeightValueInput", val);
};
</script>
<style lang="less" scoped>
.header-operation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--color-neutral-3);
}
</style>
