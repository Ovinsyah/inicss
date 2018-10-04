<style>

</style>

<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Dropdown</h1>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</div>
          <h4 class="mt-3">Basic Dropdown</h4>
          <div class="example">
            <div class="ini dropdown">
              <button class="ini button blue openDropdown">Dropdown Button</button>
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
                  <div>
                    <div>&#x3C;div class=&#x22;ini dropdown&#x22;&#x3E;</div>
                      <div class="ml-4">&#x3C;button class=&#x22;ini button blue&#x22;&#x3E;Dropdown Button&#x3C;/button&#x3E;</div>
                      <div class="ml-4">&#x3C;div class=&#x22;menu&#x22;&#x3E;</div>
                        <div class="ml-5">&#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E;This ini Dropdown &#x3C;/a&#x3E;</div>
                        <div class="ml-5">&#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E;This ini Dropdown Number Two&#x3C;/a&#x3E;</div>
                        <div class="ml-5">&#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E;And This Oteher Item&#x3C;/a&#x3E;</div>
                      <div class="ml-4">&#x3C;/div&#x3E;</div>
                    <div>&#x3C;/div&#x3E;</div>
                  </div>
              </div>
              <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini dropdown&#x22;&#x3E;
  &#x3C;button class=&#x22;ini button blue&#x22;&#x3E;Dropdown Button&#x3C;/button&#x3E;
  &#x3C;div class=&#x22;menu&#x22;&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E;This ini Dropdown &#x3C;/a&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E;This ini Dropdown Number Two&#x3C;/a&#x3E;
    &#x3C;a class=&#x22;item&#x22; href=&#x22;#&#x22;&#x3E;And This Oteher Item&#x3C;/a&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
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