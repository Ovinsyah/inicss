<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Step</h1>
          <div>Kayak gini kalo mau pakek button bos</div>
          <h4 class="mt-3">Default</h4>
          <div class="ini section">
            <div class="example button">
                <div class="ini tabs horizontal">
                    <div class="tab header">
                        <ul>
                            <li class="ini step openTab active" data-target="#menuh1">
                                <i class="material-icons">payment</i>
                                <div>Billinng</div>
                            </li>
                            <li class="ini step openTab" data-target="#menuh2">
                                <i class="material-icons">local_shipping</i>
                                <div>Shipping</div>
                            </li>
                            <li class="ini step openTab" data-target="#menuh3">
                                <i class="material-icons">next_week</i>
                                <div>Receive</div>
                            </li>
                            <li class="ini step openTab" data-target="#menuh4">
                                <i class="material-icons">check_box</i>
                                <div>Completed</div>
                            </li>
                        </ul>
                    </div>
                    <div class="tab body">
                        <div class="content active" id="menuh1">
                            Content Menu 1
                        </div>
                        <div class="content" id="menuh2">
                            Content Menu 2
                        </div>
                        <div class="content" id="menuh3">
                            Content Menu 3
                        </div>
                        <div class="content" id="menuh4">
                            Content Menu 4
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