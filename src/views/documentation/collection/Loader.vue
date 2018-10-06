<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Loader</h1>
        <div>Dokumentasi dan contoh penggunaan loader inicss</div>
        <h4 class="mt-3">Default Loader</h4>
        <div class="ini section">
          <div class="example progress">

          </div>
          <div class="code">

            <textarea cols="100" rows="100" class="hidden">

            </textarea>
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