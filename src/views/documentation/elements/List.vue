<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>List</h1>
          <div>Kayak gini kalo mau pakek List bos</div>
          <h4 class="mt-3">List</h4>
          <div class="ini section">
            <div class="example button">
                <div class="ini list vertical">
                    <ul>
                        <li><a href="">List 1</a></li>
                        <li><a href="">List 2</a></li>
                        <li><a href="">List 3</a></li>
                        <li><a href="">List 4</a></li>
                        <li><a href="">List 5</a></li>
                    </ul>
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