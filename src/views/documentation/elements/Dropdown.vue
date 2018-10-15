<style>
</style>

<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Dropdown</h1>
        <div class="caption">
          <div>
            <i class="inicss"><b>Dropdown</b></i> merupakan elemen navigasi yang banyak digunakan pada <i class="inicss">website</i>, karena berfungsi untuk menampilkan daftar-daftar menu lainnya.
          </div>
        </div>
        <hr class="inicss">
        <div class="ini message compact inicss">
                <div class="header">Menggunakan Javascript</div>
                <div class="body">
                    <i class="inicss"><b>IniCss</b></i> menyediakan Javascript pada komponen <i class="inicss"><b>dropdown</b></i>.<br>
                    Dengan logika menggunakan <i class="inicss">event click</i> pada <code class="inicss">.openDropdown</code> untuk menambahkan <code class="inicss">.active</code> di <code class="inicss">.ini.dropdown</code>.
                </div>
          </div>
        <h4 class="mt-3">Default Dropdown</h4>
        <div class="example dropdown">
          <div class="ini dropdown">
            <button class="ini button blue openDropdown">Basic Dropdown</button>
            <div class="menu">
              <a class="item" href="#">This ini Dropdown </a>
              <a class="item" href="#">This ini Dropdown Number Two</a>
              <a class="item" href="#">And This Oteher Item</a>
            </div>
          </div>
          <div class="ini dropdown arrow">
            <button class="ini button black openDropdown">Arrow Dropdown</button>
            <div class="menu">
              <a class="item" href="#">This ini Dropdown </a>
              <a class="item" href="#">This ini Dropdown Number Two</a>
              <a class="item" href="#">And This Oteher Item</a>
            </div>
          </div>
        </div>
        <div class="code">
          <div class="ini align right">
            <button class="ini button copy onCopy">Copy</button>
          </div>
          <div class="area selected">
              <div><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini dropdown&#x22;</span><span class="tag">&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button blue openDropdown &#x22;</span><span class="tag">&#x3E;</span>Basic Dropdown<span class="tag">&#x3C;/button&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;menu&#x22;</span><span class="tag">&#x3E;</span></div>
              <div class="ml-5"><span class="tag">&#x3C;a</span><span class="class"> class=</span><span class="nclass">&#x22;item&#x22;</span><span class="class"> href=</span><span class="nclass">&#x22;#&#x22;</span></span><span class="tag">&#x3E;</span> ini Dropdown<span class="tag">&#x3C;/a&#x3E;</span></div>
              <div class="ml-5"><span class="tag">&#x3C;a</span><span class="class"> class=</span><span class="nclass">&#x22;item&#x22;</span><span class="class"> href=</span><span class="nclass">&#x22;#&#x22;</span></span><span class="tag">&#x3E;</span> ini Dropdown Number Two<span class="tag">&#x3C;/a&#x3E;</span></div>
              <div class="ml-5"><span class="tag">&#x3C;a</span><span class="class"> class=</span><span class="nclass">&#x22;item&#x22;</span><span class="class"> href=</span><span class="nclass">&#x22;#&#x22;</span></span><span class="tag">&#x3E;</span>And This Oteher Item<span class="tag">&#x3C;/a&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
              <div><span class="tag">&#x3C;/div&#x3E;</span></div>
              <div><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini dropdown arrow&#x22;</span><span class="tag">&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button black openDropdown &#x22;</span><span class="tag">&#x3E;</span>Arrow Dropdown<span class="tag">&#x3C;/button&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;menu&#x22;</span><span class="tag">&#x3E;</span></div>
              <div class="ml-5"><span class="tag">&#x3C;a</span><span class="class"> class=</span><span class="nclass">&#x22;item&#x22;</span><span class="class"> href=</span><span class="nclass">&#x22;#&#x22;</span></span><span class="tag">&#x3E;</span> ini Dropdown<span class="tag">&#x3C;/a&#x3E;</span></div>
              <div class="ml-5"><span class="tag">&#x3C;a</span><span class="class"> class=</span><span class="nclass">&#x22;item&#x22;</span><span class="class"> href=</span><span class="nclass">&#x22;#&#x22;</span></span><span class="tag">&#x3E;</span> ini Dropdown Number Two<span class="tag">&#x3C;/a&#x3E;</span></div>
              <div class="ml-5"><span class="tag">&#x3C;a</span><span class="class"> class=</span><span class="nclass">&#x22;item&#x22;</span><span class="class"> href=</span><span class="nclass">&#x22;#&#x22;</span></span><span class="tag">&#x3E;</span>And This Oteher Item<span class="tag">&#x3C;/a&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
              <div><span class="tag">&#x3C;/div&#x3E;</span></div>
          </div>
          <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini dropdown&#x22;&#x3E;
  &#x3C;button class=&#x22;ini button blue openDropdown &#x22;&#x3E;Basic Dropdown&#x3C;/button&#x3E;
  &#x3C;div class=&#x22;menu&#x22;&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E; ini Dropdown&#x3C;/a&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E; ini Dropdown Number Two&#x3C;/a&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E;And This Oteher Item&#x3C;/a&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini dropdown arrow&#x22;&#x3E;
  &#x3C;button class=&#x22;ini button black openDropdown &#x22;&#x3E;Arrow Dropdown&#x3C;/button&#x3E;
  &#x3C;div class=&#x22;menu&#x22;&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E; ini Dropdown&#x3C;/a&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E; ini Dropdown Number Two&#x3C;/a&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E;And This Oteher Item&#x3C;/a&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
        </div>

        <h4 class="mt-3">Dropdown with Different Icon and split button dropdown, with material icons</h4>
        <div class="example dropdown">
          <div class="ini dropdown icon">
            <button class="ini button blue openDropdown">
              <span class="text">Dropdown Blue</span>
              <i class="material-icons">arrow_drop_down</i>
            </button>
            <div class="menu">
              <a class="item" href="#">Item One </a>
              <a class="item" href="#">Item Two</a>
              <a class="item" href="#">Item Three</a>
            </div>
          </div>
          <div class="ini dropdown icon">
            <button class="ini button black openDropdown">
              <span class="text">Dropdown black</span>
              <i class="material-icons">expand_more</i>
            </button>
            <div class="menu">
              <a class="item" href="#">Item One </a>
              <a class="item" href="#">Item Two</a>
              <a class="item" href="#">Item Three</a>
            </div>
          </div>
          <div class="ini dropdown icon">
            <button class="ini button red openDropdown">
              <i class="material-icons">arrow_drop_down</i>
              <span class="text">Dropdown Red</span>
            </button>
            <div class="menu">
              <a class="item" href="#">Item One </a>
              <a class="item" href="#">Item Two</a>
              <a class="item" href="#">Item Three</a>
            </div>
          </div>
        </div>
        <div class="code">
          <div class="ini align right">
            <button class="ini button copy onCopy">Copy</button>
          </div>
          <div class="area selected">
            <div><span class="tag">&#x3C;div</span><span class="nclass"> class=</span><span class="nclass">&#x22;ini dropdown icon&#x22;</span>&#x3E;</div>
              <div class="ml-4"><span class="tag">&#x3C;button</span><span class="nclass"> class=</span><span class="nclass">&#x22;ini button blue openDropdown&#x22;</span>&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;span</span><span class="nclass"> class=</span><span class="nclass">&#x22;text&#x22;</span>&#x3E;Dropdown Blue<span class="tag">&#x3C;/span&#x3E;</span></div>
                <div class="ml-5"><span class="tag">&#x3C;i</span><span class="nclass"> class=</span><span class="nclass">&#x22;material-icons&#x22;</span>&#x3E;arrow_drop_down&#x3C;/i&#x3E;</div>
              <div class="ml-4"><span class="tag">&#x3C;/button&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="nclass"> class=</span><span class="nclass">&#x22;menu&#x22;</span>&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item One &#x3C;/a&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item Two&#x3C;/a&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item Three&#x3C;/a&#x3E;</div>
              <div class="ml-4">&#x3C;/div&#x3E;</div>
            <div>&#x3C;/div&#x3E;</div>
            <div><span class="tag">&#x3C;div</span> <span class="nclass"> class=</span><span class="nclass">&#x22;ini dropdown icon&#x22;</span>&#x3E;</div>
              <div class="ml-4"><span class="tag">&#x3C;button</span><span class="nclass"> class=</span><span class="nclass">&#x22;ini button black openDropdown&#x22;</span>&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;span</span><span class="nclass"> class=</span><span class="nclass">&#x22;text&#x22;</span>&#x3E;Dropdown black<span class="tag">&#x3C;/span&#x3E;</span></div>
                <div class="ml-5"><span class="tag">&#x3C;i</span><span class="nclass"> class=</span><span class="nclass">&#x22;material-icons&#x22;</span>&#x3E;expand_more&#x3C;/i&#x3E;</div>
              <div class="ml-4"><span class="tag">&#x3C;/button&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="nclass"> class=</span><span class="nclass">&#x22;menu&#x22;</span>&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item One &#x3C;/a&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item Two&#x3C;/a&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item Three&#x3C;/a&#x3E;</div>
              <div class="ml-4">&#x3C;/div&#x3E;</div>
            <div>&#x3C;/div&#x3E;</div>
            <div><span class="tag">&#x3C;div</span> <span class="nclass"> class=</span><span class="nclass">&#x22;ini dropdown icon&#x22;</span>&#x3E;</div>
              <div class="ml-4"><span class="tag">&#x3C;button</span><span class="nclass"> class=</span><span class="nclass">&#x22;ini button red openDropdown&#x22;</span>&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;i</span><span class="nclass"> class=</span><span class="nclass">&#x22;material-icons&#x22;</span>&#x3E;arrow_drop_down&#x3C;/i&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;span</span> <span class="nclass"> class=</span><span class="nclass">&#x22;text&#x22;</span>&#x3E;Dropdown Red<span class="tag">&#x3C;/span&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;/button&#x3E;</span></div>
              <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="nclass"> class=</span><span class="nclass">&#x22;menu&#x22;</span>&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item One &#x3C;/a&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item Two&#x3C;/a&#x3E;</div>
                <div class="ml-5"><span class="tag">&#x3C;a</span> <span class="nclass"> class=</span><span class="nclass">&#x22;item&#x22;</span> href=&#x22;#&#x22;&#x3E;Item Three&#x3C;/a&#x3E;</div>
              <div class="ml-4">&#x3C;/div&#x3E;</div>
            <div>&#x3C;/div&#x3E;</div>
          </div>
          <textarea cols="100" rows="100" class="hidden">
</textarea>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menubar.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Footer,
    Menu
  }
};
</script>