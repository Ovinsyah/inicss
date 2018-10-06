<template>
  <div class="content documentation">
    <Navbar/>
    <div class="ini wrapper container">
      <Menu/>
      <div class="body content">
        <h1>Progress Bar</h1>
        <div>Dokumentasi dan contoh penggunaan progress bar inicss</div>
        <div class="ini section">
        <h4 class="mt-3">Default Progress Bar</h4>
          <div class="example progress">
            <div class="ini progress">
              <div class="bar" style="width: 0%;"></div>
            </div>
            <div class="ini progress">
              <div class="bar" style="width: 25%;">25%</div>
            </div>
            <div class="ini progress">
              <div class="bar" style="width: 50%;">50%</div>
            </div>
            <div class="ini progress">
              <div class="bar" style="width: 75%;">75%</div>
            </div>
            <div class="ini progress">
              <div class="bar" style="width: 100%;">100%</div>
            </div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
            <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
              <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 0%;&#x22;&#x3E;&#x3C;/div&#x3E;</div>
            <div>&#x3C;/div&#x3E;</div>
            <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
              <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 25%;&#x22;&#x3E;25%&#x3C;/div&#x3E;</div>
            <div>&#x3C;/div&#x3E;</div>
            <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
              <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 50%;&#x22;&#x3E;50%&#x3C;/div&#x3E;</div>
            <div>&#x3C;/div&#x3E;</div>
            <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
              <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 75%;&#x22;&#x3E;75%&#x3C;/div&#x3E;</div>
            <div>&#x3C;/div&#x3E;</div>
            <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
              <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 100%;&#x22;&#x3E;100%&#x3C;/div&#x3E;</div>
            <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden">

            </textarea>
          </div>

          <h4 class="mt-3">Colored Progress Bar</h4>
          <div class="example progress">
            <div class="ini progress">
              <div class="bar blue" style="width: 25%;">25%</div>
            </div>
            <div class="ini progress">
              <div class="bar black" style="width: 40%;">40%</div>
            </div>
            <div class="ini progress">
              <div class="bar red" style="width: 75%;">75%</div>
            </div>
            <div class="ini progress">
              <div class="bar green" style="width: 40%;">40%</div>
            </div>
            <div class="ini progress">
              <div class="bar purple" style="width: 30%;">30%</div>
            </div>
            <div class="ini progress">
              <div class="bar carrot" style="width: 60%;">60%</div>
            </div>
            <div class="ini progress">
              <div class="bar orange" style="width: 20%;">20%</div>
            </div>
            <div class="ini progress">
              <div class="bar gray" style="width: 80%;">80%</div>
            </div>
            <div class="ini progress">
              <div class="bar midnight" style="width: 10%;">10%</div>
            </div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 25%;&#x22;&#x3E;25%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar black&#x22; style=&#x22;width: 40%;&#x22;&#x3E;40%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar red&#x22; style=&#x22;width: 75%;&#x22;&#x3E;75%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar green&#x22; style=&#x22;width: 40%;&#x22;&#x3E;40%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar purple&#x22; style=&#x22;width: 30%;&#x22;&#x3E;30%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar carrot&#x22; style=&#x22;width: 60%;&#x22;&#x3E;60%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar orange&#x22; style=&#x22;width: 20%;&#x22;&#x3E;20%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar gray&#x22; style=&#x22;width: 80%;&#x22;&#x3E;80%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar midnight&#x22; style=&#x22;width: 10%;&#x22;&#x3E;10%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 25%;&#x22;&#x3E;25%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar black&#x22; style=&#x22;width: 40%;&#x22;&#x3E;40%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar red&#x22; style=&#x22;width: 75%;&#x22;&#x3E;75%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar green&#x22; style=&#x22;width: 40%;&#x22;&#x3E;40%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar purple&#x22; style=&#x22;width: 30%;&#x22;&#x3E;30%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar carrot&#x22; style=&#x22;width: 60%;&#x22;&#x3E;60%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar orange&#x22; style=&#x22;width: 20%;&#x22;&#x3E;20%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar gray&#x22; style=&#x22;width: 80%;&#x22;&#x3E;80%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar midnight&#x22; style=&#x22;width: 10%;&#x22;&#x3E;10%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
          </div>

          <h4 class="mt-3">Striped Progress Bar</h4>
          <div class="example progress">
            <div class="ini progress">
              <div class="bar striped" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped black" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped red" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped green" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped purple" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped carrot" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped orange" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped gray" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped midnight" style="width: 85%;">85%</div>
            </div>
          </div>
          <div class="code">
            <div class="area selected">
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped black&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped red&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped green&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped purple&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped carrot&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped orange&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped gray&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped midnight&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped black&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped red&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped green&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped purple&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped carrot&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped orange&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped gray&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped midnight&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
          </div>

          <h4 class="mt-3">Animated Progress Bar</h4>
          <div class="example progress">
            <div class="ini progress">
              <div class="bar animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar black animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar red animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar green animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar purple animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar carrot animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar orange animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar gray animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar midnight animated" style="width: 85%;">85%</div>
            </div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar black animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar red animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar green animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar purple animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar carrot animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar orange animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar gray animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar midnight animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar black animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar red animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar green animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar purple animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar carrot animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar orange animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar gray animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar midnight animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
          </div>

          <h4 class="mt-3">Animated Striped Progress Bar</h4>
          <div class="example progress">
            <div class="ini progress">
              <div class="bar striped striped-animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped black striped-animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped red striped-animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped green striped-animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped purple striped-animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped carrot striped-animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped orange striped-animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped gray striped-animated" style="width: 85%;">85%</div>
            </div>
            <div class="ini progress">
              <div class="bar striped midnight striped-animated" style="width: 85%;">85%</div>
            </div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped black striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped red striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped green striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped purple striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped carrot striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped orange striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped gray striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
                <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                    <div class="ml-4">&#x3C;div class=&#x22;bar striped midnight striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
                <div>&#x3C;/div&#x3E;</div>
            </div>
            <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped black striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped red striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped green striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped purple striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped carrot striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped orange striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped gray striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar striped midnight striped-animated&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;</textarea>
          </div>

          <h4 class="mt-3">Sized Progress Bar</h4>
          <div class="example progress">
            <div class="ini progress simple mb-0">
              <div class="bar" style="width: 85%;"></div>
            </div>
            <div class="mb-2"><strong>Simple</strong></div>
            <div class="ini progress small mb-0">
              <div class="bar" style="width: 85%;">85%</div>
            </div>
            <div class="mb-2"><strong>Small</strong></div>
            <div class="ini progress mb-0">
              <div class="bar" style="width: 85%;">85%</div>
            </div>
            <div class="mb-2"><strong>Standard</strong></div>
            <div class="ini progress large mb-0">
              <div class="bar" style="width: 85%;">85%</div>
            </div>
            <div class="mb-2"><strong>Large</strong></div>
            <div class="ini progress big mb-0">
              <div class="bar" style="width: 85%;">85%</div>
            </div>
            <div class="mb-2"><strong>Big</strong></div>
          </div>
          <div class="code">
            <div class="ini align right">
              <button class="ini button copy onCopy">Copy</button>
            </div>
            <div class="area selected">
              <div>&#x3C;div class=&#x22;ini progress simple&#x22;&#x3E;</div>
                <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;&#x3C;/div&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini progress small&#x22;&#x3E;</div>
                <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini progress&#x22;&#x3E;</div>
                <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini progress large&#x22;&#x3E;</div>
                <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
              <div>&#x3C;div class=&#x22;ini progress big&#x22;&#x3E;</div>
                <div class="ml-4">&#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;</div>
              <div>&#x3C;/div&#x3E;</div>
            </div>

            <textarea cols="100" rows="100" class="hidden">
&#x3C;div class=&#x22;ini progress simple&#x22;&#x3E;
    &#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress small&#x22;&#x3E;
    &#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress&#x22;&#x3E;
    &#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress large&#x22;&#x3E;
    &#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;ini progress big&#x22;&#x3E;
    &#x3C;div class=&#x22;bar&#x22; style=&#x22;width: 85%;&#x22;&#x3E;85%&#x3C;/div&#x3E;
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