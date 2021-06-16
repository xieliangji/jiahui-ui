<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">XML Schema</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">文件名</div>
        <div class="input">
          <el-input readonly v-model="element.xmlSchemaAssertionFilename" @click="handleXmlSchemaFileUpload" placeholder="双击上传xsd文件"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "AssertionXmlSchema",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleXmlSchemaFileUpload(){

    }
  }
}
</script>

<style scoped>

</style>