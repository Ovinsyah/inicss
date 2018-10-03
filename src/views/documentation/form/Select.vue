
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Select</h1>
          <div>Kayak gini kalo mau pakek Select bos</div>
          <h4 class="mt-3">Default</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <select class="ini select">
                  <option class="hidden">Select Show</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  Area
                </div>
                <textarea cols="100" rows="100" class="hidden">
                  </textarea>
            </div>
          </div>
          <h4 class="mt-3">Disabled</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <select class="ini select" disabled>
                  <option class="hidden">Select Show</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  Area
                </div>
                <textarea cols="100" rows="100" class="hidden">
                  </textarea>
            </div>
          </div>
          <h4 class="mt-3">With option disabled</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <select class="ini select">
                  <option class="hidden">Select Show</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option disabled>4</option>
                </select>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  Area
                </div>
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