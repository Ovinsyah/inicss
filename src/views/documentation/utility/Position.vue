<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Position</h1>
        <div>Dokumentasi dan contoh penggunaan Position</div>
        <h4 class="mt-3">Text Alignment</h4>
        <div class="ini section">
          <div class="example position">
            <div>Position Relative</div>
            <div>Position Absolute</div>
            <div>Position Fixed</div>
            <div>Position Sticky</div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;div class=&#x22;ini relative&#x22;&#x3E;Position Relative&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini absolute&#x22;&#x3E;Position Absolute&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini fixed&#x22;&#x3E;Position Fixed&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini sticky&#x22;&#x3E;Position Sticky&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden" v-model="code_html_position"></textarea>
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
      code_html_position: `
<div>Position Relative</div>
<div>Position Absolute</div>
<div>Position Fixed</div>
<div>Position Sticky</div>
`
    };
  }
};
</script>

