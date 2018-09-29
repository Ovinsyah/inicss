<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid dolorem quod maiores quae laudantium voluptates dolores similique officiis iure voluptate magni placeat nihil numquam consectetur vero architecto, ad asperiores!
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

