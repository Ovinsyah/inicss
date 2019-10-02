<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Text</h1>
        <div>Dokumentasi dan contoh penggunaan text</div>
        <h4 class="mt-3">Text Alignment</h4>
        <div class="ini section">
          <div class="example">
            <div>
              <div class="ini bold mb-1">Justify</div>
              <div
                class="ini align justify"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt earum sequi, animi eveniet ratione placeat rerum rem, explicabo necessitatibus voluptatem officia ea totam minima. Dicta quos corrupti maiores rerum?</div>
            </div>
            <div class="mt-4">
              <div class="ini bold mb-1">Center</div>
              <div
                class="ini align center"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt earum sequi, animi eveniet ratione placeat rerum rem, explicabo necessitatibus voluptatem officia ea totam minima. Dicta quos corrupti maiores rerum?</div>
            </div>
            <div class="mt-4">
              <div class="ini bold mb-1">Left</div>
              <div
                class="ini align left"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt earum sequi, animi eveniet ratione placeat rerum rem, explicabo necessitatibus voluptatem officia ea totam minima. Dicta quos corrupti maiores rerum?</div>
            </div>
            <div class="mt-4">
              <div class="ini bold mb-1">Right</div>
              <div
                class="ini align right"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt earum sequi, animi eveniet ratione placeat rerum rem, explicabo necessitatibus voluptatem officia ea totam minima. Dicta quos corrupti maiores rerum?</div>
            </div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>
                &#x3C;p class=&#x22;ini align justify&#x22;&#x3E;
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque obcaecati officia cumque eius quasi quis, delectus eos minus recusandae quae, ullam rerum soluta pariatur eligendi accusantium magnam inventore dignissimos.
                &#x3C;/p&#x3E;
              </div>
              <div class="mt-4">
                &#x3C;p class=&#x22;ini align center&#x22;&#x3E;
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque obcaecati officia cumque eius quasi quis, delectus eos minus recusandae quae, ullam rerum soluta pariatur eligendi accusantium magnam inventore dignissimos.
                &#x3C;/p&#x3E;
              </div>
              <div class="mt-4">
                &#x3C;p class=&#x22;ini align left&#x22;&#x3E;
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque obcaecati officia cumque eius quasi quis, delectus eos minus recusandae quae, ullam rerum soluta pariatur eligendi accusantium magnam inventore dignissimos.
                &#x3C;/p&#x3E;
              </div>
              <div class="mt-4">
                &#x3C;p class=&#x22;ini align right&#x22;&#x3E;
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque obcaecati officia cumque eius quasi quis, delectus eos minus recusandae quae, ullam rerum soluta pariatur eligendi accusantium magnam inventore dignissimos.
                &#x3C;/p&#x3E;
              </div>
            </div>
            <textarea cols="100" rows="100" class="hidden" v-model="code_html_align"></textarea>
          </div>
        </div>
        <h4 class="mt-3">Text Transform</h4>
        <div class="ini section">
          <div class="example">
            <p class="ini lowercase">Ini Lowercase</p>
            <p class="ini uppercase">Ini Uppercase</p>
            <p class="ini capitalize">Ini Capitalize</p>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;p class=&#x22;ini lowercase&#x22;&#x3E;Ini Lowercase&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini uppercase&#x22;&#x3E;Ini Uppercase&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini capitalize&#x22;&#x3E;Ini Capitalize&#x3C;/p&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden" v-model="code_html_transform"></textarea>
          </div>
        </div>
        <h4 class="mt-3">Text Style</h4>
        <div class="ini section">
          <div class="example">
            <p class="ini bold">Ini Bold</p>
            <p class="ini light">Ini Light</p>
            <p class="ini italic">Ini Italic</p>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;p class=&#x22;ini bold&#x22;&#x3E;Ini Bold&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini light&#x22;&#x3E;Ini Light&#x3C;/p&#x3E;</div>
              <div>&#x3C;p class=&#x22;ini italic&#x22;&#x3E;Ini Italic&#x3C;/p&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden" v-model="code_html_style"></textarea>
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
      code_html_align: `
<p class="ini align justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque obcaecati officia cumque eius quasi quis, delectus eos minus recusandae quae, ullam rerum soluta pariatur eligendi accusantium magnam inventore dignissimos.</p>
<p class="ini align center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque obcaecati officia cumque eius quasi quis, delectus eos minus recusandae quae, ullam rerum soluta pariatur eligendi accusantium magnam inventore dignissimos.</p>
<p class="ini align left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque obcaecati officia cumque eius quasi quis, delectus eos minus recusandae quae, ullam rerum soluta pariatur eligendi accusantium magnam inventore dignissimos.</p>
<p class="ini align right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque obcaecati officia cumque eius quasi quis, delectus eos minus recusandae quae, ullam rerum soluta pariatur eligendi accusantium magnam inventore dignissimos.</p>
`,
      code_html_transform: `
<p class="ini lowercase">Ini Lowercase</p>
<p class="ini uppercase">Ini Uppercase</p>
<p class="ini capitalize">Ini Capitalize</p>
`,
      code_html_style: `
<p class="ini bold">Ini Bold</p>
<p class="ini light">Ini Light</p>
<p class="ini italic">Ini Italic</p>
`
    };
  }
};
</script>

