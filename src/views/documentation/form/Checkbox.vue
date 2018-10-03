
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Checkbox</h1>
          <div>Kayak gini kalo mau pakek Checkbox bos</div>
          <h4 class="mt-3">Default</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <div class="ini form">
                  <label class="label checkbox">Checkbox</label>
                  <input class="ini checkbox" type="Checkbox" name="" checked>
                </div>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  
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