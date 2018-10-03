
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Checkbox</h1>
          <div>Kayak gini kalo mau pakek Checkbox bos</div>
          <h4 class="mt-3">Horizontal</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                  <div class="checkbox">
                    <input class="ini checkbox" type="Checkbox" name="h-color" id="h-blue" checked>
                    <label for="h-blue">Blue</label>
                  </div>
                  <div class="checkbox">
                    <input class="ini checkbox" type="Checkbox" name="h-color" id="h-red">
                    <label for="h-red">Red</label>
                  </div>
                  <div class="checkbox">
                    <input class="ini checkbox" type="Checkbox" name="h-color" id="h-yellow">
                    <label for="h-yellow">Yellow</label>
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
          <h4 class="mt-3">Vertical</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                  <div class="checkbox">
                    <input class="ini checkbox" type="Checkbox" name="v-color" id="v-blue" checked>
                    <label for="v-blue">Blue</label>
                  </div>
              </div>
              <div class="ini form">
                  <div class="checkbox">
                    <input class="ini checkbox" type="Checkbox" name="v-color" id="v-red">
                    <label for="v-red">Red</label>
                  </div>
              </div>
              <div class="ini form">
                  <div class="checkbox">
                    <input class="ini checkbox" type="Checkbox" name="v-color" id="v-yellow">
                    <label for="v-yellow">Yellow</label>
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
          <h4 class="mt-3">Toggle</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <div class="ini form">
                  <div class="toggle">
                    <input class="ini toggle" type="checkbox" name="t-color" id="t-blue" checked>
                    <label for="t-blue">Blue</label>
                  </div>
                </div>
                <div class="ini form">
                  <div class="toggle">
                    <input class="ini toggle" type="checkbox" name="t-color" id="t-red">
                    <label for="t-red">Red</label>
                  </div>
                </div>
                <div class="ini form">
                  <div class="toggle">
                    <input class="ini toggle" type="checkbox" name="t-color" id="t-yellow">
                    <label for="t-yellow">Yellow</label>
                  </div>
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
          <h4 class="mt-3">Slider</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <div class="ini form">
                  <div class="slider">
                    <input class="ini slider" type="checkbox" name="s-color" id="s-blue" checked>
                    <label for="s-blue">Blue</label>
                  </div>
                </div>
                <div class="ini form">
                  <div class="slider">
                    <input class="ini slider" type="checkbox" name="s-color" id="s-red">
                    <label for="s-red">Red</label>
                  </div>
                </div>
                <div class="ini form">
                  <div class="slider">
                    <input class="ini slider" type="checkbox" name="s-color" id="s-yellow">
                    <label for="s-yellow">Yellow</label>
                  </div>
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