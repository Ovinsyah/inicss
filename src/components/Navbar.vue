<template>
  <nav class="ini navbar sticky responsive navbar-app">
    <div class="navbar brand">
      <router-link to="/">
        <img src="/assets/img/logo.png" alt>
      </router-link>
    </div>
    <button class="ini button hamburger openHamburger" data-target="#inicssmenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="ini menus" id="inicssmenu">
      <div class="menu left">
        <router-link to="/documentation">Documentation</router-link>
        <router-link to="/">Template</router-link>
      </div>
      <div class="menu right">
        <router-link to="/assets/inicss.zip" target="“_blank”" class="ini button inicss">Download</router-link>
      </div>
    </div>
  </nav>
</template>
