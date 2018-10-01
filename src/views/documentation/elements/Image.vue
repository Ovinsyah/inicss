<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Image</h1>
        <div>Dokumentasi dan contoh untuk gambar, agar gambar dapat diatur secara <i>responsive</i> atau mengubah bentuk gambar menjadi lingkaran</div>
        <div class="ini section">
          <h4 class="mt-3"><i>Responsive Image</i></h4>
          <div class="mb-3">Gambar pada inicss telah dibuat dengan max-width: 100%, sehingga gambar mengikuti ukuran elemen penampungnya</div>
          <div class="example">
              <img src="/assets/img/image.png" alt="image" />
          </div>
          <div class="code">
              <div class="ini align right">
                  <button class="ini button copy onCopy">Copy</button>
              </div>
              <div class="area selected">
                  <div><span class="tag">&#x3C;img</span><span class="class"> src=</span> <span class="nclass">&#x22;...&#x22; alt=&#x22;image&#x22;</span> <span class="tag"> /&#x3E;</span></div>
              </div>
              <textarea cols="100" rows="100" class="hidden">&#x3C;img src=&#x22;...&#x22; alt=&#x22;image&#x22; /&#x3E;</textarea>
          </div>

          <h4 class="mt-3"><i>Rounded Image</i></h4>
          <div class="mb-3">Gambar pada ini css dapat dibuat meiliki sisi <i>rounded</i></div>
          <div class="example image-rounded">
              <img class="ini rounded" src="/assets/img/image.png" alt="image" />
          </div>
          <div class="code">
              <div class="ini align right">
                  <button class="ini button copy onCopy">Copy</button>
              </div>
              <div class="area selected">
                  <div><span class="tag">&#x3C;img <span class="class"> div=</span> <span class="nclass">"ini-rounded"</span> </span><span class="class"> src=</span> <span class="nclass">"..." alt=&#x22;image&#x22;</span> <span class="tag"> /&#x3E;</span></div>
              </div>
              <textarea cols="100" rows="100" class="hidden">&#x3C;img class=&#x22;ini rounded&#x22; src=&#x22;/assets/img/image.png&#x22; alt=&#x22;image&#x22; /&#x3E;</textarea>
          </div>

          <h4 class="mt-3"><i>Circle Image</i></h4>
          <div class="mb-3">Gambar pada ini css dapat dibuat meiliki bentuk lingkaran</div>
          <div class="example image-circle">
              <img class="ini circle" src="/assets/img/image.png" alt="image" />
          </div>
          <div class="code">
              <div class="ini align right">
                  <button class="ini button copy onCopy">Copy</button>
              </div>
              <div class="area selected">
                  <div><span class="tag">&#x3C;img <span class="class"> div=</span> <span class="nclass">"ini-circle"</span> </span><span class="class"> src=</span> <span class="nclass">"..." alt=&#x22;image&#x22;</span> <span class="tag"> /&#x3E;</span></div>
              </div>
              <textarea cols="100" rows="100" class="hidden">&#x3C;img class=&#x22;ini circle&#x22; src=&#x22;/assets/img/image.png&#x22; alt=&#x22;image&#x22; /&#x3E;</textarea>
          </div>

          <h4 class="mt-3"><i>Thumbnail Image</i></h4>
          <div class="mb-3">Gambar pada ini css dapat dibuat meiliki bentuk lingkaran</div>
          <div class="example image-thumbnail">
              <img class="ini thumbnail" src="/assets/img/image.png" alt="image" />
          </div>
          <div class="code">
              <div class="ini align right">
                  <button class="ini button copy onCopy">Copy</button>
              </div>
              <div class="area selected">
                  <div><span class="tag">&#x3C;img <span class="class"> div=</span> <span class="nclass">"ini thumbnail"</span> </span><span class="class"> src=</span> <span class="nclass">"..." alt=&#x22;image&#x22;</span> <span class="tag"> /&#x3E;</span></div>
              </div>
              <textarea cols="100" rows="100" class="hidden">&#x3C;img class=&#x22;ini thumbnail&#x22; src=&#x22;/assets/img/image.png&#x22; alt=&#x22;image&#x22; /&#x3E;</textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menubar.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Menu
  }
};
</script>