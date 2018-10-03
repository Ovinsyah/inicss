
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Radio</h1>
          <div>Kayak gini kalo mau pakek Radio bos</div>
          <h4 class="mt-3">Horizontal</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <div class="ini form">
                  <div class="radio">
                    <input class="ini radio" type="radio" name="hgender" id="hmale">
                    <label for="hmale">Male</label>
                  </div>
                  <div class="radio">
                    <input class="ini radio" type="radio" name="hgender" id="hfemale">
                    <label for="hfemale">Female</label>
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
          <h4 class="mt-3">Vertical</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <div class="ini form">
                  <div class="radio">
                    <input class="ini radio" type="radio" name="vgender" id="vmale">
                    <label for="vmale">Male</label>
                  </div>
                </div>
                <div class="ini form">
                  <div class="radio">
                    <input class="ini radio" type="radio" name="vgender" id="vfemale">
                    <label for="vfemale">Female</label>
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
          <h4 class="mt-3">Toggle</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <div class="ini form">
                  <div class="toggle">
                    <input class="ini toggle" type="radio" name="switch" id="on">
                    <label for="on">On</label>
                  </div>
                </div>
                <div class="ini form">
                  <div class="toggle">
                    <input class="ini toggle" type="radio" name="switch" id="off">
                    <label for="off">Off</label>
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
                    <input class="ini slider" type="radio" name="switch" id="on">
                    <label for="on">On</label>
                  </div>
                </div>
                <div class="ini form">
                  <div class="slider">
                    <input class="ini slider" type="radio" name="switch" id="off">
                    <label for="off">Off</label>
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