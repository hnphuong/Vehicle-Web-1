import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Default from '../layout/Wrappers/defaultLayout.vue'
import Login from '../layout/Wrappers/loginLayout.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueLoadingOverlay from 'vue-loading-overlay'
import VueSlickCarousel from 'vue-slick-carousel'
import Notification from '@/components/Modal/Notification.vue'

// import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, ToolbarType } from "@syncfusion/ej2-vue-richtexteditor";

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(RichTextEditorPlugin);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('VueLoadingOverlay', VueLoadingOverlay)
Vue.component('VueSlickCarousel', VueSlickCarousel)
Vue.component('Notification', Notification)
// Vue.component('RichTextEditorPlugin', RichTextEditorPlugin)

Vue.component('default-layout', Default)
Vue.component('login-layout', Login)
