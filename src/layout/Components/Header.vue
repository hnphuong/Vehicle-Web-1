<template>
  <div class="impl_header_wrapper">
    <div class="impl_logo">
      <a href="/">
        <img src="@/assets/images/logoxesang.png" alt="Logo" class="img-fluid" />
        <!-- <img src="http://sanxesang.com:7102/resources/images/logo.png" alt="Logo" class="img-fluid" /> -->
      </a>
    </div>
    <div class="impl_top_header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="impl_top_info">
              <ul class="impl_header_social">
                <li>
                  <a href="https://www.facebook.com/Sanxesang/" target="_blank"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank"
                    ><i class="fa fa-youtube" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
              <p class="impl_header_time">
                <i class="fa fa-clock-o" aria-hidden="true"></i> Mở cửa -
                08:00 đến 20:00 kể cả chủ nhật
              </p>
              <ul class="impl_header_icons">
                <li class="impl_search">
                  <span><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
                </li>
                <!-- <li class="cart-popup">
                  <a href="#"
                    ><i class="fa fa-shopping-cart" aria-hidden="true"></i
                  ></a>
                  <div class="cart-box">
                    <div class="popup-container">
                      <div class="cart-entry">
                        <a href="#" class="image">
                          <img src="/70x60" alt="" />
                        </a>
                        <div class="content">
                          <a href="#" class="title">Serpent</a>
                          <p class="quantity">Quantity: 1</p>
                          <span class="price">$4500.00</span>
                        </div>
                        <div class="button-x">
                          <i class="fa fa-times-circle" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div class="cart-entry">
                        <a href="#" class="image">
                          <img src="/70x60" alt="" />
                        </a>
                        <div class="content">
                          <a href="#" class="title">Empire</a>
                          <p class="quantity">Quantity: 1</p>
                          <span class="price">$900.00</span>
                        </div>
                        <div class="button-x">
                          <i class="fa fa-times-circle" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div class="summary">
                        <div class="subtotal">Sub Total</div>
                        <div class="price-s">$5100.0</div>
                      </div>
                      <div class="cart-buttons">
                        <a href="checkout.html" class="btn impl_btn"
                          >View Cart</a
                        >
                        <a href="checkout.html" class="btn impl_btn"
                          >Checkout</a
                        >
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                </li> -->
                <li>
                  <!-- <a href="#signin" data-toggle="modal"
                    ><i class="fa fa-sign-in" aria-hidden="true"></i
                  ></a> -->
                  <a href="javascript:void(0)" @click="$router.push('/login')"
                    ><i class="fa fa-sign-in" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
              <div class="impl_search_overlay">
                <div class="impl_search_area">
                  <div class="srch_inner">
                    <form action="#">
                      <input type="text" placeholder="Search here... " />
                      <button type="submit">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                    <div class="srch_close_btn">
                      <span class="srch_close_btn_icon"
                        ><i class="fa fa-times" aria-hidden="true"></i
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--sign-in form-->
    <div class="modal" id="signin">
      <div class="impl_signin">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div class="impl_sign_form">
          <h1>Sign In</h1>
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control" />
            <span class="form_icon">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              class="form-control"
            />
            <span class="form_icon">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div class="forget_password">
            <div class="remember_checkbox">
              <label
                >Keep me signed in
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <a href="#">Forgot Password ?</a>
          </div>
          <a href="#" class="impl_btn">submit</a>
          <p>
            Dont Have An Account?
            <a class="impl_modal" href="#signup" data-toggle="modal">Sign Up</a>
          </p>
        </div>
        <div class="impl_sign_img">
          <h2>Welcome To Impel Cars</h2>
          <p>A Perfect Zone To Sell And Purchase Cars</p>
          <div class="impl_sign_bottom">
            <h3>It’s Not Just A Car</h3>
            <h3>It’s Someone’s Dream</h3>
          </div>
        </div>
      </div>
    </div>
    <!--sign-up form-->
    <div class="modal" id="signup">
      <div class="impl_signin">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div class="impl_sign_form">
          <h1>Sign up</h1>
          <div class="form-group">
            <input type="text" placeholder="Username" class="form-control" />
            <span class="form_icon">
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control" />
            <span class="form_icon">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              class="form-control"
            />
            <span class="form_icon">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              class="form-control"
            />
            <span class="form_icon">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <a href="#" class="impl_btn">sign up</a>
          <p>
            Dont Have An Account?
            <a href="#signup" data-toggle="modal" class="impl_modal">Sign Up</a>
          </p>
        </div>
        <div class="impl_sign_img">
          <h2>Welcome To Impel Cars</h2>
          <p>A Perfect Zone To Sell And Purchase Cars</p>
          <div class="impl_sign_bottom">
            <h3>It’s Not Just A Car</h3>
            <h3>It’s Someone’s Dream</h3>
          </div>
        </div>
      </div>
    </div>
    <!--menu start-->
    <div class="impl_menu_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <button class="impl_menu_btn">
              <i class="fa fa-car" aria-hidden="true"></i>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div class="impl_menu_inner">
              <div class="impl_logo_responsive">
                <a href="index.html"
                  ><img
                    src="@/assets/images/logo1.png"
                    alt="Logo"
                    class="img-fluid"
                /></a>
              </div>
              <a href="#" class="impl_btn">
                <router-link to="/sell-step">
                  Đăng ký
                </router-link>
              </a>
              <div class="impl_menu">
                <nav>
                  <div class="menu_cross">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </div>
                  <ul>
                    <li class="dropdown">
                      <a href="/" :class="{'active': $route.path === '/'}">Trang chủ</a>
                    </li>
                    <li class="dropdown" v-for="item in menuHeader" :key="item.id">
                      <a href="javascript:void(0)" @click="changeRoute(item.code)"
                        :class="{'active': (currentRoute === item.code || $route.path === item.code)}">
                        {{ item.name }}
                      </a>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TransportService } from '@/services/transport.service'
import { EndpointService } from '@/services/endpoint.service'
export default {
  name: 'Header',

  data () {
    return {
      dataUser: JSON.parse(localStorage.getItem('userData')),
      endpoint: {},
      menuHeader: [],
      currentRoute: '',
      transportName: [
        { id: 'car', text: 'ô tô' },
        { id: 'motorcycle', text: 'xe máy' },
        { id: 'bicycle', text: 'xe đạp' }
      ]
    }
  },
  props: {
    headerbg: String,
    isOpen: Boolean,
    isOpenMobile: Boolean
  },

  filters: {
    transformName (name, transportName) {
      const transport = transportName.filter(item => item.id === name)
      return transport[0] ? transport[0].text : name
    }
  },

  async created () {
    await this.getEndpoint()
    this.getTransportMenu()
    const currentPath = this.$route.path
    if (this.currentRoute === '') this.currentRoute = currentPath.substring(1, currentPath.length)
  },

  methods: {
    async logout () {
      await this.$store.dispatch('user/clear')
      this.$store.dispatch('auth/logout')
    },

    changeRoute (route) {
      this.currentRoute = route
      this.$router.push(route)
      // this.$router.replace({ path: route })
    },

    async getEndpoint () {
      try {
        const response = await EndpointService.getConfig()
        this.endpoint = response.data
        await this.$store.dispatch('endpoint/getEndpointConfig')
      } catch (error) {
        console.log(error)
      }
    },

    async getTransportMenu () {
      try {
        const response = await TransportService.getListTransportHeader({
          data: {
            codeParent: 'transport'
          },
          endpoint: this.endpoint['hnp.luxury.transport.get-list-transport']
        })
        this.menuHeader = response.data.transportListRes
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped></style>
