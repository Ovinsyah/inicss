
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>General</h1>
          <div>Kayak gini kalo mau pakek General bos</div>
          <h4 class="mt-3">Form Login</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <label>Email</label>
                <input type="email" class="ini input" placeholder="Email">
              </div>
              <div class="ini form">
                <label>Password</label>
                <input type="password" class="ini input" placeholder="Password">
              </div>
              <div class="ini form">
                <div class="checkbox">
                  <input class="ini checkbox" type="Checkbox" name="" id="agree">
                  <label for="agree">I agree to the Terms and Conditions</label>
                </div>
              </div>
              <button class="ini button blue">Login</button>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div class="ml-4"><span class="tag">&#x3C;input</span><span class="class"> type=</span><span class="nclass">&#x22;email&#x22;</span><span class="class"> class=</span><span class="nclass">&#x22;ini input rounded&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Search&#x22;</span><span class="tag">&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">&#x3C;input type=&#x22;email&#x22; class=&#x22;ini input rounded&#x22; placeholder=&#x22;Search&#x22;&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Create Topic</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini form">
                <label>Title</label>
                <input type="text" class="ini input" placeholder="Title">
              </div>
              <div class="ini form">
                <label>Categoy</label>
                <select class="ini select">
                  <option class="hidden">Select Categoy</option>
                  <option>Spot</option>
                  <option>Technologi</option>
                  <option>Politic</option>
                </select>
              </div>
              <div class="ini form">
                <label>Status</label>
                <div class="radio">
                  <input type="radio" class="ini radio" name="status" id="on" checked>
                  <label for="on">On</label>
                </div>
                <div class="radio">
                  <input type="radio" class="ini radio" name="status" id="off">
                  <label for="off">off</label>
                </div>
              </div>
              <div class="ini form">
                <label>Description</label>
                <textarea rows="6" class="ini textarea" placeholder="Description"></textarea>
              </div>
              <div class="ini align right">
                <button class="ini button blue">Create</button>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div class="ml-4"><span class="tag">&#x3C;input</span><span class="class"> type=</span><span class="nclass">&#x22;email&#x22;</span><span class="class"> class=</span><span class="nclass">&#x22;ini input rounded&#x22;</span><span class="class"> placeholder=</span><span class="nclass">&#x22;Search&#x22;</span><span class="tag">&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">&#x3C;input type=&#x22;email&#x22; class=&#x22;ini input rounded&#x22; placeholder=&#x22;Search&#x22;&#x3E;</textarea>
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