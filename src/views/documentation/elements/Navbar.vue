<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Navbar</h1>
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