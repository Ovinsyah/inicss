<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Display</h1>
        <div>Dokumentasi dan contoh penggunaan Display</div>
        <h4 class="mt-3">Text Alignment</h4>
        <div class="ini section">
          <div class="example display">
            <div>Display Inline</div>
            <div>Display Block</div>
            <div>Display Inline Block</div>
            <div>Display Flex</div>
            <div>Display Inline FLex</div>
            <div>Display None</div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;div class=&#x22;ini dispplay inline&#x22;&#x3E;Display Inline&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini dispplay block&#x22;&#x3E;Display Block&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini dispplay inline-block&#x22;&#x3E;Display Inline Block&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini dispplay flex&#x22;&#x3E;Display Flex&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini dispplay inline-flex&#x22;&#x3E;Display Inline FLex&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini dispplay none&#x22;&#x3E;Display None&#x3C;/div&#x3E;</div>
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
<div class="ini dispplay inline">Display Inline</div>
<div class="ini dispplay block">Display Block</div>
<div class="ini dispplay inline-block">Display Inline Block</div>
<div class="ini dispplay flex">Display Flex</div>
<div class="ini dispplay inline-flex">Display Inline FLex</div>
<div class="ini dispplay none">Display None</div>
`
    };
  }
};
</script>

