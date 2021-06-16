<template>
  <sugar-jmeter-element :jmeter-element="element"></sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "AssertionXml",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {}
  },
  methods: {

  }
}
</script>

<style scoped>

</style>