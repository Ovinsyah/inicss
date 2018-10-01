<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
          <h1>Table</h1>
          <div>Kayak gini kalo mau pakek table bos</div>
          <h4 class="mt-3">Default Table</h4>
          <div class="ini section">
            <div class="example button">
                <table class="ini table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) of data">
                      <td>{{index+1}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.phone}}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                  <div><span class="tag"><span class="tag">&#x3C;table</span></span> <span class="class"> class=</span><span class="nclass">&#x22;ini table&#x22;&#x3E;</span>&#x22</div>
                  <div class="ml-4"><span class="tag">&#x3C;thead</span>&#x3E;</div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>No<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Name<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Email<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Phone<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;/thead&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;tbody</span>&#x3E;</div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Udin<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_udin@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7890<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>2<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Ucok<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_ucok@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7891<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Upik<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_upik@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7893<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Ucup<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_ucup@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-78903<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;/tbody&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/table&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;table class=&#x22;ini table&#x22;&#x3E;
    &#x3C;thead&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;th&#x3E;No&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Name&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Email&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Phone&#x3C;/th&#x3E;
        &#x3C;/tr&#x3E;
    &#x3C;/thead&#x3E;
    &#x3C;tbody&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Udin&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_udin@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7890&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;2&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Ucok&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_ucok@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7891&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Upik&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_upik@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7893&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Ucup&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_ucup@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-78903&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
    &#x3C;/tbody&#x3E;
&#x3C;/table&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Striped Table</h4>
          <div class="ini section">
            <div class="example button">
                <table class="ini table striped">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) of data">
                      <td>{{index+1}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.phone}}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                    <div><span class="tag"><span class="tag">&#x3C;table</span></span> <span class="class"> class=</span><span class="nclass">&#x22;ini table striped&#x22;&#x3E;</span>&#x22</div>
                  <div class="ml-4"><span class="tag">&#x3C;thead</span>&#x3E;</div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>No<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Name<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Email<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Phone<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;/thead&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;tbody</span>&#x3E;</div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Udin<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_udin@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7890<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>2<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Ucok<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_ucok@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7891<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Upik<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_upik@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7893<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Ucup<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_ucup@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-78903<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;/tbody&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/table&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;table class=&#x22;ini table striped&#x22;&#x3E;
    &#x3C;thead&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;th&#x3E;No&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Name&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Email&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Phone&#x3C;/th&#x3E;
        &#x3C;/tr&#x3E;
    &#x3C;/thead&#x3E;
    &#x3C;tbody&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Udin&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_udin@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7890&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;2&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Ucok&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_ucok@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7891&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Upik&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_upik@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7893&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Ucup&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_ucup@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-78903&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
    &#x3C;/tbody&#x3E;
&#x3C;/table&#x3E;</textarea>
            </div>
          </div>
          <h4 class="mt-3">Bordered Table</h4>
          <div class="ini section">
            <div class="example button">
                <table class="ini table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) of data">
                      <td>{{index+1}}</td>
                      <td>{{item.name}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.phone}}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div class="code">
                <div class="ini align right">
                    <button class="ini button copy onCopy">Copy</button>
                </div>
                <div class="area selected">
                    <div><span class="tag"><span class="tag">&#x3C;table</span></span> <span class="class"> class=</span><span class="nclass">&#x22;ini table bordered&#x22;&#x3E;</span>&#x22</div>
                  <div class="ml-4"><span class="tag">&#x3C;thead</span>&#x3E;</div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>No<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Name<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Email<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;th&#x3E;</span>Phone<span class="tag">&#x3C;/th&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;/thead&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;tbody</span>&#x3E;</div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Udin<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_udin@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7890<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>2<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Ucok<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_ucok@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7891<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Upik<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_upik@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-7893<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;tr&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>1<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>Ucup<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>ini_ucup@mail.com<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-6"><span class="tag">&#x3C;td&#x3E;</span>+62 812-3456-78903<span class="tag">&#x3C;/td&#x3E;</span></div>
                  <div class="ml-5"><span class="tag">&#x3C;/tr&#x3E;</span></div>
                  <div class="ml-4"><span class="tag">&#x3C;/tbody&#x3E;</span></div>
                  <div><span class="tag">&#x3C;/table&#x3E;</span></div>
                </div>
                <textarea cols="100" rows="100" class="hidden">
&#x3C;table class=&#x22;ini table bordered&#x22;&#x3E;
    &#x3C;thead&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;th&#x3E;No&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Name&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Email&#x3C;/th&#x3E;
            &#x3C;th&#x3E;Phone&#x3C;/th&#x3E;
        &#x3C;/tr&#x3E;
    &#x3C;/thead&#x3E;
    &#x3C;tbody&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Udin&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_udin@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7890&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;2&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Ucok&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_ucok@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7891&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Upik&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_upik@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-7893&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
        &#x3C;tr&#x3E;
            &#x3C;td&#x3E;1&#x3C;/td&#x3E;
            &#x3C;td&#x3E;Ucup&#x3C;/td&#x3E;
            &#x3C;td&#x3E;ini_ucup@mail.com&#x3C;/td&#x3E;
            &#x3C;td&#x3E;+62 812-3456-78903&#x3C;/td&#x3E;
        &#x3C;/tr&#x3E;
    &#x3C;/tbody&#x3E;
&#x3C;/table&#x3E;</textarea>
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
  },
  data() {
    return {
      data: [
        { name: 'Udin',
          email: 'ini_udin@mail.com',
          phone: '+62 812-3456-7890'
        },
        { name: 'Ucok',
          email: 'ini_ucok@mail.com',
          phone: '+62 812-3456-7891'
        },
        { name: 'Upik',
          email: 'ini_upik@mail.com',
          phone: '+62 812-3456-7892'
        },
        { name: 'Ucup',
          email: 'ini_ucup@mail.com',
          phone: '+62 812-3456-7893'
        }
      ]
    };
  }
}
</script>