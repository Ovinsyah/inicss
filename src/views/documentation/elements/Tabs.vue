<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Tabs</h1>
          <div>Kayak gini kalo mau pakek tabs bos</div>
          <h4 class="mt-3">Horizontal Tabs</h4>
          <div class="ini section">
            <div class="example button">
                <div class="ini tabs horizontal">
                    <div class="tab header">
                        <ul>
                            <li class="openTab active" data-target="#menuh1">
                                <i class="material-icons">assessment</i>
                                <div>Menu 1</div>
                            </li>
                            <li class="openTab" data-target="#menuh2">
                                <i class="material-icons">assessment</i>
                                <div>Menu 2</div>
                            </li>
                            <li class="openTab" data-target="#menuh3">
                                <i class="material-icons">assessment</i>
                                <div>Menu 3</div>
                            </li>
                            <li class="openTab" data-target="#menuh4">
                                <i class="material-icons">assessment</i>
                                <div>Menu 4</div>
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
          <h4 class="mt-3">Vertical Tabs</h4>
          <div class="ini section">
            <div class="example button">
                <div class="ini tabs vertical">
                    <div class="tab header">
                        <ul>
                            <li class="openTab active" data-target="#menuv1">
                                <i class="material-icons">assessment</i>
                                <div>Menu 1</div>
                            </li>
                            <li class="openTab" data-target="#menuv2">
                                <i class="material-icons">assessment</i>
                                <div>Menu 2</div>
                            </li>
                            <li class="openTab" data-target="#menuv3">
                                <i class="material-icons">assessment</i>
                                <div>Menu 3</div>
                            </li>
                            <li class="openTab" data-target="#menuv4">
                                <i class="material-icons">assessment</i>
                                <div>Menu 4</div>
                            </li>
                        </ul>
                    </div>
                    <div class="tab body">
                        <div class="content active" id="menuv1">
                            Content Menu 1
                        </div>
                        <div class="content" id="menuv2">
                            Content Menu 2
                        </div>
                        <div class="content" id="menuv3">
                            Content Menu 3
                        </div>
                        <div class="content" id="menuv4">
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