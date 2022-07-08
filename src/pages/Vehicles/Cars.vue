<template>
  <div>
    <!------ Breadcrumbs Start ------>
    <BreadcrumbStart ref="menuStart" name="Ô tô" code="transport_car"></BreadcrumbStart>

    <!------ Featured Cars Start ------>
    <PurchaseCar ref="purchaseCar" :dataVehicleList="dataVehicleListNew"></PurchaseCar>

    <!-- <PurchaseUsed v-show="typeTab === 'USED'" :dataVehicleList="dataVehicleListUsed" @typeTab="changeTab"></PurchaseUsed> -->

  </div>
</template>

<script>
import BreadcrumbStart from '../Components/Breadcrumbs_Start.vue'
import { TransportService } from '@/services/transport.service'
import { mapGetters } from 'vuex'
import PurchaseCar from '../Purchase/Purchase_Car.vue'
import PurchaseUsed from '../Purchase/Purchase_Used.vue'
import { VehicleService } from '@/services/vehicle.service'

export default {
  data () {
    return {
      carsMenu_1: [],
      treeTransport_1: [],
      transportName: [
        { id: 'transport', text: 'Phương tiện' },
        { id: 'transport_car', text: 'ô tô' },
        { id: 'transport_motorcycle', text: 'xe máy' },
        { id: 'transport_bicycle', text: 'xe đạp' }
      ],
      menuSearch: [],
      levelMenu: 0,
      typeTab: 'NEW',
      dataVehicleListNew: [],
      dataVehicleListUsed: []
    }
  },

  computed: {
    ...mapGetters({
      getDataEndPoint: 'endpoint/dataEndPoint'
    })
  },

  filters: {
    transformName (name, transportName) {
      const transport = transportName.filter(item => item.id === name)
      return transport[0] ? transport[0].text : ''
    }
  },

  components: {
    BreadcrumbStart,
    PurchaseCar,
    PurchaseUsed
  },

  mounted () {
    this.$refs.menuStart.getTransportMenu('transport_car')
    this.$refs.purchaseCar.searchCar('NEW')
    this.submitSearch()
    this.searchVehicleUsed()
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
    changeTab (type) {
      this.typeTab = type
    },

    async submitSearch() {
      try {
        const response = await VehicleService.getVehicleList({
          codeTransport: 'transport_car',
          status: 'NEW',
          limit: 9,
          page: 1
        })
        if (response.code === 1000) {
          this.dataVehicleListNew = response.data.vehicleList
        } else {
          this.dataVehicleListNew = []
        }
      } catch (error) {
        console.log(error)
      }
    },

    async searchVehicleUsed() {
      try {
        const response = await VehicleService.getVehicleList({
          codeTransport: 'transport_car',
          status: 'USED',
          limit: 20,
          page: 1
        })
        if (response.code === 1000) {
          this.dataVehicleListUsed = response.data.vehicleList
        } else {
          this.dataVehicleListUsed = []
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.parent-menu {
  text-align: center;
  margin: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
