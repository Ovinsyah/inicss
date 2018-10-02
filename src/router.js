import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Documentation.vue'
import DocElButton from './views/documentation/elements/Button.vue'
import DocElModal from './views/documentation/elements/Modal.vue'
import DocElNavbar from './views/documentation/elements/Navbar.vue'
import DocElTable from './views/documentation/elements/Table.vue'
import DocElImage from './views/documentation/elements/Image.vue'
import DocElMenu from './views/documentation/elements/Menu.vue'
import DocElCard from './views/documentation/elements/Card.vue'

import DocFormInput from './views/documentation/form/Input.vue'

import DocGridFlex from './views/documentation/grids/Flexible.vue'
import DocGridSize from './views/documentation/grids/Size.vue'
import DocLayCon from './views/documentation/layout/Container.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Doc
    },
    {
      path: '/documentation/elements/button',
      name: 'button',
      component: DocElButton
    },
    {
      path: '/documentation/elements/modal',
      name: 'modal',
      component: DocElModal
    },
    {
      path: '/documentation/elements/card',
      name: 'card',
      component: DocElCard
    },
    {
      path: '/documentation/elements/image',
      name: 'image',
      component: DocElImage
    },
    {
      path: '/documentation/elements/menu',
      name: 'menu',
      component: DocElMenu
    },
    {
      path: '/documentation/elements/navbar',
      name: 'navbar',
      component: DocElNavbar
    },
    {
      path: '/documentation/elements/table',
      name: 'table',
      component: DocElTable
    },
    {
      path: '/documentation/form/input',
      name: 'input',
      component: DocFormInput
    },
    {
      path: '/documentation/grids/flexible',
      name: 'grid flexible',
      component: DocGridFlex
    },
    {
      path: '/documentation/grids/size',
      name: 'grid size',
      component: DocGridSize
    },
    {
      path: '/documentation/layout/container',
      name: 'container',
      component: DocLayCon
    }
  ]
})
