<template>
  <div>
    <!------ Purchase new section Start ------>
    <div class="impl_purchase_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="impl_sorting_text custom_select">
              <span class="impl_show"> Hiển thị {{ dataVehicleList.length }} trên {{ search.total }} kết quả</span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="impl_category_type">
              <a href="javascript:void(0)" @click="changeTab('NEW')" :class="{'active':currentTab === 'NEW'}" class="impl_btn">
                Xe mới
              </a>
              <a href="javascript:void(0)" @click="changeTab('USED')" :class="{'active':currentTab === 'USED'}" class="impl_btn impl_used_car">
                Xe đã sử dụng
              </a>
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="impl_purchase_inner">
              <div class="row">
                <div class="col-lg-3 col-md-4">
                  <div class="impl_sidebar">
                    <div class="impl_product_search widget woocommerce">
                      <div class="impl_footer_subs">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập từ khoá..."
                        />
                        <button class="foo_subs_btn" @click="searchCar()">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                    <!--Brands-->
                    <div class="impl_product_brand widget woocommerce">
                      <h2 class="widget-title">Hãng</h2>
                      <ul>
                        <li v-for="item in transportOptions" :key="item.id">
                          <label class="brnds_check_label">
                            {{ item.text }}
                            <input :value="item.id" type="checkbox" @change="searchCar()" v-model="selectedBrand" name="check" />
                            <!-- <b-form-checkbox :value="item.id" v-model="selectedBrand" name="check"></b-form-checkbox> -->
                            <span class="label-text"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <!--Colors-->
                    <!-- <div class="impl_product_color widget woocommerce">
                      <h2 class="widget-title">color</h2>
                      <ul>
                        <li>
                          <label class="brnds_check_label">
                            black
                            <input type="checkbox" name="check" />
                            <span class="label-text"></span>
                          </label>
                        </li>
                        <li>
                          <label class="brnds_check_label">
                            blue
                            <input type="checkbox" name="check" />
                            <span class="label-text"></span>
                          </label>
                        </li>
                        <li>
                          <label class="brnds_check_label">
                            white
                            <input type="checkbox" name="check" />
                            <span class="label-text"></span>
                          </label>
                        </li>
                        <li>
                          <label class="brnds_check_label">
                            yellow
                            <input type="checkbox" name="check" />
                            <span class="label-text"></span>
                          </label>
                        </li>
                        <li>
                          <label class="brnds_check_label">
                            red
                            <input type="checkbox" name="check" />
                            <span class="label-text"></span>
                          </label>
                        </li>
                        <li>
                          <label class="brnds_check_label">
                            grey
                            <input type="checkbox" name="check" />
                            <span class="label-text"></span>
                          </label>
                        </li>
                        <li>
                          <label class="brnds_check_label">
                            brown
                            <input type="checkbox" name="check" />
                            <span class="label-text"></span>
                          </label>
                        </li>
                        <li>
                          <label class="brnds_check_label">
                            orange
                            <input type="checkbox" name="check" />
                            <span class="label-text"></span>
                          </label>
                        </li>
                      </ul>
                    </div> -->
                    <!--Price Range-->
                    <div class="impl_product_price widget woocommerce">
                      <h2 class="widget-title">Chọn giá</h2>
                      <div class="price_range">
                         <b-form-input id="range-1" v-model="selectData.minPrice" type="range" :min="dataRange.price.minValue" :max="dataRange.price.maxValue"></b-form-input>
                         <div class="mt-2">Min: {{ selectData.minPrice }}</div>
                         <b-form-input id="range-1" v-model="selectData.maxPrice" type="range" :min="dataRange.price.minValue" :max="dataRange.price.maxValue"></b-form-input>
                         <div class="mt-2">Max: {{ selectData.maxPrice }}</div>
                      </div>
                    </div>
                    <div class="impl_product_price widget woocommerce">
                      <h2 class="widget-title">Chọn năm</h2>
                      <div class="price_range">
                         <b-form-input id="range-1" v-model="selectData.minManufactureYear" type="range" :min="dataRange.year.minValue" :max="dataRange.year.maxValue"></b-form-input>
                         <div class="mt-2">Min: {{ selectData.minManufactureYear }}</div>
                         <b-form-input id="range-1" v-model="selectData.maxManufactureYear" type="range" :min="dataRange.year.minValue" :max="dataRange.year.maxValue"></b-form-input>
                         <div class="mt-2">Max: {{ selectData.maxManufactureYear }}</div>
                      </div>
                    </div>
                    <!--Car Type-->
                    <!-- <div class="impl_product_type widget woocommerce">
                      <h2 class="widget-title">car type</h2>
                      <ul>
                        <li><a href="#">Hatchback</a></li>
                        <li><a href="#">Sedan</a></li>
                        <li><a href="#">MPV</a></li>
                        <li><a href="#">SUV</a></li>
                        <li><a href="#">Couple</a></li>
                        <li><a href="#">Convertible</a></li>
                      </ul>
                    </div> -->
                  </div>
                </div>
                <div class="col-lg-9 col-md-8">
                  <div class="row">
                    <div class="col-lg-4 col-md-6" v-for="item in dataVehicleList" :key="item.id">
                      <div class="impl_fea_car_box">
                        <div class="impl_fea_car_img" @click="$router.push(`/detail?id=${item.id}`)">
                          <img
                            :src="item.avatar"
                            alt=""
                            class="img-fluid impl_frst_car_img"
                            width="370"
                            height="320"
                          />
                          <img
                            :src="item.subAvatar"
                            alt=""
                            class="img-fluid impl_hover_car_img"
                          />
                          <span class="impl_img_tag" title="compare"
                            ><a href="javascript:void(0)" @click="$router.push(`/detail?id=${item.id}`)"
                              ><i
                                class="fa fa-exchange"
                                aria-hidden="true"
                              ></i></a
                          ></span>
                        </div>
                        <div class="impl_fea_car_data">
                          <h2>
                            <a href="javascript:void(0)" @click="$router.push(`/detail?id=${item.id}`)">
                              {{ item.titleSell }}
                            </a>
                          </h2>
                          <ul>
                            <li>
                              <span class="impl_fea_title">Nơi bán</span>
                              <span class="impl_fea_name">{{ item.nameCity }}</span>
                            </li>
                            <li>
                              <span class="impl_fea_title">Tình trạng</span>
                              <span class="impl_fea_name">{{ item.statusVehicle }}</span>
                            </li>
                            <li>
                              <span class="impl_fea_title">Năm SX</span>
                              <span class="impl_fea_name">{{ item.manufactureYear }}</span>
                            </li>
                            <li>
                              <span class="impl_fea_title">Số dặm</span>
                              <span class="impl_fea_name">{{ item.odometer | transformNumber }}</span>
                            </li>
                          </ul>
                          <div class="impl_fea_btn">
                            <button class="impl_btn" @click="$router.push(`/detail?id=${item.id}`)">
                              <span class="impl_doller">{{ item.price | formatPriceToText }} </span
                              ><span class="impl_bnw">Mua ngay</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--pagination start-->
                    <div class="col-lg-12 col-md-12">
                      <div class="impl_pagination_wrapper">
                        <nav aria-label="Page navigation example">
                          <b-pagination
                            v-model="search.page"
                            :total-rows="search.total"
                            :per-page="search.limit"
                          ></b-pagination>
                        </nav>
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
  </div>
</template>

<script>
import { TransportService } from '@/services/transport.service'
import { VehicleService } from '@/services/vehicle.service'
export default {
  // props: ['dataVehicleList'],
  created () {
    this.getListTransport()
    // this.searchCar('NEW')

    this.dataRange = JSON.parse(localStorage.getItem('PriceYearRange'))
    this.selectData.minPrice = this.dataRange.price.minValue
    this.selectData.maxPrice = this.dataRange.price.maxValue
    this.selectData.minManufactureYear = this.dataRange.year.minValue
    this.selectData.maxManufactureYear = this.dataRange.year.maxValue
    this.currentTab = 'NEW'
  },
  mounted () {
    
  },
  data () {
    return {
      dataRange: null,
      dataVehicleList: [],
      dataSelect: {},
      transportOptions: [],
      selectedBrand: [],
      selectData: {
        transport: null,
        company: null,
        series: null,
        model: null,
        codeCity: null,
        status: null,
        design: null,
        fuel: null,
        minPrice: 500,
        maxPrice: 5000,
        minManufactureYear: 2010,
        maxManufactureYear: 2023
      },
      search: {
        page: 1,
        limit: 9,
        total: 0
      },
      currentTab: 'NEW'
    }
  },

  filters: {
    transformNumber (data) {
      return data ? data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : ''
    }
  },

  watch: {
    'search.page': function () {
      this.searchCar(this.currentTab)
    }
  },

  methods: {
    async getListTransport () {
      try {
        const response = await TransportService.getListTransport({
          codeParent: 'transport_car'
        })
        this.transportOptions = response.data.transportListRes.map((e) => {
          return { id: e.code, text: e.name }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async searchCar(status) {
      try {
        const response = await VehicleService.getVehicleList({
          codeTransport: this.selectedBrand.length > 0 ? this.selectedBrand[0] : 'transport_car',
          minPrice: this.selectData.minPrice * 1000000,
          maxPrice: this.selectData.maxPrice * 1000000,
          minManufactureYear: this.selectData.minManufactureYear,
          maxManufactureYear: this.selectData.maxManufactureYear,
          status: status,
          limit: this.search.limit,
          page: this.search.page
        })
        if (response.code === 1000) {
          this.dataVehicleList = response.data.vehicleList
          this.search.total = response.totalPage.total
          this.totalPage = Math.floor(this.search.total / this.search.limit) + 1
        } else {
          this.dataVehicleList = []
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeTab (status) {
      this.currentTab = status
      this.searchCar(status)
    }
  }
}
</script>

<style scoped>
.impl_fea_car_data ul li span.impl_fea_title {
  width: 50%;
}
.impl_fea_car_img:hover {
  cursor: pointer;
}
</style>
