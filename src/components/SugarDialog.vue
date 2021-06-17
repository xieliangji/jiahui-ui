<template>
  <div id="sugarDialog">
    <div id="sugarDialogContent" :style="{width: width, height: height}">
      <div id="sugarDialogHeader" class="sugar-line sugar-flex-row">
        <div id="sugarDialogLogoTitle" class="sugar-flex-row">
          <img id="sugarDialogLogo" src="../assets/logo.svg"/>
          <div id="sugarDialogTitle">
            <slot name="title"></slot>
          </div>
        </div>
        <div id="sugarDialogClose" @click.stop="$emit('close')">x</div>
      </div>
      <div id="sugarDialogBody">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SugarDialog",
  props: {
    width: String,
    height: String,
  },
  data(){
    return {

    }
  },
  methods: {

  },
  mounted() {
    let sugarDialogContent = document.getElementById("sugarDialogContent")
    let numWidth = parseInt(this.width.substring(0, this.width.indexOf("px"))) / 2
    sugarDialogContent.style.left = `calc(50% - ${numWidth}px)`
  }
}
</script>

<style scoped lang="scss">

#sugarDialog{
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0, .1);
  z-index: 20210;
  text-align: center;
}

#sugarDialogContent{
  background: #FFFFFF;
  position: relative;
  top: 100px;
  box-shadow: 0 0 5px 0 #2c3e50;
  border-radius: 3px;
}

#sugarDialogHeader{
  border-bottom: 1px solid #bdc3c7;
  text-align: left;
  #sugarDialogLogoTitle{
    flex-grow: 1;
    #sugarDialogLogo{
      width: 32px;
      height: 28px;
      margin: 2px;
    }

    #sugarDialogTitle{
      flex-grow: 1;
    }
  }

  #sugarDialogClose{
    text-align: center;
    width: 32px;
    font-size: 16px;
    background: #F0F2F0;
    border-top-right-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #bdc3c7;
    &:hover{
      color: #ff6d6f;
    }
  }
}

#sugarDialogBody{
  position: relative;
  height: calc(100% - 32px);
  overflow: auto;
}






</style>