<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line">
      <el-checkbox v-model="style">忽略子控制器块</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ControllerRandom",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  computed: {
    style: {
      get(){
        return this.element.style === 0
      },
      set(value){
        if(value){
          this.element.style = 0
        } else {
          this.element.style = 1
        }
      }
    }
  }
}
</script>

<style scoped>

</style>