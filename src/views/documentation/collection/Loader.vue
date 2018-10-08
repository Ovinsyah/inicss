<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Basic</h1>
        <div>Dokumentasi dan contoh penggunaan loader inicss</div>
        <div class="ini section">
          <h4 class="mt-3">Basic Loader</h4>
          <div class="example loader">
            <div class="ini loader"></div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              &#x3C;div class=&#x22;ini loader&#x22;&#x3E;&#x3C;/div&#x3E;
            </div>
            <textarea cols="100" rows="100" class="hidden">&#x3C;div class=&#x22;ini loader&#x22;&#x3E;&#x3C;/div&#x3E;</textarea>
          </div>

          <h4 class="mt-3">Loader with overlay</h4>
          <div>Penampung utama perlu ditambahkan style "position: relative", agar overlay tetap berada di dalam penampung utama. Pada contoh di bawah, penampung utama yang digunakan adalah "example loader"</div>
          <div class="example loader" style="position: relative;">
            <div class="ini overlay">
              <div class="ini loader"></div>
            </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem</p>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;div class=&#x22;example loader&#x22; style=&#x22;position: relative;&#x22;&#x3E;</div>
                <div class="ml-4">&#x3C;div class=&#x22;ini overlay&#x22;&#x3E;</div>
                  <div class="ml-5">&#x3C;div class=&#x22;ini loader&#x22;&#x3E;&#x3C;/div&#x3E;</div>
                <div class="ml-4">&#x3C;/div&#x3E;</div>
                <div class="ml-4">&#x3C;p&#x3E;Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem&#x3C;/p&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;example loader&#x22; style=&#x22;position: relative;&#x22;&#x3E;
  &#x3C;div class=&#x22;ini overlay&#x22;&#x3E;
    &#x3C;div class=&#x22;ini loader&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem&#x3C;/p&#x3E;
&#x3C;/div&#x3E;</textarea>
          </div>

          <h4 class="mt-3">Loader with inverse overlay</h4>
          <div class="example loader" style="position: relative;">
            <div class="ini inverse overlay">
              <div class="ini inverse loader"></div>
            </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem</p>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;div class=&#x22;example loader&#x22; style=&#x22;position: relative;&#x22;&#x3E;</div>
                <div class="ml-4">&#x3C;div class=&#x22;ini inverse overlay&#x22;&#x3E;</div>
                  <div class="ml-5">&#x3C;div class=&#x22;ini inverse loader&#x22;&#x3E;&#x3C;/div&#x3E;</div>
                <div class="ml-4">&#x3C;/div&#x3E;</div>
                <div class="ml-4">&#x3C;p&#x3E;Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem&#x3C;/p&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;example loader&#x22; style=&#x22;position: relative;&#x22;&#x3E;
  &#x3C;div class=&#x22;ini inverse overlay&#x22;&#x3E;
    &#x3C;div class=&#x22;ini inverse loader&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem&#x3C;/p&#x3E;
&#x3C;/div&#x3E;</textarea>
          </div>

          <h4 class="mt-3">Loader with text</h4>
          <div class="example loader" style="position: relative;">
            <div class="ini overlay">
              <div class="ini loader text">Loading</div>
            </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem</p>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;div class=&#x22;example loader&#x22; style=&#x22;position: relative;&#x22;&#x3E;</div>
                <div class="ml-4">&#x3C;div class=&#x22;ini overlay&#x22;&#x3E;</div>
                  <div class="ml-5">&#x3C;div class=&#x22;ini loader text&#x22;&#x3E;Loading&#x3C;/div&#x3E;</div>
                <div class="ml-4">&#x3C;/div&#x3E;</div>
                <div class="ml-4">&#x3C;p&#x3E;Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem&#x3C;/p&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;example loader&#x22; style=&#x22;position: relative;&#x22;&#x3E;
  &#x3C;div class=&#x22;ini overlay&#x22;&#x3E;
    &#x3C;div class=&#x22;ini loader text&#x22;&#x3E;Loading&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem&#x3C;/p&#x3E;
&#x3C;/div&#x3E;</textarea>
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