<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Step</h1>
        <div>Kayak gini kalo mau pakek button bos</div>
        <h4 class="mt-3">Default</h4>
        <div class="ini section">
          <div class="example button">
            <div class="ini tabs horizontal">
              <div class="tab header">
                <ul>
                  <li class="ini step openTab active" data-target="#menuh1">
                    <i class="material-icons">payment</i>
                    <div>Billinng</div>
                  </li>
                  <li class="ini step openTab" data-target="#menuh2">
                    <i class="material-icons">local_shipping</i>
                    <div>Shipping</div>
                  </li>
                  <li class="ini step openTab" data-target="#menuh3">
                    <i class="material-icons">next_week</i>
                    <div>Receive</div>
                  </li>
                  <li class="ini step openTab" data-target="#menuh4">
                    <i class="material-icons">check_box</i>
                    <div>Completed</div>
                  </li>
                </ul>
              </div>
              <div class="tab body">
                <div class="content active" id="menuh1">Content Menu 1</div>
                <div class="content" id="menuh2">Content Menu 2</div>
                <div class="content" id="menuh3">Content Menu 3</div>
                <div class="content" id="menuh4">Content Menu 4</div>
              </div>
            </div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;div class=&#x22;ini tabs horizontal&#x22;&#x3E;</div>
              <div class="ml-4">&#x3C;div class=&#x22;tab header&#x22;&#x3E;</div>
              <div class="ml-5">&#x3C;ul&#x3E;</div>
              <div
                class="ml-6"
              >&#x3C;li class=&#x22;ini step openTab active&#x22; data-target=&#x22;#menuh1&#x22;&#x3E;</div>
              <div class="ml-7">&#x3C;i class=&#x22;material-icons&#x22;&#x3E;payment&#x3C;/i&#x3E;</div>
              <div class="ml-7">&#x3C;div&#x3E;Billinng&#x3C;/div&#x3E;</div>
              <div class="ml-6">&#x3C;/li&#x3E;</div>
              <div
                class="ml-6"
              >&#x3C;li class=&#x22;ini step openTab&#x22; data-target=&#x22;#menuh2&#x22;&#x3E;</div>
              <div
                class="ml-7"
              >&#x3C;i class=&#x22;material-icons&#x22;&#x3E;local_shipping&#x3C;/i&#x3E;</div>
              <div class="ml-7">&#x3C;div&#x3E;Shipping&#x3C;/div&#x3E;</div>
              <div class="ml-6">&#x3C;/li&#x3E;</div>
              <div
                class="ml-6"
              >&#x3C;li class=&#x22;ini step openTab&#x22; data-target=&#x22;#menuh3&#x22;&#x3E;</div>
              <div
                class="ml-7"
              >&#x3C;i class=&#x22;material-icons&#x22;&#x3E;next_week&#x3C;/i&#x3E;</div>
              <div class="ml-7">&#x3C;div&#x3E;Receive&#x3C;/div&#x3E;</div>
              <div class="ml-6">&#x3C;/li&#x3E;</div>
              <div
                class="ml-6"
              >&#x3C;li class=&#x22;ini step openTab&#x22; data-target=&#x22;#menuh4&#x22;&#x3E;</div>
              <div
                class="ml-7"
              >&#x3C;i class=&#x22;material-icons&#x22;&#x3E;check_box&#x3C;/i&#x3E;</div>
              <div class="ml-7">&#x3C;div&#x3E;Completed&#x3C;/div&#x3E;</div>
              <div class="ml-6">&#x3C;/li&#x3E;</div>
              <div class="ml-5">&#x3C;/ul&#x3E;</div>
              <div class="ml-4">&#x3C;/div&#x3E;</div>
              <div class="ml-4">&#x3C;div class=&#x22;tab body&#x22;&#x3E;</div>
              <div class="ml-5">
                &#x3C;div class=&#x22;content active&#x22; id=&#x22;menuh1&#x22;&#x3E;
                Content Menu 1
                &#x3C;/div&#x3E;
              </div>
              <div class="ml-5">
                &#x3C;div class=&#x22;content&#x22; id=&#x22;menuh2&#x22;&#x3E;
                Content Menu 2
                &#x3C;/div&#x3E;
              </div>
              <div class="ml-5">
                &#x3C;div class=&#x22;content&#x22; id=&#x22;menuh3&#x22;&#x3E;
                Content Menu 3
                &#x3C;/div&#x3E;
              </div>
              <div class="ml-5">
                &#x3C;div class=&#x22;content&#x22; id=&#x22;menuh4&#x22;&#x3E;
                Content Menu 4
                &#x3C;/div&#x3E;
              </div>
              <div class="ml-4">&#x3C;/div&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden" v-model="code_html"></textarea>
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
      code_html: `
&#x3C;div class=&#x22;ini tabs horizontal&#x22;&#x3E;
    &#x3C;div class=&#x22;tab header&#x22;&#x3E;
        &#x3C;ul&#x3E;
            &#x3C;li class=&#x22;ini step openTab active&#x22; data-target=&#x22;#menuh1&#x22;&#x3E;
                &#x3C;i class=&#x22;material-icons&#x22;&#x3E;payment&#x3C;/i&#x3E;
                &#x3C;div&#x3E;Billinng&#x3C;/div&#x3E;
            &#x3C;/li&#x3E;
            &#x3C;li class=&#x22;ini step openTab&#x22; data-target=&#x22;#menuh2&#x22;&#x3E;
                &#x3C;i class=&#x22;material-icons&#x22;&#x3E;local_shipping&#x3C;/i&#x3E;
                &#x3C;div&#x3E;Shipping&#x3C;/div&#x3E;
            &#x3C;/li&#x3E;
            &#x3C;li class=&#x22;ini step openTab&#x22; data-target=&#x22;#menuh3&#x22;&#x3E;
                &#x3C;i class=&#x22;material-icons&#x22;&#x3E;next_week&#x3C;/i&#x3E;
                &#x3C;div&#x3E;Receive&#x3C;/div&#x3E;
            &#x3C;/li&#x3E;
            &#x3C;li class=&#x22;ini step openTab&#x22; data-target=&#x22;#menuh4&#x22;&#x3E;
                &#x3C;i class=&#x22;material-icons&#x22;&#x3E;check_box&#x3C;/i&#x3E;
                &#x3C;div&#x3E;Completed&#x3C;/div&#x3E;
            &#x3C;/li&#x3E;
        &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;tab body&#x22;&#x3E;
        &#x3C;div class=&#x22;content active&#x22; id=&#x22;menuh1&#x22;&#x3E;
            Content Menu 1
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;content&#x22; id=&#x22;menuh2&#x22;&#x3E;
            Content Menu 2
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;content&#x22; id=&#x22;menuh3&#x22;&#x3E;
            Content Menu 3
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;content&#x22; id=&#x22;menuh4&#x22;&#x3E;
            Content Menu 4
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;                    
&#x3C;/div&#x3E;
      `
    };
  }
};
</script>