
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Radio</h1>
          <div>Kayak gini kalo mau pakek Radio bos</div>
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