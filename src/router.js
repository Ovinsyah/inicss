import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Documentation.vue'
import DocElButton from './views/documentation/elements/Button.vue'
import DocElDropdown from './views/documentation/elements/Dropdown.vue'
import DocElModal from './views/documentation/elements/Modal.vue'
import DocElNavbar from './views/documentation/elements/Navbar.vue'
import DocElTable from './views/documentation/elements/Table.vue'
import DocElImage from './views/documentation/elements/Image.vue'
import DocElTabs from './views/documentation/elements/Tabs.vue'
import DocElCard from './views/documentation/elements/Card.vue'

import DocFormGeneral from './views/documentation/form/General.vue'
import DocFormInput from './views/documentation/form/Input.vue'
import DocFormTextarea from './views/documentation/form/Textarea.vue'
import DocFormCheckbox from './views/documentation/form/Checkbox.vue'
import DocFormRadio from './views/documentation/form/Radio.vue'
import DocFormSelect from './views/documentation/form/Select.vue'
import DocFormFile from './views/documentation/form/File.vue'

import DocGridFlex from './views/documentation/grids/Flexible.vue'
import DocGridSize from './views/documentation/grids/Size.vue'
import DocGridResponsive from './views/documentation/grids/Responsive.vue'
import DocLayCon from './views/documentation/layout/Container.vue'

import DocCollStep from './views/documentation/collection/Step.vue'
import DocCollLoader from './views/documentation/collection/Loader.vue'
import DocCollMessage from './views/documentation/collection/Message.vue'
import DocCollDashboard from './views/documentation/collection/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  hash: false,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/documentation",
      name: "documentation",
      component: Doc
    },
    {
      path: "/documentation/elements/button",
      name: "button",
      component: DocElButton
    },
    {
      path: "/documentation/elements/dropdown",
      name: "dropdown",
      component: DocElDropdown
    },
    {
      path: "/documentation/elements/modal",
      name: "modal",
      component: DocElModal
    },
    {
      path: "/documentation/elements/card",
      name: "card",
      component: DocElCard
    },
    {
      path: "/documentation/elements/image",
      name: "image",
      component: DocElImage
    },
    {
      path: "/documentation/elements/tabs",
      name: "tabs",
      component: DocElTabs
    },
    {
      path: "/documentation/elements/navbar",
      name: "navbar",
      component: DocElNavbar
    },
    {
      path: "/documentation/elements/table",
      name: "table",
      component: DocElTable
    },
    {
      path: "/documentation/form/general",
      name: "general",
      component: DocFormGeneral
    },
    {
      path: "/documentation/form/input",
      name: "input",
      component: DocFormInput
    },
    {
      path: "/documentation/form/textarea",
      name: "textarea",
      component: DocFormTextarea
    },
    {
      path: "/documentation/form/checkbox",
      name: "checkbox",
      component: DocFormCheckbox
    },
    {
      path: "/documentation/form/radio",
      name: "radio",
      component: DocFormRadio
    },
    {
      path: "/documentation/form/select",
      name: "select",
      component: DocFormSelect
    },
    {
      path: "/documentation/form/file",
      name: "file",
      component: DocFormFile
    },
    {
      path: "/documentation/grids/flexible",
      name: "grid flexible",
      component: DocGridFlex
    },
    {
      path: "/documentation/grids/size",
      name: "grid size",
      component: DocGridSize
    },
    {
      path: "/documentation/grids/responsive",
      name: "grid responsive",
      component: DocGridResponsive
    },
    {
      path: "/documentation/layout/container",
      name: "container",
      component: DocLayCon
    },
    {
      path: "/documentation/collection/step",
      name: "step",
      component: DocCollStep
    },
    {
      path: "/documentation/collection/loader",
      name: "loader",
      component: DocCollLoader
    },
    {
      path: "/documentation/collection/message",
      name: "message",
      component: DocCollMessage
    },
    {
      path: "/documentation/collection/dashboard",
      name: "dashboard",
      component: DocCollDashboard
    }
  ]
});
