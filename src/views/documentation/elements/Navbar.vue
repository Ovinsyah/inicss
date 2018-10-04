<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Navbar</h1>
          <div>Kayak gini kalo mau pakek Navbar bos</div>
          <h4 class="mt-3">Default</h4>
          <div class="ini section">
            <div class="example button">
              <nav class="ini navbar">
                <div class="navbar brand">
                    <a href="">
                      <img src="/assets/img/logo.png" alt="">
                    </a>
                </div>
                <div class="ini menus">
                    <div class="menu left">
                        <a href="">Home</a>
                        <a href="">About</a>
                    </div>
                    <div class="menu center">
                      <div class="ini form">
                        <div class="icon right">
                          <i class="material-icons">search</i>
                          <input type="text" class="ini input rouneded" placeholder="Search">
                        </div>
                      </div>
                    </div>
                    <div class="menu right">
                        <button class="ini button o-inicss">Register</button>
                        <button class="ini button inicss">Login</button>
                    </div>
                </div>
              </nav>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  Area Selected
                </div>
                <textarea cols="100" rows="100" class="hidden"></textarea>
            </div>
          </div>
          <h4 class="mt-3">Responsive</h4>
          <div class="ini section">
            <div class="example button">
              <nav class="ini navbar responsive">
                <div class="navbar brand">
                  <a href="">
                    <img src="/assets/img/logo.png" alt="">
                  </a>
                </div>
                <button class="ini button hamburger openHamburger" data-target="#withMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="ini menus" id="withMenu">
                    <div class="menu left">
                        <a href="">Home</a>
                        <a href="">About</a>
                    </div>
                    <div class="menu center">
                      <div class="ini form">
                        <div class="icon right">
                          <i class="material-icons">search</i>
                          <input type="text" class="ini input rouneded" placeholder="Search">
                        </div>
                      </div>
                    </div>
                    <div class="menu right">
                        <button class="ini button o-inicss">Register</button>
                        <button class="ini button inicss">Login</button>
                    </div>
                </div>
              </nav>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  Area Selected
                </div>
                <textarea cols="100" rows="100" class="hidden"></textarea>
            </div>
          </div>
          <h4 class="mt-3">Responsive Sidemenu</h4>
          <div class="ini section">
            <div class="example button">
              <nav class="ini navbar responsive">
                <div class="navbar brand">
                  <a href="">
                    <img src="/assets/img/logo.png" alt="">
                  </a>
                </div>
                <button class="ini button hamburger openHamburger" data-target="#withSideMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="ini menus side" id="withSideMenu">
                    <div class="menu left">
                        <a href="">Home</a>
                        <a href="">About</a>
                    </div>
                    <div class="menu center">
                      <div class="ini form">
                        <div class="icon right">
                          <i class="material-icons">search</i>
                          <input type="text" class="ini input rouneded" placeholder="Search">
                        </div>
                      </div>
                    </div>
                    <div class="menu right">
                        <button class="ini button o-inicss">Register</button>
                        <button class="ini button inicss">Login</button>
                    </div>
                </div>
              </nav>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  Area Selected
                </div>
                <textarea cols="100" rows="100" class="hidden"></textarea>
            </div>
          </div>
          <h4 class="mt-3">Position</h4>
          <div class="ini section">
            <div class="example button">
              <nav class="ini navbar responsive">
                <div class="navbar brand">
                  <a href="">
                    <img src="/assets/img/logo.png" alt="">
                    Fixed
                  </a>
                </div>
              </nav>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  Area Selected
                </div>
                <textarea cols="100" rows="100" class="hidden"></textarea>
            </div>
          </div>
          <div class="ini section">
            <div class="example button">
              <nav class="ini navbar responsive">
                <div class="navbar brand">
                  <a href="">
                    <img src="/assets/img/logo.png" alt="">
                    Sticky
                  </a>
                </div>
              </nav>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  Area Selected
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