<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Card</h1>
        <div>Dokumentasi dan contoh untuk menggunakan card pada ini css</div>
        <div class="ini section">
          <h4 class="mt-3">Basic Card</h4>
          <div class="mb-3"></div>
          <div class="example card-basic">
            <div class="ini card">
              <div class="card image">
                <img src="/assets/img/image.png" alt="image" />
              </div>
              <div class="card content">
                <div class="card title">Card Title</div>
                <div class="card subtitle">Card Subtitle</div>
                <div class="card text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.
                </div>
              </div>
              <div class="card footer">
                <i class="material-icons">comment</i> 3 Comment
                <span class="ini float right"><i class="material-icons">thumb_up_alt</i> 10 likes</span>
              </div>
            </div>
          </div>
          <div class="code">
              <div class="ini align right">
                  <button class="ini button copy onCopy">Copy</button>
              </div>
              <div class="area selected">
                <div>
                  <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;ini card&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card image&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;img</span> src=&#x22;...&#x22; alt=&#x22;image&#x22; <span class="tag">/&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card content&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card title&#x22;</span>&#x3E;Card Title<span class="tag">&#x3C;/div&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card subtitle&#x22;</span>&#x3E;Card Subtitle<span class="tag">&#x3C;/div&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card text&#x22;</span><span class="tag">&#x3E;</span></div>
                        <div class="ml-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.</div>
                      <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card footer&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;button</span> <span class="class"> class=</span><span class="nclass">&#x22;ini button blue&#x22;</span>&#x3E;Button Left<span class="tag">&#x3C;/button&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;button</span> <span class="class"> class=</span><span class="nclass">&#x22;ini button blue float right&#x22;</span>&#x3E;Button Right<span class="tag">&#x3C;/button&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
              </div>
              <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini card&#x22;&#x3E;
  &#x3C;div class=&#x22;card image&#x22;&#x3E;
    &#x3C;img src=&#x22;...&#x22; alt=&#x22;image&#x22; /&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;card content&#x22;&#x3E;
    &#x3C;div class=&#x22;card title&#x22;&#x3E;Card Title&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;card subtitle&#x22;&#x3E;Card Subtitle&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;card text&#x22;&#x3E;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;card footer&#x22;&#x3E;
    &#x3C;button class=&#x22;ini button blue&#x22;&#x3E;Button Left&#x3C;/button&#x3E;
    &#x3C;button class=&#x22;ini button blue float right&#x22;&#x3E;Button Right&#x3C;/button&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
          </div>

          <div class="mb-3"></div>
          <div class="example card-basic">
            <div class="ini card">
              <div class="card content">
                <div>Header</div>
              </div>
              <div class="card image">
                <img src="/assets/img/image.png" alt="image" />
              </div>
              <div class="card content">
                <div class="card title">Card Title</div>
                <div class="card subtitle">Card Subtitle</div>
                <div class="card text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.
                </div>
              </div>
              <div class="card footer">
                <button class="ini button green">Save</button>
                <button class="ini button red float right">Cancel</button>
              </div>
            </div>
          </div>
          <div class="code">
              <div class="ini align right">
                  <button class="ini button copy onCopy">Copy</button>
              </div>
              <div class="area selected">
                <div>
                  <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;ini card&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card content&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div&#x3E;</span>Header<span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card image&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;img</span> src=&#x22;...&#x22; alt=&#x22;image&#x22; <span class="tag">/&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card content&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card title&#x22;</span>&#x3E;Card Title<span class="tag">&#x3C;/div&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card subtitle&#x22;</span>&#x3E;Card Subtitle<span class="tag">&#x3C;/div&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card text&#x22;</span><span class="tag">&#x3E;</span></div>
                        <div class="ml-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.</div>
                      <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card footer&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;button</span> <span class="class"> class=</span><span class="nclass">&#x22;ini button blue&#x22;</span>&#x3E;Button Left<span class="tag">&#x3C;/button&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;button</span> <span class="class"> class=</span><span class="nclass">&#x22;ini button blue float right&#x22;</span>&#x3E;Button Right<span class="tag">&#x3C;/button&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
              </div>
              <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini card&#x22;&#x3E;
  &#x3C;div class=&#x22;card content&#x22;&#x3E;
    &#x3C;div&#x3E;Header&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;card image&#x22;&#x3E;
    &#x3C;img src=&#x22;...&#x22; alt=&#x22;image&#x22; /&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;card content&#x22;&#x3E;
    &#x3C;div class=&#x22;card title&#x22;&#x3E;Card Title&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;card subtitle&#x22;&#x3E;Card Subtitle&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;card text&#x22;&#x3E;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;card footer&#x22;&#x3E;
    &#x3C;button class=&#x22;ini button blue&#x22;&#x3E;Button Left&#x3C;/button&#x3E;
    &#x3C;button class=&#x22;ini button blue float right&#x22;&#x3E;Button Right&#x3C;/button&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
          </div>

          <div class="mb-3"></div>
          <div class="example card-basic">
            <div class="ini card">
              <div class="card content">
                <div class="card title">Card Title</div>
                <div class="card subtitle">Card Subtitle</div>
                <div class="card text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.
                </div>
              </div>
              <div class="card footer">
                <button class="ini button blue">Button Left</button>
                <button class="ini button blue float right">Button Right</button>
              </div>
            </div>
          </div>
          <div class="code">
              <div class="ini align right">
                  <button class="ini button copy onCopy">Copy</button>
              </div>
              <div class="area selected">
                <div>
                  <div><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;ini card&#x22;</span><span class="tag">&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card content&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div&#x3E;</span>Header<span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card image&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;img</span> src=&#x22;...&#x22; alt=&#x22;image&#x22; <span class="tag">/&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card content&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card title&#x22;</span>&#x3E;Card Title<span class="tag">&#x3C;/div&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card subtitle&#x22;</span>&#x3E;Card Subtitle<span class="tag">&#x3C;/div&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card text&#x22;</span><span class="tag">&#x3E;</span></div>
                        <div class="ml-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.</div>
                      <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;div</span> <span class="class"> class=</span><span class="nclass">&#x22;card footer&#x22;</span><span class="tag">&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;button</span> <span class="class"> class=</span><span class="nclass">&#x22;ini button blue&#x22;</span>&#x3E;Button Left<span class="tag">&#x3C;/button&#x3E;</span></div>
                      <div class="ml-5"><span class="tag">&#x3C;button</span> <span class="class"> class=</span><span class="nclass">&#x22;ini button blue float right&#x22;</span>&#x3E;Button Right<span class="tag">&#x3C;/button&#x3E;</span></div>
                    <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
              </div>
              <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini card&#x22;&#x3E;
  &#x3C;div class=&#x22;card content&#x22;&#x3E;
    &#x3C;div&#x3E;Header&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;card image&#x22;&#x3E;
    &#x3C;img src=&#x22;...&#x22; alt=&#x22;image&#x22; /&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;card content&#x22;&#x3E;
    &#x3C;div class=&#x22;card title&#x22;&#x3E;Card Title&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;card subtitle&#x22;&#x3E;Card Subtitle&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;card text&#x22;&#x3E;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi distinctio dolorum vel? Numquam nihil molestias repellat quasi dolorum? Dolor porro nesciunt optio. Odio amet harum cupiditate quas unde.
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;card footer&#x22;&#x3E;
    &#x3C;button class=&#x22;ini button blue&#x22;&#x3E;Button Left&#x3C;/button&#x3E;
    &#x3C;button class=&#x22;ini button blue float right&#x22;&#x3E;Button Right&#x3C;/button&#x3E;
  &#x3C;/div&#x3E;
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