<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Container</h1>
          <div>Kayak gini kalo mau pakek container bos</div>
          <h4 class="mt-3">Container</h4>
          <div class="ini section">
            <div class="example container">
                <div class="ini container"></div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                    <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;ini container&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4">&#x3C;!-- Your content --&#x3E;</div>
                    <div><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini container&#x22;&#x3E;
    &#x3C;!-- Your content --&#x3E;
&#x3C;/div&#x3E;</textarea>
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

