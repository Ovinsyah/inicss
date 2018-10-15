<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Message</h1>
          <div class="caption">
            <div>
                <i class="inicss"><b>Message</b></i> biasanya digunakan untuk menampilkan informasi yang menjelaskan suatu kejadian didalam aplikasi.
            </div>
          </div>
          <hr class="inicss">
          <div class="ini message compact inicss">
                <div class="header">Menggunakan Javascript</div>
                <div class="body">
                    <i class="inicss"><b>IniCss</b></i> menyediakan Javascript pada komponen <i class="inicss"><b>Message</b></i>.<br>
                    Dengan logika menggunakan <i class="inicss">event click</i> pada <code class="inicss">.closeMessage</code> untuk menambahkan <code class="inicss">.hidden</code> di <code class="inicss">.ini.message</code>.
                </div>
          </div>
          <h3 class="mt-4">Default Message</h3>
            <div><i class="inicss"><b>Message</b></i> dengan warna <i class="inicss">border</i> dan <i class="inicss">background</i> yang beraneka ragam.</div>
          <div class="ini section">
            <div class="example button">
                <div class="ini message basic">
                    <i class="material-icons close closeMessage">close</i>
                    <div class="header">Basic Message</div>
                    <div class="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aperiam facere architecto distinctio accusamus in facilis nulla quisquam reprehenderit, hic exercitationem dolorem itaque optio vitae blanditiis fugit rerum quod quas.
                    </div>
                </div>
                <div class="ini message success">
                    <i class="material-icons close closeMessage">close</i>
                    <div class="header">Success Message</div>
                    <div class="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aperiam facere architecto distinctio accusamus in facilis nulla quisquam reprehenderit, hic exercitationem dolorem itaque optio vitae blanditiis fugit rerum quod quas.
                    </div>
                </div>
                <div class="ini message info">
                    <i class="material-icons close closeMessage">close</i>
                    <div class="header">Info Message</div>
                    <div class="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aperiam facere architecto distinctio accusamus in facilis nulla quisquam reprehenderit, hic exercitationem dolorem itaque optio vitae blanditiis fugit rerum quod quas.
                    </div>
                </div>
                <div class="ini message danger">
                    <i class="material-icons close closeMessage">close</i>
                    <div class="header">Danger Message</div>
                    <div class="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aperiam facere architecto distinctio accusamus in facilis nulla quisquam reprehenderit, hic exercitationem dolorem itaque optio vitae blanditiis fugit rerum quod quas.
                    </div>
                </div>
                <div class="ini message warning">
                    <i class="material-icons close closeMessage">close</i>
                    <div class="header">Warning Message</div>
                    <div class="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aperiam facere architecto distinctio accusamus in facilis nulla quisquam reprehenderit, hic exercitationem dolorem itaque optio vitae blanditiis fugit rerum quod quas.
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
          </div><h3 class="mt-4">Compact Message</h3>
            <div><i class="inicss"><b>Message</b></i> dengan <i class="inicss">style background</i> pada bagian <i class="inicss">header</i> </div>
          <div class="ini section">
            <div class="example button">
                <div class="ini message compact basic">
                    <i class="material-icons close closeMessage">close</i>
                    <div class="header">Basic Message</div>
                    <div class="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aperiam facere architecto distinctio accusamus in facilis nulla quisquam reprehenderit, hic exercitationem dolorem itaque optio vitae blanditiis fugit rerum quod quas.
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
    <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menubar.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Footer,
    Menu
  }
};
</script>