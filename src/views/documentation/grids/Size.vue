<template>
  <div class="content documentation">
      <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Grid</h1>
          <div>Kayak gini kalo mau pakek grid bos</div>
          <h4 class="mt-3">Gird no size</h4>
          <div class="ini section">
            <div class="example grids">
                <div class="ini grids">
                    <div class="grid of-3"></div>
                    <div class="grid of-6"></div>
                    <div class="grid of-3"></div>
                </div>
                <div class="ini grids mt-3">
                    <div class="grid of-3"></div>
                    <div class="grid of-9"></div>
                </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                    <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass"> &#x22;ini grids&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-3&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-6&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-3&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></div>
                    <div><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></div>
                    <br>
                    <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass"> &#x22;ini grids&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-3&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-9&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></div>
                    <div><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
<span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass"> &#x22;ini grids&#x22;</span><span class="tag">&#x3E;</span>
    <span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-3&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span>
    <span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-6&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span>
    <span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-3&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span>
<span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span>

<span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass"> &#x22;ini grids&#x22;</span><span class="tag">&#x3E;</span>
    <span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-3&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span>
    <span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;grid of-9&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span>
<span class="tag">&#x3C;/div<span class="tag">&#x3E;</span></span></textarea>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Menu
  }
}
</script>

