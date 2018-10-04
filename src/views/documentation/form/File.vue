
<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>File</h1>
          <div>Kayak gini kalo mau pakek File bos</div>
          <h4 class="mt-3">Single Upload Image</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini upload file">
                <img src="/assets/img/image.png" class="view image" id="viewImg">
                <input type="file" accept="image/*" id="uploadImg" class="hidden uploadImage" data-target="#viewImg">
                <label class="ini button upload" for="uploadImg">Chose File</label>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div><span class="tag">&#x3C;textarea</span><span class="class"> class=</span><span class="nclass">&#x22;ini textarea&#x22;</span><span class="class"> rows=</span><span class="nclass">&#x22;6&#x22;</span><span class="class"> placeholder=</span><span class="nclass">"Your Text"</span><span class="tag">&#x3E;&#x3C;/textarea&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">&#x3C;input type=&#x22;email&#x22; class=&#x22;ini input rounded&#x22; placeholder=&#x22;Search&#x22;&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Single Upload Image Hover</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini upload file hover">
                <img src="/assets/img/image.png" class="view image" id="viewImgHover">
                <input type="file" accept="image/*" id="uploadImgHover" class="hidden uploadImage" data-target="#viewImgHover">
                <label class="ini button upload" for="uploadImgHover">Chose File</label>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div><span class="tag">&#x3C;textarea</span><span class="class"> class=</span><span class="nclass">&#x22;ini textarea&#x22;</span><span class="class"> rows=</span><span class="nclass">&#x22;6&#x22;</span><span class="class"> placeholder=</span><span class="nclass">"Your Text"</span><span class="tag">&#x3E;&#x3C;/textarea&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">&#x3C;input type=&#x22;email&#x22; class=&#x22;ini input rounded&#x22; placeholder=&#x22;Search&#x22;&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Multiple Upload Image</h4>
          <div class="ini section">
            <div class="example button">
              <div class="ini upload file multiple">
                <input type="file" accept="image/*" multiple id="uploadMultiple" class="hidden uploadImageMultiple">
                <div class="view many images">
                  <label for="uploadMultiple" class="ini button multiple">+</label>
                </div>
              </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div><span class="tag">&#x3C;textarea</span><span class="class"> class=</span><span class="nclass">&#x22;ini textarea&#x22;</span><span class="class"> rows=</span><span class="nclass">&#x22;6&#x22;</span><span class="class"> placeholder=</span><span class="nclass">"Your Text"</span><span class="tag">&#x3E;&#x3C;/textarea&#x3E;</span></div>
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