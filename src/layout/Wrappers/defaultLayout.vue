<template>
  <div>
    <div class="main-content d-flex flex-column">
      <div id="preloader" v-if="loading || firstLoading">
        <div id="status">
            <img src="@/assets/images/logoxesang.png" alt="" />
            <!-- <img src="@/assets/images/logo.png" alt="" /> -->
            <div class="loader">
                Loading...
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
            </div>
        </div>
    </div>
      <Header/>
      <div>
        <slot></slot>
      </div>
      <Footer/>
      <!-- <span class="gotop" @click="scrollToTop()"><img src="@/assets/images/goto.png" alt=""></span> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import Sidebar from '../Components/Sidebar'

export default {
  name: 'app',
  data () {
    return {
      firstLoading: true
    }
  },
  components: {
    Header,
    Footer
    // Sidebar
  },
  created () {
    this.firstLoading = true
  },
  mounted () {
    setTimeout(() => {
      this.firstLoading = false
    }, 2000)
  },
  computed: {
    ...mapGetters({
      loading: 'loading/getDataLoading'
    })
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
