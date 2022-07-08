<template>
  <div>
    <div class="impl_bread_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h1><i class="fa fa-car"></i> {{ name }} </h1>
            <ol class="breadcrumb">
                <!-- <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">company</li> -->
            </ol>
            <div class="d-flex justify-content-sm-center mt-5" style=" margin: auto; width: fit-content;">

                <a href="javascript:void(0)" v-show="showBack" @click="actionShowAllMenu" class="menu_pro mr-3 parent-menu">
                  <span><i class="fa fa-angle-double-left"></i></span>
                </a>

                <select class="menu_pro mr-3 parent-menu" v-model="selectedTree_1" v-show="selectedMenu && showBack" @change="getMenuChild">
                  <option disabled>{{ selectedTree_1 ? selectedTree_1 : 'Chọn Ô tô' }}</option>
                  <option
                    v-for="(item, index) in carsMenu_1" :key="index"
                    :value="item.code"
                  >
                    {{ item.name }}
                  </option>
                </select>

                <select class="menu_pro mr-3 parent-menu" v-model="selectedTree_2" @change="getMenuChild_2" v-show="carsMenu_2.length > 0">
                  <option disabled>{{ selectedTree_2 ? selectedTree_2 : 'Chọn Class'}}</option>
                  <option
                    v-for="(item, index) in carsMenu_2" :key="index"
                    :value="item.code"
                  >
                    {{ item.name }}
                  </option>
                </select>

                <select class="menu_pro mr-3 parent-menu" v-model="selectedTree_3" @change="getMenuChild_3" v-show="carsMenu_3.length > 0 && !checkDuplicate">
                  <option>{{ selectedTree_3 ? selectedTree_3 : 'Chọn' }}</option>
                  <option
                    v-for="(item, index) in carsMenu_3" :key="index"
                    :value="item.code"
                  >
                    {{ item.name }}
                  </option>
                </select>

                <!-- <div class="menu_pro mr-3 parent-menu" v-if="showLastSeleted">
                  <a href="#" tabindex="-1">
                    <i class="fa fa-car"></i> {{ selectedMenu }}</a
                  >
                </div> -->

            </div>
          </div>
        </div>
      </div>

      <div class="impl_searchbox_wrapper mt-5" v-if="showMenuAll">
        <div class="container_search">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="impl_buycar_wrapper">
                <div class="impl_buycar_color">
                  <div class="slider slider-nav1 slick-initialized slick-slider" :class="{'d-flex justify-content-center': menuSearch.length < 5}">
                    <div class="slick-list draggable" style="padding: 0 5rem;">
                       <select v-for="item in carsMenu_1" @change="getMenuChild_2" :key="item.id" :title="item.name" @click="getDataSelect(item)"
                        class="menu_pro mr-3 mb-3 parent-menu">
                          <option>{{ item.name }}</option>
                          <option
                            v-show="item.code === item_child.codeParent"
                            v-for="item_child in dataSelect" :key="item_child.id"
                            :value="item_child.code"
                          >
                            {{ item_child.name }}
                          </option>
                        </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <searchBox v-else-if="showSlider" class="mt-5" @data="receiveData" :menuSearch="menuSearch" :levelMenu="levelMenu"></searchBox> -->

      <div v-else class="menu-slider">
        <div class="slider slider-nav1 slick-initialized slick-slider">
          <div class="slick-list draggable d-flex justify-content-center flex-wrap">
              <div
                style="padding: 5px; margin-bottom: 1rem"
                class="slick-slide"
                aria-hidden="true"
                tabindex="-1"
                v-for="item in menuSearch" :key="item.id"
              >
                <div :title="item.name" class="menu_pro menu-item" @click="receiveData(item)">
                  <a href="javascript:void(0)" tabindex="-1">
                    <i class="fa fa-car"></i> {{ item.name }}
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import searchBox from './search-box.vue'
import { TransportService } from '@/services/transport.service'
export default {
  props: ['name', 'code'],
  data () {
    return {
      carsMenu_1: [],
      treeTransport_1: [],
      carsMenu_2: [],
      treeTransport_2: [],
      carsMenu_3: [],
      treeTransport_3: [],
      transportName: [
        { id: 'transport', text: 'Phương tiện' },
        { id: 'transport_car', text: 'ô tô' },
        { id: 'transport_motorcycle', text: 'xe máy' },
        { id: 'transport_bicycle', text: 'xe đạp' }
      ],
      menuSearch: [],
      levelMenu: 0,
      selectedMenu: null,
      showLastSeleted: false,
      currentLevel: 1,
      selectedTree_1: null,
      selectedTree_2: null,
      selectedTree_3: null,
      checkDuplicate: false,
      dataSelect: [],
      showMenuAll: true,
      showBack: false,
      showSlider: false
    }
  },

  components: {
    // searchBox
  },

  watch: {
    selectedMenu: function () {
      this.showMenuAll = false
      if (window.innerWidth < 767) {
        this.showSlider = true
      } else {
        this.showSlider = false
      }
    }
  },

  methods: {
    async getTransportMenu (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.carsMenu_1 = response.data.transportListRes
        this.menuSearch = this.carsMenu_1
        this.levelMenu = response.data.treeTransport ? response.data.treeTransport.length : 1
        this.treeTransport_1 = response.data.treeTransport
      } catch (error) {
        console.log(error)
      }
    },
    async getTransportMenu_2 (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.menuSearch = response.data.transportListRes
        this.levelMenu = response.data.treeTransport ? response.data.treeTransport.length : 2
        // this.treeTransport_2 = response.data.treeTransport
      } catch (error) {
        console.log(error)
      }
    },
    async getTransportMenu_parent_2 (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.carsMenu_2 = response.data.transportListRes
        // this.menuSearch = response.data.transportListRes
      } catch (error) {
        console.log(error)
      }
    },

    async getTransportMenu_parent_3 (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.carsMenu_3 = response.data.transportListRes
      } catch (error) {
        console.log(error)
      }
    },

    async getMenuChild (data) {
      const code = data.target.value
      this.currentLevel = 1
      await this.controllerMenu({ code: code })
      this.carsMenu_2 = []
      this.carsMenu_3 = []
    },

    getMenuChild_2 (data) {
      this.showMenuAll = false
      this.showBack = true
      const code = data.target.value
      const codeParent = this.dataSelect.filter((e) => e.code === code)[0].codeParent
      this.currentLevel = 2
      this.controllerMenu({ code: code, codeParent: codeParent })
      this.carsMenu_3 = []
    },

    getMenuChild_3 (data) {
      const code = data.target.value
      this.currentLevel = 3
      this.controllerMenu({ code: code })
    },

    async receiveData (data) {
      this.currentLevel = this.levelMenu
      this.controllerMenu(data)
    },

    async controllerMenu (data) {
      if (this.currentLevel === 1) {
        const itemSeleted = this.carsMenu_1.filter(e => e.code === data.code)
        this.selectedMenu = itemSeleted.length ? itemSeleted[0].name : ''
        this.selectedTree_1 = this.selectedMenu
        this.getTransportMenu_2(data.code)
        this.showLastSeleted = false
      }

      if (this.currentLevel === 2) {
        await this.getTransportMenu_parent_2(data.codeParent)
        const itemSeleted = this.carsMenu_2.filter(e => e.code === data.code)
        this.selectedMenu = itemSeleted.length ? itemSeleted[0].name : ''
        this.selectedTree_2 = this.selectedMenu
        this.getTransportMenu_2(data.code)
        this.showLastSeleted = false
      }

      if (this.currentLevel === 3) {
        await this.getTransportMenu_parent_3(data.codeParent)
        const itemSeleted = this.carsMenu_3.filter(e => e.code === data.code)
        this.selectedMenu = itemSeleted.length ? itemSeleted[0].name : ''
        this.selectedTree_3 = this.selectedMenu
        this.getTransportMenu_2(data.code)
        this.showLastSeleted = true
      }
      this.currentLevel++
      if (this.currentLevel > 3) this.currentLevel = 1
      // console.log(this.currentLevel)

      this.checkSameArray()
    },

    checkSameArray () {
      if (this.carsMenu_2.length === this.carsMenu_3) this.checkDuplicate = true
      else if (this.carsMenu_2.length > 0 && this.carsMenu_3.length > 0 &&
        this.carsMenu_2[0].id === this.carsMenu_3[0].id) {
        this.checkDuplicate = true
      } else {
        this.checkDuplicate = false
      }
      // const sameArray = this.carsMenu_2.length === this.carsMenu_3.length && this.carsMenu_2.every((value, index) => value === this.carsMenu_3[index])
      // const sameArray = JSON.stringify(this.carsMenu_2) === JSON.stringify(this.carsMenu_3)
      // console.log(sameArray)
    },

    async getDataSelect (item) {
      try {
        this.showMenuAll = true
        const response = await TransportService.getListTransport({
          codeParent: item.code
        })
        this.dataSelect = response.data.transportListRes
        this.selectedTree_1 = item.name
      } catch (error) {
        console.log(error)
      }
    },

    actionShowAllMenu () {
      this.showMenuAll = true
      this.getTransportMenu(this.code)
      // this.selectedMenu = null
      this.showBack = false
      this.carsMenu_2 = []
      this.carsMenu_3 = []
    }
  }
}
</script>

<style scoped>
.parent-menu {
  text-align: center;
  margin: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  color: #fff
}
select option {
  background: #fff;
  color: black;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}
.menu-slider{
  margin-top: 3rem;
}
select {
  width: 150px;
}
option {
  width: 150px;
}
 .impl_searchbox_wrapper {
  width: 99%;
}

@media (max-width: 767px) {
  select {
    width: 100px;
  }
  option {
    width: 100px;
  }
  .slick-list.draggable {
    padding: 0 !important;
    height: 20vh;
    overflow: auto;
  }
  .parent-menu  {
    margin-top: 1rem;
  }
  .impl_searchbox_wrapper {
    top: -5rem;
  }
  .impl_bread_wrapper {
    padding: 80px 0px 0px;
  }
  .slick-slide {
    height: 40%;
  }
  .menu-item {
    width: 10rem !important;
    margin: 1rem 0;
  }
}
</style>
