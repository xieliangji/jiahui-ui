<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #536976;
  font-size: 14px;
}

$mainBackgroundColor: #DCE2F1;

*::-webkit-scrollbar{
  width: 8px;
  height: 8px;
  background: #fff;
}
*::-webkit-scrollbar-thumb{
  // 可拖动物
  background: $mainBackgroundColor;
  border-radius: 1px;
}

/* Buttons */
*::-webkit-scrollbar-button {
  // 两端按钮
  background: $mainBackgroundColor;
  height: 8px;
  width: 8px;
}

*::-webkit-scrollbar-button:single-button {
  background-color: $mainBackgroundColor;
  display: block;
  border-style: solid;
  height: 8px;
  width: 8px;
}

/* Up */
*::-webkit-scrollbar-button:vertical:decrement {
  border-width: 0 6px 8px 6px;
  border-color: transparent #fff transparent #fff;
}

/* Down */
*::-webkit-scrollbar-button:vertical:increment {
  border-width: 8px 6px 0 6px;
  border-color: transparent #fff transparent #fff;
}

/* Left */
*::-webkit-scrollbar-button:horizontal:increment {
  border-width: 6px 0 6px 8px;
  border-color: #fff transparent #fff transparent;
}

/* Right */
*::-webkit-scrollbar-button:horizontal:decrement {
  border-color: #fff transparent #fff transparent;
  border-width: 6px 8px 6px 0;

}

</style>
