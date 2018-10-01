<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Image</h1>
        <div>Dokumentasi dan contoh untuk gambar, agar gambar dapat diatur secara responsive atau mengubah bentuk gambar menjadi lingkaran</div>
        <h4 class="mt-3">Responsive Image</h4>
        <div>Jika gambar responsive gambar akan mengikuti ukuran dari penampung gambar tersebut</div>
        <div class="example container">
          <div class="ini grids">
            <div class="grid of-12">
              
            </div>
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