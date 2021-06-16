<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">MD5Hex</div>
      <div class="input">
        <el-input v-model="element.size"></el-input>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "AssertionMd5",
  components: {SugarJmeterElement},
  props:{
    element: Object
  },
  data(){
    return {}
  },
  methods:{

  }
}
</script>

<style scoped>

</style>