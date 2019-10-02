<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Color</h1>
        <div>Dokumentasi dan contoh penggunaan color</div>
        <h4 class="mt-3">Text Alignment</h4>
        <div class="ini section">
          <div class="example">
            <p class="ini color-blue">Ini Color Blue</p>
            <p class="ini color-black">Ini Color Black</p>
            <p class="ini color-red">Ini Color red</p>
            <p class="ini color-green">Ini Color green</p>
            <p class="ini color-purple">Ini Color purple</p>
            <p class="ini color-carrot">Ini Color carrot</p>
            <p class="ini color-orange">Ini Color orange</p>
            <p class="ini color-gray">Ini Color gray</p>
            <p class="ini color-midnight">Ini Color midnight</p>
            <p class="ini color-white background-black">Ini Color white</p>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;p class=&#x22;ini color-blue&#x22;&#x3E;Ini Color Blue&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-black&#x22;&#x3E;Ini Color Black&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-red&#x22;&#x3E;Ini Color red&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-green&#x22;&#x3E;Ini Color green&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-purple&#x22;&#x3E;Ini Color purple&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-carrot&#x22;&#x3E;Ini Color carrot&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-orange&#x22;&#x3E;Ini Color orange&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-gray&#x22;&#x3E;Ini Color gray&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-midnight&#x22;&#x3E;Ini Color midnight&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini color-white background-black&#x22;&#x3E;Ini Color white&#x3C;/p&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden" v-model="code_html_color"></textarea>
          </div>
        </div>
        <h4 class="mt-3">Background</h4>
        <div class="ini section">
          <div class="example">
            <p class="ini background-blue color-white p-2">Ini Background Blue</p>
            <p class="ini background-black color-white p-2">Ini Background Black</p>
            <p class="ini background-red color-white p-2">Ini Background red</p>
            <p class="ini background-green color-white p-2">Ini Background green</p>
            <p class="ini background-purple color-white p-2">Ini Background purple</p>
            <p class="ini background-carrot color-white p-2">Ini Background carrot</p>
            <p class="ini background-orange color-white p-2">Ini Background orange</p>
            <p class="ini background-gray color-white p-2">Ini Background gray</p>
            <p class="ini background-midnight color-white p-2">Ini Background midnight</p>
            <p class="ini background-white p-2">Ini Background white</p>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;p class=&#x22;ini background-blue color-white p-2&#x22;&#x3E;Ini Background Blue&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-black color-white p-2&#x22;&#x3E;Ini Background Black&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-red color-white p-2&#x22;&#x3E;Ini Background red&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-green color-white p-2&#x22;&#x3E;Ini Background green&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-purple color-white p-2&#x22;&#x3E;Ini Background purple&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-carrot color-white p-2&#x22;&#x3E;Ini Background carrot&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-orange color-white p-2&#x22;&#x3E;Ini Background orange&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-gray color-white p-2&#x22;&#x3E;Ini Background gray&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-midnight color-white p-2&#x22;&#x3E;Ini Background midnight&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini background-white p-2&#x22;&#x3E;Ini Background white&#x3C;/p&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden" v-model="code_html_background"></textarea>
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
      code_html_color: `
<p class="ini color-blue">Ini Color Blue</p>
<p class="ini color-black">Ini Color Black</p>
<p class="ini color-red">Ini Color red</p>
<p class="ini color-green">Ini Color green</p>
<p class="ini color-purple">Ini Color purple</p>
<p class="ini color-carrot">Ini Color carrot</p>
<p class="ini color-orange">Ini Color orange</p>
<p class="ini color-gray">Ini Color gray</p>
<p class="ini color-midnight">Ini Color midnight</p>
<p class="ini color-white background-black">Ini Color white</p>
`,
      code_html_background: `
<p class="ini background-blue color-white p-2">Ini Background Blue</p>
<p class="ini background-black color-white p-2">Ini Background Black</p>
<p class="ini background-red color-white p-2">Ini Background red</p>
<p class="ini background-green color-white p-2">Ini Background green</p>
<p class="ini background-purple color-white p-2">Ini Background purple</p>
<p class="ini background-carrot color-white p-2">Ini Background carrot</p>
<p class="ini background-orange color-white p-2">Ini Background orange</p>
<p class="ini background-gray color-white p-2">Ini Background gray</p>
<p class="ini background-midnight color-white p-2">Ini Background midnight</p>
<p class="ini background-white p-2">Ini Background white</p>
`
    };
  }
};
</script>

