<template>
  <div
    class="sidemenu-area"
    v-bind:class="{
      'toggle-sidemenu-area': isOpen,
      'active-sidemenu-area': isOpenMobile,
    }"
  >
    <div class="sidemenu-header">
      <a href="/" class="navbar-brand d-flex align-items-center">
        <!-- <img src="@/assets/img/nextpay-logo.svg" alt="image" class="logo-main" />
        <img src="@/assets/img/ni-favicon-white.svg" alt="image" class="logo-shorten" /> -->
      </a>
      <div
        class="burger-menu d-none d-lg-block"
        v-bind:class="{ active: isOpen }"
        @click="$emit('toggle-sidebar')"
      >
        <span class="top-bar"></span>
        <span class="middle-bar"></span>
        <span class="bottom-bar"></span>
      </div>

      <div
        class="responsive-burger-menu d-block d-lg-none"
        v-bind:class="{ active: isOpenMobile }"
        @click="$emit('toggle-sidebar-mobile')"
      >
        <span class="top-bar"></span>
        <span class="middle-bar"></span>
        <span class="bottom-bar"></span>
      </div>
    </div>
    <div class="sidemenu-body">
      <VuePerfectScrollbar v-once>
        <ul class="sidemenu-nav metisMenu h-100" id="sidemenu-nav" data-simplebar>
          <template v-for="(item, index) in menu">
            <li class="nav-item" v-if="item.child" :key="index">
            <div v-if="checkChild(item)">
              <a
                class="nav-link collapsed-nav-link"
                v-b-toggle="'accordion-' + item.accId"
                @click="changeMenu(item)"
              >
                <i :class="item.icon"></i>
                <span class="menu-title">{{ item.title }}</span>
              </a>
              <b-collapse
                :id="'accordion-' + item.accId"
                accordion="my-accordion"
                role="tabpanel"
                class="sidemenu-nav-second-level"
              >
                <div
                  v-for="(subItem, subIndex) in item.child"
                  :key="subIndex"
                >
                  <div v-if="checkPermission(subItem.permission)">
                    <li class="nav-item" @click="changeRoute(subItem)">
                      <router-link :to="subItem.href" class="nav-link">
                        <span class="menu-title">{{ subItem.title }}</span>
                      </router-link>
                    </li>
                  </div>
                </div>
              </b-collapse>
             </div>
            </li>

            <router-link
              v-else
              :key="index"
              :to="item.href"
              v-slot="{ href, navigate, isActive, isExactActive }"
            >
              <div v-if="checkPermission(item.permission)">
                <li
                  class="nav-item"
                  :class="[
                    isActive && 'router-link-active mm-active',
                    isExactActive && 'router-link-exact-active'
                  ]"
                  @click="changeMenu(item)"
                >
                  <a :href="href" @click="navigate" class="nav-link">
                    <i :class="item.icon"></i>
                    <span class="menu-title">{{ item.title }}</span>
                  </a>
                </li>
              </div>
            </router-link>
          </template>
        </ul>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { menu } from '@/config/menu.js'
import { mapGetters } from 'vuex'

export default {
  components: {
    VuePerfectScrollbar
  },

  props: {
    isOpen: Boolean,
    isOpenMobile: Boolean
  },

  data () {
    return {
      sidebarActive: false,
      collapsed: true,
      windowWidth: 0,
      menu: menu
    }
  },

  computed: {
    ...mapGetters({
      getRouterSavingSearch: 'search/getRouter'
    })
  },

  methods: {
    checkPermission (per) {
      if (per !== '') {
        const dataPermission = JSON.parse(localStorage.getItem('dataPermission'))
        if (dataPermission) {
          const check = dataPermission.includes(per)
          return check
        }
      } else {
        return true
      }
    },
    checkChild (child) {
      const dataPermission = JSON.parse(localStorage.getItem('dataPermission'))
      if (dataPermission && child.listPermission) {
        const childPer = []
        child.listPermission.map((item) => {
          const check = dataPermission.includes(item)
          if (check) childPer.push(item)
        })
        if (childPer.length === 0) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    },
    changeRoute (item) {
      if (item !== '/attendance') {
        this.$store.commit('search/CLEAR_DATA')
      }
      if (this.getRouterSavingSearch !== null && item !== this.getRouterSavingSearch) {
        this.$store.commit('search/CLEAR_DATA_OTHER')
      }
    },
    changeMenu (item) {
      if (item.accId !== 2) {
        this.$store.commit('search/CLEAR_DATA')
      }
      if (this.getRouterSavingSearch !== null && item.href && item.href !== this.getRouterSavingSearch) {
        this.$store.commit('search/CLEAR_DATA_OTHER')
      }
    }
  }
}
</script>

<style scoped>
.router-link-exact-active {
  color: #0B62AB !important;
}
</style>
