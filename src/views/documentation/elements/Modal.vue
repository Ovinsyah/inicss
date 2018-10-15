<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Modal</h1>
        <div class="caption">
          <div>
            <i class="inicss"><b>Modal</b></i> merupakan kotak dialog yang ditampilkan di dalam halaman<i class="inicss">website</i>.
          </div>
        </div>
        <hr class="inicss">
        <div class="ini message compact inicss">
                <div class="header">Menggunakan Javascript</div>
                <div class="body">
                    <i class="inicss"><b>IniCss</b></i> menyediakan Javascript pada komponen <i class="inicss"><b>modal</b></i>.<br>
                    Dengan logika menggunakan <i class="inicss">event click</i> pada <code class="inicss">.openModal</code> untuk menambahkan <code class="inicss">.active</code> ke <i class="inicss">selector</i>, sesuai dengan atribut <code class="inicss">data-target</code>.
                </div>
          </div>
          <h3 class="mt-3">Modal Small</h3>
          <div><i class="inicss"><b>Modal</b></i> dengan ukuran lebar <i class="inicss">maximal</i> <b> 540px</b>.</div>
          <div class="ini section">
            <div class="example container">
                <button class="ini button inicss openModal" data-target="#modalSmall">Open Modal</button>
                <div class="ini modals" id="modalSmall">
                    <div class="ini modal small">
                        <div class="header">
                            <div class="title">Header Title</div>
                            <button class="ini button close closeModal"><i class="material-icons">close</i></button>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
                        </div>
                        <div class="action">
                            <button class="ini button primary">Okay</button>
                            <button class="ini button red closeModal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                    <div><span class="tag"><span class="tag">&#x3C;button</span></span><span class="class"> class=</span><span class="nclass">&#x22;ini button inicss openModal&#x22;</span><span class="class"> data-target=</span><span class="nclass">&#x22;#modalSmall&#x22;</span><span class="tag">&#x3E;</span>Open Modal><span class="tag">&#x3C;/button&#x3E;</span></div>
                    <div><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini modals&#x22;</span><span class="class"> id=</span><span class="nclass">&#x22;modalSmall&#x22;</span><span class="tag">&#x3E;</span></div>
                        <div class="ml-4"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini modal small&#x22;</span><span class="tag">&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;header&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;title&#x22;</span><span class="tag">&#x3E;</span>Header Title<span class="tag">&#x3C;/div&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button close closeModal&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;i</span><span class="class"> class=</span><span class="nclass"> &#x22;material-icons&#x22;</span><span class="tag">&#x3E;</span>close<span class="tag">&#x3C;/i&#x3E;</span><span class="tag">&#x3C;/button&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;content&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
                                </div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;action&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button primary&#x22;</span><span class="tag">&#x3E;</span>Okay><span class="tag">&#x3C;/button&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button red closeModal&#x22;</span><span class="tag">&#x3E;</span>Cancel><span class="tag">&#x3C;/button&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                        <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;button class=&#x22;ini button inicss openModal&#x22; data-target=&#x22;#modalSmall&#x22;&#x3E;Open Modal&#x3C;/button&#x3E;
&#x3C;div class=&#x22;ini modals&#x22; id=&#x22;modalSmall&#x22;&#x3E;
    &#x3C;div class=&#x22;ini modal small&#x22;&#x3E;
        &#x3C;div class=&#x22;header&#x22;&#x3E;
            &#x3C;div class=&#x22;title&#x22;&#x3E;Header Title&#x3C;/div&#x3E;
            &#x3C;button class=&#x22;ini button close closeModal&#x22;&#x3E;&#x3C;i class=&#x22;material-icons&#x22;&#x3E;close&#x3C;/i&#x3E;&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;content&#x22;&#x3E;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;action&#x22;&#x3E;
            &#x3C;button class=&#x22;ini button primary&#x22;&#x3E;Okay&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;ini button red closeModal&#x22;&#x3E;Cancel&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
            </div>
          </div>
          <h3 class="mt-3">Modal medium</h3>
          <div><i class="inicss"><b>Modal</b></i> dengan ukuran lebar <i class="inicss">maximal</i> <b> 720px</b>.</div>
          <div class="ini section">
            <div class="example container">
                <button class="ini button inicss openModal" data-target="#modalMedium">Open Modal</button>
                <div class="ini modals" id="modalMedium">
                    <div class="ini modal medium">
                        <div class="header">
                            <div class="title">Header Title</div>
                            <button class="ini button close closeModal"><i class="material-icons">close</i></button>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
                        </div>
                        <div class="action">
                            <button class="ini button primary">Okay</button>
                            <button class="ini button red closeModal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                    <div><span class="tag"><span class="tag">&#x3C;button</span></span><span class="class"> class=</span><span class="nclass">&#x22;ini button inicss openModal&#x22;</span><span class="class"> data-target=</span>&#x22;#modalMedium&#x22;&#x3E;Open Modal><span class="tag">&#x3C;/button&#x3E;</span></div>
                    <div><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini modals&#x22;</span><span class="class"> id=</span>&#x22;modalMedium&#x22;&#x3E;</div>
                        <div class="ml-4"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini modal medium&#x22;</span><span class="tag">&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;header&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;title&#x22;</span><span class="tag">&#x3E;</span>Header Title<span class="tag">&#x3C;/div&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button close closeModal&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;i</span><span class="class"> class=</span><span class="nclass"> &#x22;material-icons&#x22;</span><span class="tag">&#x3E;</span>close<span class="tag">&#x3C;/i&#x3E;</span><span class="tag">&#x3C;/button&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;content&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
                                </div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;action&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button primary&#x22;</span><span class="tag">&#x3E;</span>Okay><span class="tag">&#x3C;/button&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button red closeModal&#x22;</span><span class="tag">&#x3E;</span>Cancel><span class="tag">&#x3C;/button&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                        <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;button class=&#x22;ini button inicss openModal&#x22; data-target=&#x22;#modalMedium&#x22;&#x3E;Open Modal&#x3C;/button&#x3E;
&#x3C;div class=&#x22;ini modals&#x22; id=&#x22;modalMedium&#x22;&#x3E;
    &#x3C;div class=&#x22;ini modal medium&#x22;&#x3E;
        &#x3C;div class=&#x22;header&#x22;&#x3E;
            &#x3C;div class=&#x22;title&#x22;&#x3E;Header Title&#x3C;/div&#x3E;
            &#x3C;button class=&#x22;ini button close closeModal&#x22;&#x3E;&#x3C;i class=&#x22;material-icons&#x22;&#x3E;close&#x3C;/i&#x3E;&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;content&#x22;&#x3E;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;action&#x22;&#x3E;
            &#x3C;button class=&#x22;ini button primary&#x22;&#x3E;Okay&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;ini button red closeModal&#x22;&#x3E;Cancel&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
            </div>
          </div>
          <h3 class="mt-3">Modal Large</h3>
          <div><i class="inicss"><b>Modal</b></i> dengan ukuran lebar <i class="inicss">maximal</i> <b> 1080px</b>.</div>
          <div class="ini section">
            <div class="example container">
                <button class="ini button inicss openModal" data-target="#modalLarge">Open Modal</button>
                <div class="ini modals" id="modalLarge">
                    <div class="ini modal large">
                        <div class="header">
                            <div class="title">Header Title</div>
                            <button class="ini button close closeModal"><i class="material-icons">close</i></button>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
                        </div>
                        <div class="action">
                            <button class="ini button primary">Okay</button>
                            <button class="ini button red closeModal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                    <div><span class="tag"><span class="tag">&#x3C;button</span></span><span class="class"> class=</span><span class="nclass">&#x22;ini button inicss openModal&#x22;</span><span class="class"> data-target=</span>&#x22;#modalLarge&#x22;&#x3E;Open Modal><span class="tag">&#x3C;/button&#x3E;</span></div>
                    <div><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini modals&#x22;</span><span class="class"> id=</span>&#x22;modalLarge&#x22;&#x3E;</div>
                        <div class="ml-4"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini modal large&#x22;</span><span class="tag">&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;header&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;title&#x22;</span><span class="tag">&#x3E;</span>Header Title<span class="tag">&#x3C;/div&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button close closeModal&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;i</span><span class="class"> class=</span><span class="nclass"> &#x22;material-icons&#x22;</span><span class="tag">&#x3E;</span>close<span class="tag">&#x3C;/i&#x3E;</span><span class="tag">&#x3C;/button&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;content&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
                                </div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;action&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button primary&#x22;</span><span class="tag">&#x3E;</span>Okay><span class="tag">&#x3C;/button&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button red closeModal&#x22;</span><span class="tag">&#x3E;</span>Cancel><span class="tag">&#x3C;/button&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                        <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;button class=&#x22;ini button inicss openModal&#x22; data-target=&#x22;#modalMedium&#x22;&#x3E;Open Modal&#x3C;/button&#x3E;
&#x3C;div class=&#x22;ini modals&#x22; id=&#x22;modalMedium&#x22;&#x3E;
    &#x3C;div class=&#x22;ini modal large&#x22;&#x3E;
        &#x3C;div class=&#x22;header&#x22;&#x3E;
            &#x3C;div class=&#x22;title&#x22;&#x3E;Header Title&#x3C;/div&#x3E;
            &#x3C;button class=&#x22;ini button close closeModal&#x22;&#x3E;&#x3C;i class=&#x22;material-icons&#x22;&#x3E;close&#x3C;/i&#x3E;&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;content&#x22;&#x3E;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;action&#x22;&#x3E;
            &#x3C;button class=&#x22;ini button primary&#x22;&#x3E;Okay&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;ini button red closeModal&#x22;&#x3E;Cancel&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Modal Centered</h4>
          <div><i class="inicss"><b>Modal</b></i> dengan posisi <i class="inicss">vertical centered</i>.</div>
          <div class="ini section">
            <div class="example container">
                <button class="ini button inicss openModal" data-target="#modalCentered">Open Modal</button>
                <div class="ini modals centered" id="modalCentered">
                    <div class="ini modal medium">
                        <div class="header">
                            <div class="title">Header Title</div>
                            <button class="ini button close closeModal"><i class="material-icons">close</i></button>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
                        </div>
                        <div class="action">
                            <button class="ini button primary">Okay</button>
                            <button class="ini button red closeModal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                    <div><span class="tag"><span class="tag">&#x3C;button</span></span><span class="class"> class=</span><span class="nclass">&#x22;ini button inicss openModal&#x22;</span><span class="class"> data-target=</span>&#x22;#modalMedium&#x22;&#x3E;Open Modal><span class="tag">&#x3C;/button&#x3E;</span></div>
                    <div><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini modals centered&#x22;</span><span class="class"> id=</span>&#x22;modalMedium&#x22;&#x3E;</div>
                        <div class="ml-4"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;ini modal medium&#x22;</span><span class="tag">&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;header&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;title&#x22;</span><span class="tag">&#x3E;</span>Header Title<span class="tag">&#x3C;/div&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button close closeModal&#x22;</span><span class="tag">&#x3E;</span><span class="tag">&#x3C;i</span><span class="class"> class=</span><span class="nclass"> &#x22;material-icons&#x22;</span><span class="tag">&#x3E;</span>close<span class="tag">&#x3C;/i&#x3E;</span><span class="tag">&#x3C;/button&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;content&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
                                </div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;div</span><span class="class"> class=</span><span class="nclass">&#x22;action&#x22;</span><span class="tag">&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button primary&#x22;</span><span class="tag">&#x3E;</span>Okay><span class="tag">&#x3C;/button&#x3E;</span></div>
                                <div class="ml-6"><span class="tag">&#x3C;button</span><span class="class"> class=</span><span class="nclass">&#x22;ini button red closeModal&#x22;</span><span class="tag">&#x3E;</span>Cancel><span class="tag">&#x3C;/button&#x3E;</span></div>
                            <div class="ml-5"><span class="tag">&#x3C;/div&#x3E;</span></div>
                        <div class="ml-4"><span class="tag">&#x3C;/div&#x3E;</span></div>
                    <div><span class="tag">&#x3C;/div&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;button class=&#x22;ini button inicss openModal&#x22; data-target=&#x22;#modalMedium&#x22;&#x3E;Open Modal&#x3C;/button&#x3E;
&#x3C;div class=&#x22;ini modals centered&#x22; id=&#x22;modalMedium&#x22;&#x3E;
    &#x3C;div class=&#x22;ini modal medium&#x22;&#x3E;
        &#x3C;div class=&#x22;header&#x22;&#x3E;
            &#x3C;div class=&#x22;title&#x22;&#x3E;Header Title&#x3C;/div&#x3E;
            &#x3C;button class=&#x22;ini button close closeModal&#x22;&#x3E;&#x3C;i class=&#x22;material-icons&#x22;&#x3E;close&#x3C;/i&#x3E;&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;content&#x22;&#x3E;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta blanditiis ducimus quis, exercitationem a? Qui iusto deserunt necessitatibus, quis cupiditate temporibus id corrupti eligendi expedita possimus laboriosam totam blanditiis!
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;action&#x22;&#x3E;
            &#x3C;button class=&#x22;ini button primary&#x22;&#x3E;Okay&#x3C;/button&#x3E;
            &#x3C;button class=&#x22;ini button red closeModal&#x22;&#x3E;Cancel&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
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