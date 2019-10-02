<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Float</h1>
        <div>Dokumentasi dan contoh penggunaan Float</div>
        <h4 class="mt-3">Text Alignment</h4>
        <div class="ini section">
          <div class="example">
            <div class="ini float-right">Float Right</div>
            <br>
            <div class="ini float-left">Float Left</div>
            <br>
            <div class="ini float-none">Float None</div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;div class=&#x22;ini float-right&#x22;&#x3E;Float Right&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini float-left&#x22;&#x3E;Float Left&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini float-none&#x22;&#x3E;Float None&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden" v-model="code_html_float"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menubar.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Menu
  },
  data() {
    return {
      code_html_float: `
<div class="ini float-right">Float Right</div>
<div class="ini float-left">Float Left</div>
<div class="ini float-none">Float None</div>
`
    };
  }
};
</script>

