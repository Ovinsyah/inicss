<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Loader</h1>
        <div>Dokumentasi dan contoh penggunaan loader inicss</div>
        <h4 class="mt-3">Default Progress Bar</h4>
        <div class="ini section">
          <div class="example progress">
            <div class="ini progress">
              <div class="bar" style="width: 0%;"></div>
            </div>
            <div class="ini progress">
              <div class="bar" style="width: 25%;">25%</div>
            </div>
            <div class="ini progress">
              <div class="bar" style="width: 50%;">50%</div>
            </div>
            <div class="ini progress">
              <div class="bar" style="width: 75%;">75%</div>
            </div>
            <div class="ini progress">
              <div class="bar" style="width: 100%;">100%</div>
            </div>
          </div>
          <div class="code">

            <textarea cols="100" rows="100" class="hidden">

            </textarea>
          </div>

          <h4 class="mt-3">Colored Progress Bar</h4>
          <div class="example progress">
            <div class="ini progress">
              <div class="bar blue" style="width: 25%;">25%</div>
            </div>
            <div class="ini progress">
              <div class="bar black" style="width: 40%;">40%</div>
            </div>
            <div class="ini progress">
              <div class="bar red" style="width: 75%;">75%</div>
            </div>
            <div class="ini progress">
              <div class="bar green" style="width: 40%;">40%</div>
            </div>
            <div class="ini progress">
              <div class="bar purple" style="width: 30%;">30%</div>
            </div>
            <div class="ini progress">
              <div class="bar carrot" style="width: 60%;">60%</div>
            </div>
            <div class="ini progress">
              <div class="bar orange" style="width: 20%;">20%</div>
            </div>
            <div class="ini progress">
              <div class="bar gray" style="width: 80%;">80%</div>
            </div>
            <div class="ini progress">
              <div class="bar midnight" style="width: 10%;">10%</div>
            </div>
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