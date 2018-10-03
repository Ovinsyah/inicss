
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Textarea</h1>
          <div>Kayak gini kalo mau pakek Textarea bos</div>
          <h4 class="mt-3">Default</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <textarea class="ini textarea" rows="6" placeholder="Your Text"></textarea>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div><span class="tag">&#x3C;textarea</span><span class="class"> class=</span><span class="nclass">&#x22;ini textarea&#x22;</span><span class="class"> rows=</span><span class="nclass">&#x22;6&#x22;</span><span class="class"> placeholder=</span><span class="nclass">"Your Text"</span><span class="tag">&#x3E;&#x3C;/textarea&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">&#x3C;input type=&#x22;email&#x22; class=&#x22;ini input rounded&#x22; placeholder=&#x22;Search&#x22;&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Disabled</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <textarea class="ini textarea" rows="6" placeholder="Your Text" disabled></textarea>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div><span class="tag">&#x3C;textarea</span><span class="class"> class=</span><span class="nclass">&#x22;ini textarea&#x22;</span><span class="class"> rows=</span><span class="nclass">&#x22;6&#x22;</span><span class="class"> placeholder=</span><span class="nclass">"Your Text"</span><span class="class"> disabled</span><span class="tag">&#x3E;&#x3C;/textarea&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">&#x3C;input type=&#x22;email&#x22; class=&#x22;ini input rounded&#x22; placeholder=&#x22;Search&#x22; disabled&#x3E;</textarea>
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