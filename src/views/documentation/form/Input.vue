
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Input</h1>
          <div>Kayak gini kalo mau pakek input bos</div>
          <h4 class="mt-3">Default</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <label>Email</label>
                <input type="email" class="ini input" placeholder="Email">
              </div>
              <div class="ini form">
                <label>Password</label>
                <input type="password" class="ini input" placeholder="Password">
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini form&#x22;</span><span class="tag">&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;label&#x3E;</span>Email<span class="tag">&#x3C;/label&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;input</span><span class="class"> type=</span><span class="nclass">&#x22;email&#x22;</span><span class="class"> class=</span><span class="nclass">&#x22;ini input&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Email&#x22;</span><span class="tag">&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini form&#x22;</span><span class="tag">&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;label&#x3E;</span>Password<span class="tag">&#x3C;/label&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;input</span><span class="class"> type=</span>&#x22;password&#x22;<span class="class"> class=</span><span class="nclass">&#x22;ini input&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Password&#x22;</span><span class="tag">&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini form&#x22;&#x3E;
  &#x3C;label&#x3E;Email&#x3C;/label&#x3E;
  &#x3C;input type=&#x22;email&#x22; class=&#x22;ini input&#x22; placeholder=&#x22;Email&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini form&#x22;&#x3E;
  &#x3C;label&#x3E;Password&#x3C;/label&#x3E;
  &#x3C;input type=&#x22;password&#x22; class=&#x22;ini input&#x22; placeholder=&#x22;Password&#x22;&#x3E;
&#x3C;/div&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Rounded</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <input type="text" class="ini input rouneded" placeholder="Search">
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div class="ml-4"><span class="tag">&#x3C;input</span><span class="class"> type=</span><span class="nclass">&#x22;email&#x22;</span><span class="class"> class=</span><span class="nclass">&#x22;ini input rounded&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Search&#x22;</span><span class="tag">&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">&#x3C;input type=&#x22;email&#x22; class=&#x22;ini input rounded&#x22; placeholder=&#x22;Search&#x22;&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Disabled</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <input type="text" class="ini input" placeholder="Search" disabled>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div class="ml-4"><span class="tag">&#x3C;input</span><span class="class"> type=</span><span class="nclass">&#x22;email&#x22;</span><span class="class"> class=</span><span class="nclass">&#x22;ini input disabled&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Search&#x22;</span><span class="class"> disabled</span><span class="tag">&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">&#x3C;input type=&#x22;email&#x22; class=&#x22;ini input rounded&#x22; placeholder=&#x22;Search&#x22; disabled&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">With Icon</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <div class="icon right">
                  <i class="material-icons">search</i>
                  <input type="text" class="ini input rouneded" placeholder="Search">
                </div>
              </div>
              <div class="ini form">
                <div class="icon left">
                  <i class="material-icons">email</i>
                  <input type="email" class="ini input" placeholder="Email">
                </div>
              </div>
              <div class="ini form">
                <div class="icon left">
                  <i class="material-icons">vpn_key</i>
                  <input type="password" class="ini input" placeholder="Password">
                </div>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;ini form&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="class">&#x22;icon right&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5">&#x3C;i <span class="class"> class=</span><span class="nclass">&#x22;material-icons&#x22;</span><span class="tag">&#x3E;</span>search<span class="tag">&#x3C;/i&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;input</span><span class="class">type=&#x22;text&#x22;</span><span class="class"> class=</span><span class="nclass">&#x22;ini input rouneded&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Search&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;ini form&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span>&#x22;icon left&#x22;<span class="tag">&#x3E;</span></div>
                      <div class="ml-5">&#x3C;i <span class="class"> class=</span><span class="nclass">&#x22;material-icons&#x22;</span><span class="tag">&#x3E;</span>email<span class="tag">&#x3C;/i&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;input</span><span class="class">type=&#x22;email&#x22;</span><span class="class"> class=</span><span class="nclass">&#x22;ini input&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Email&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;ini form&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span>&#x22;icon left&#x22;<span class="tag">&#x3E;</span></div>
                      <div class="ml-5">&#x3C;i <span class="class"> class=</span><span class="nclass">&#x22;material-icons&#x22;</span><span class="tag">&#x3E;</span>vpn_key<span class="tag">&#x3C;/i&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;input</span><span class="class">type=&#x22;password&#x22;</span><span class="class"> class=</span><span class="nclass">&#x22;ini input&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Password&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden"></textarea>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Menu from '@/components/Menubar.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Menu
  }
}
</script>