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
              
            </div>
            <textarea cols="100" rows="100" class="hidden">
            </textarea>
          </div>

          <h4 class="mt-3">Loader with overlay and loader with inverse color</h4>
          <div class="example loader" style="position: relative;">
            <div class="ini overlay">
              <div class="ini inverse loader"></div>
            </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at tempore numquam sint adipisci totam ratione voluptatibus laudantium. Recusandae, qui. Adipisci voluptatem delectus incidunt nisi officia officiis illum assumenda aspernatur! lorem</p>
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