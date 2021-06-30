<template>
  <div id="sugarJmeterEditor">
    <editor v-model="editorValue" @init="initEditor" :lang="language" style="height: 100%; width: 100%;" theme="xcode"
            :options="{enableBasicAutocompletion: true, enableSnippets: true, readOnly: readOnly, showPrintMargin: false, highlightActiveLine: false, fontSize: '14px', wrap: 'free'}">
    </editor>
  </div>
</template>

<script>
export default {
  name: "JmeterEditor",
  components: {editor: require('vue2-ace-editor')},
  props: {
    script: String,
    readOnly: Boolean,
    language: String,
  },
  data(){
    return {
      options: {
        enableBasicAutocompletion: true,
        enableSnippets: true,
      }
    }
  },
  methods: {
    initEditor(){
      require('brace/ext/language_tools')

      require('brace/mode/javascript')
      require('brace/mode/plain_text')
      require('brace/mode/java')
      require('brace/mode/sql')
      require('brace/mode/html')
      require('brace/mode/json')
      require('brace/mode/groovy')

      require('brace/snippets/javascript')
      require('brace/snippets/plain_text')
      require('brace/snippets/java')
      require('brace/snippets/sql')
      require('brace/snippets/html')
      require('brace/snippets/json')
      require('brace/snippets/groovy')

      require('brace/theme/xcode')
    }
  },
  computed: {
    editorValue: {
      get(){
        return this.script
      },
      set(value){
        this.$emit('scriptUpdate', value)
      }
    }
  }
}
</script>

<style scoped>
#sugarJmeterEditor{
  height: 100%;
  width: 100%;
  border: 1px solid #DCDFE6;
}
</style>