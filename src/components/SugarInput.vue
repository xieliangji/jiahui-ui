<template>
  <div class="sugar-input">
    <div class="sugar-input__label" :style="{width: labelWidth}">{{ label }}</div>
    <div class="sugar-input__content">
      <el-input v-if="type === 'textarea'" type="textarea" :autosize="{minRows: 2, maxRows: 5}" v-model="areaValue"></el-input>
      <input v-else :value="value" @input="handleInput($event)" :placeholder="placeholder"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SugarInput",
  props: {
    label: String,
    value: [String, Number],
    labelWidth: String,
    placeholder: String,
    type: String,
    maxRows: Number
  },
  data(){
    return {

    }
  },
  methods: {
    handleInput(event){
      this.$emit('input', event.target.value)
    }
  },
  computed: {
    areaValue: {
      get(){
        return this.value
      },
      set(value){
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped lang="scss">

.sugar-input{
  display: flex;
  flex-flow: row nowrap;
  line-height: 32px;
  width: 100%;
  padding: 5px 0;

  .sugar-input__label{
    text-align: right;
    margin: 0 5px 0 0;
  }

  .sugar-input__content{
    flex-grow: 1;

    input{
      all: unset;
      border: 1px solid #DCDFE6;
      border-radius: 2px;
      width: 100%;
      line-height: 32px;
      height: 32px;
      box-sizing: border-box;
      padding: 0 5px;
    }

    textarea{
      all: unset;
      border: 1px solid #DCDFE6;
      border-radius: 2px;
      width: 100%;
      line-height: 32px;
      box-sizing: border-box;
      padding: 0 5px;
      height: 64px;
      resize: vertical;
    }
  }
}

</style>