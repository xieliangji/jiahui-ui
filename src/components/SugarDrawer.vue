<template>
  <el-drawer :visible.sync="isShow" :direction="direction" :show-close="false" :size="size" @close="$emit('close')">
    <div slot="title" class="sugar-drawer-title">
      <div class="sugar-drawer-logo"></div>
      <div class="sugar-drawer-title-text">
        <slot name="title"></slot>
      </div>
    </div>
    <div slot="default" class="sugar-drawer-body">
      <slot></slot>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "SugarDrawer",
  props: {
    showSugarDrawer: Boolean,
    direction: String,
    size: Number,
  },
  data(){
    return {

    }
  },
  computed: {
    isShow: {
      get(){
        return this.showSugarDrawer
      },
      set(value){
        return value
      }
    }
  }
}
</script>

<style scoped lang="scss">

.sugar-drawer-title{
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid #DCDFE6;
  background-color: #eef2f3;
  box-sizing: border-box !important;
}

.sugar-drawer-logo{
  width: 32px;
  height: 24px;
  margin-top: 4px;
  background: {
    image: url("../assets/logo.svg");
    size: 32px 24px;
  };
}

.sugar-drawer-title-text{
  flex-grow: 1;
}

.sugar-drawer-body{
  height: 100%;
}

</style>