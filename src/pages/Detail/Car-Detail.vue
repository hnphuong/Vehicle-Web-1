<template>
  <div>
    <!------ Breadcrumbs Start ------>
    <div class="impl_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                  {{ dataDetail.transportTree[0] ? dataDetail.transportTree[0] : '' }}
                  <h1>{{ dataDetail.transportTree[1] ? dataDetail.transportTree[1] : '' }}</h1>
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item" v-show="dataDetail.transportTree[2]">
                          <a href="#">{{ dataDetail.transportTree[2] }}</a>
                      </li>
                      <li class="breadcrumb-item active" v-show="dataDetail.transportTree[3]">
                        {{ dataDetail.transportTree[3] }}
                      </li>
                  </ol>
              </div>
            </div>
        </div>
    </div>
    <!------ Contact Wrapper Start ------>
    <div class="impl_contact_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
              <div class="impl_heading">
                  <h1>
                      <i class="fa fa-bell-o" style="color: #f15b5b;"></i> {{ dataDetail.titleSell }}
                  </h1>
              </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="impl_contact_info">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="impl_contact_box">
                    <div class="impl_con_data px-2">
                      <i class="fa fa-info-circle"></i>
                      <h2>THÔNG TIN NGƯỜI BÁN</h2>
                      <!-- <p>
                        <i class="fa fa-home"></i> 
                      </p> -->
                      <p>
                        <i class="fa fa-info"></i> Người bán: {{ dataDetail.infoSellers.fullName }}
                      </p>
                      <p>
                        <i class="fa fa-phone"></i> Số điện thoại: {{ dataDetail.infoSellers.phone }}
                      </p>
                      <p>
                        <i class="fa fa-address-card-o"></i> Địa chỉ: {{ dataDetail.infoSellers.address }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="impl_contact_box">
                    <div class="impl_con_data">
                      <i class="fa fa-sellsy" aria-hidden="true"></i>
                      <h2>Thông tin xe</h2>
                      <p><i class="fa fa-money"></i> Giá bán : {{ dataDetail.price | formatPriceToText }}</p>
                      <p><i class="fa fa-calendar"></i> Năm SX : {{ dataDetail.manufactureYear }}</p>
                      <p><i class="fa fa-info"></i> Tình trạng : {{ dataDetail.statusVehicle }}</p>
                      <p><i class="fa fa-calendar-o"></i> Ngày đăng: {{ dataDetail.manufactureYear }}</p>
                      <p><i class="fa fa-car"></i> Số dặm: {{ dataDetail.odometer | transformNumber }}</p>
                      <!-- <p><i class="fa fa-university"></i></p> -->
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="impl_contact_box">
                    <div class="impl_con_data">
                      <i class="fa fa-cog" aria-hidden="true"></i>
                      <h2>THÔNG TIN KHÁC</h2>
                      <p v-for="item in dataDetail.infoVehicleSpecial" :key="item.priority">
                        <i class="fa fa-cog" aria-hidden="true"></i> {{ item.transportColumnName }} : {{ item.parameters }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="impl_oldsingle_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                  <!-- <div class="impl_carparts_inner">
                      <div class="impl_buy_old_car">
                          <div v-html="sliderHTML_view"></div>
                          <div v-html="sliderHTML_thumb_view"></div>
                      </div>
                  </div> -->

                  <div class="card" style="background: #0a0a0a">
                    <div class="card-content">
                        <div class="card-carousel">
                            <div class="card-img">
                                <img class="img-item" :src="currentImage" alt="">
                            </div>
                            <div class="thumnails mt-5">
                               <VueSlickCarousel v-bind="settings">
                                <div
                                    v-for="(image, index) in  detailImages.images"
                                    :key="index"
                                    :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
                                    @click="activateImage(index)"
                                >
                                    <img width="150" height="70" :src="image">
                                </div>
                                
                              </VueSlickCarousel>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
                <!-- <div class="col-lg-4 col-md-4">
                    <div class="impl_buycar_data impl_buy_old_car_data">
                        <h1>Expedition , Centaur</h1>
                        <h1>$81000 </h1>
                        <div class="step_car_features">
                            <ul>
                                <li><span class="fea_name">year</span> <span class="fea_colon">: </span><span class="fea_value">2015</span> </li>
                                <li><span class="fea_name">driven</span> <span class="fea_colon">: </span> <span class="fea_value">12000 kms </span> </li>
                                <li><span class="fea_name">city</span> <span class="fea_colon">: </span><span class="fea_value">orlando</span> </li>
                                <li><span class="fea_name">color</span> <span class="fea_colon">: </span><span class="fea_value">white</span> </li>
                            </ul>
                        </div>
                        <div class="impl_old_buy_btn mt-2">
                            <a href="#" class="impl_btn">add to cart</a>
                            <a href="#" class="impl_btn mt-3">buy now</a>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>

    <div class="impl_spesi_wrapper">
        <div class="container py-4">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="impl_heading" style="margin: 20px 0px;">
                        <h1><i class="fa fa-info-circle"></i> Thông tin mô tả</h1>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <span style="font-size: 16px;" v-html="description">
                  </span>
                </div>
            </div>
        </div>
    </div>

    <div class="impl_contact_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="impl_contact_info">
              <div class="row">
                  <div class="col-lg-12 col-md-12">
                      <div class="impl_heading">
                          <h1><i class="fa fa-cog" style="color: #f15b5b;"></i> Thông số kỹ thuật</h1>
                      </div>
                  </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <ul class="nav nav-tabs align-items-center" id="myTab" role="tablist">
                    <li class="nav-item" v-for="(item, index) in listParameters" :key="index">
                      <a class="nav-link" :class="{'active': tabIndex === index}" @click="tabIndex = index" href="javascript:void(0)" role="tab" aria-selected="true" style="font-size: 16px;">
                        {{ item }}
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content mt-3" id="myTabContent">
                    <div class="tab-pane fade" v-for="(itemVehicle, indexVehicle) in vehicleParametersGroup" :key="itemVehicle.code" :class="{'active show': tabIndex === indexVehicle}" role="tabpanel" aria-labelledby="home-tab">
                      <h3 style="text-align: center; padding: 10px 0px;">
                          <i class="fa fa-cogs" style="color: #f15b5b;"></i> {{ itemVehicle.name }}
                      </h3>
                      <p v-for="(itemParam, indexParam) in itemVehicle.lstVehicleParameters" :key="indexParam">
                        <span class="xq title-row mr-2">{{ itemParam.transportColumnName }} : </span>
                        <span class="value-row text-nowrap">{{ itemParam.parameters }}</span>
                      </p>
                    </div>
                  </div>
                </div>
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
export default {
  data () {
    return {
      carId: this.$route.query.id,
      dataDetail: {},
      vehicleParametersGroup: [],
      listParameters: [],
      detailImages: [],
      tabIndex: 0,
      currentSlide: 0,
      sliderHTML: '',
      sliderHTML_thumb: '',
      sliderHTML_view: '',
      sliderHTML_thumb_view: '',
      activeImage: 0,
      settings: {
        infinite: true,
        focusOnSelect: true,
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        touchThreshold: 5
      },
      description: ''
    }
  },

  computed: {
    currentImage () {
      return this.detailImages.images[this.activeImage]
    }
  },

  filters: {
    transformNumber (data) {
      return data ? data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : ''
    }
  },

  async mounted () {
    await this.fetchData()
  },

  methods: {
    async fetchData () {
      try {
        const { data } = await TransportService.getDetailTransport({
          id: this.carId
        })
        this.dataDetail = data
        const { vehicleParametersGroup, listParameters, detailImages } = this.dataDetail
        this.vehicleParametersGroup = vehicleParametersGroup
        this.listParameters = listParameters
        this.detailImages = detailImages
        this.description = this.decodeB64toUTF8(this.dataDetail.description)

        this.detailImages.images.forEach(item => {
          this.sliderHTML += `<div><img width="570" height="176" src="${item}" alt=""></div>`
          this.sliderHTML_thumb += `<div><div class="impl_thumb_ovrly"><img width="110" height="70" src="${item}" alt=""></div></div>`
        })
        this.sliderHTML_view = '<div class="slider slider-for">' + this.sliderHTML + '</div>'
        this.sliderHTML_thumb_view = '<div class="slider slider-nav">' + this.sliderHTML_thumb + '</div>'
      } catch (error) {
        console.log(error)
      }
    },

    decodeHTML (string) {
      const decodedString = window.atob(string);
      return decodedString
    },

    endcodeHTML (string) {
      const encodedString = window.btoa(string)
      return encodedString
    },

    encodeUTF8toB64 (string) {
      return window.btoa(unescape(encodeURIComponent(string)))
    },

    decodeB64toUTF8 (string) {
      return decodeURIComponent(escape(window.atob( string)))
    },

    nextImage () {
      var active = this.activeImage + 1
      if (active >= this.detailImages.images.length) {
        active = 0
      }
      this.activateImage(active)
    },
    prevImage () {
      var active = this.activeImage - 1
      if (active < 0) {
        active = this.detailImages.images.length - 1
      }
      this.activateImage(active)
    },
    activateImage (imageIndex) {
      this.activeImage = imageIndex
    }
  }
}
</script>

<style scoped>
.impl_bread_wrapper {
  background-image: url(../../assets/images/cars/cars-detail.jpg);
}
.title-row {
  font-size: 15px;
  color: #fff;
  text-transform: capitalize;
  display: inline-block;
}
.img-item {
  height: 560px;
  width: 90%;
}
.value-row {
  color: #f15b5b;
  font-size: 15px;
}
.impl_con_data p {
  text-align: left;
}
.impl_contact_info {
  padding-top: 0;
}


@media screen and (min-width: 1200px) {
  .impl_contact_box {
    height: 18rem;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .impl_contact_box {
    height: 22rem;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .impl_contact_box {
    height: 28rem;
  }
}
@media screen and (max-width: 992px) {
  .card {
    margin-bottom: 40px;
  }
  .img-item {
    height: 260px;
  }
  .impl_contact_wrapper {
    padding: 0;
  }
  .nav-item .nav-link {
    font-size: 12px !important;
  }
  .tab-pane h3 {
    font-size: 20px;
  }
  .tab-pane span {
    font-size: 12px;
  }
  .impl_con_data {
    width: 60%;
  }
  .impl_heading {
    margin-top: 3rem;
  }
}
</style>

<style scoped src="@/assets/css/carousel.css"></style>
