<style>
    .ini.form{
      margin-bottom: 1rem;
    }
    .ini.form label{
      display: block;
      color: black;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 0.3rem;
    }
    .ini.form .ini.input{
      width: 100% !important;
    }
    .ini.form.search{
      position: relative;
    }
    .ini.form i{
      position: absolute;
    }
    .ini.input{
        max-width: 100% !important;
        background: white !important;
        font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif !important;
        padding: 0.6rem !important;
        border: 1px solid rgba(34,36,38,.15) !important;
        border-radius: .28571429rem !important;
        height: 36px !important;
    }
</style>
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Input</h1>
          <div>Kayak gini kalo mau pakek input bos</div>
          <h4 class="mt-3">Input Login</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <label>Email</label>
                <input type="email" class="ini input" placeholder="Email">
              </div>
              <div class="ini form">
                <label>Password</label>
                <input type="password" class="ini input" placeholder="Email">
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <!-- Area -->
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