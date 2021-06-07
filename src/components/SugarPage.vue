<template>
  <div id="sugarPage" class="sugar-flex-col">
    <div id="sugarPageNav" class="sugar-line">
      <slot name="title"></slot>
    </div>
    <div style="flex-grow: 1;" id="sugarPageContent">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SugarPage",
  props: {
  },
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

#sugarPage{
  height: 100%;
  //background: #FFF2E2;
}

#sugarPageNav{
  padding: 4px 20px;
  height: 32px;
  color: #859398;
  user-select: none;
}

#sugarPageContent{
  height: calc(100% - 40px);
}







</style>