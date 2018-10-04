<template>
    <nav class="ini navbar sticky responsive navbar-app">
        <div class="navbar brand">
            <router-link to="/">
                <img src="/assets/img/logo.png" alt="">
            </router-link>
        </div>
        <button class="ini button hamburger openHamburger" data-target="#inicssmenu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class="ini menus" id="inicssmenu">
            <div class="menu left">
                <router-link to="/documentation">
                    Documentation
                </router-link>
                <router-link to="/">
                    Template
                </router-link>
            </div>
            <!-- <div class="menu center">
                <a href="">tengah</a>
            </div> -->
            <div class="menu right">
                <button class="ini button inicss">Download</button>
            </div>
        </div>
    </nav>
</template>
