<template>
  <div>
    <!------ Breadcrumbs Start ------>
    <BreadcrumbStart ref="menuStart" name="Xe máy" code="transport_motorcycle"></BreadcrumbStart>

   <!------ Featured Cars Start ------>
    <PurchaseNew :dataVehicleList="dataVehicleListNew"></PurchaseNew>

    <!-- <PurchaseUsed v-show="typeTab === 'USED'" :dataVehicleList="dataVehicleListUsed" @typeTab="changeTab"></PurchaseUsed> -->

  </div>
</template>

<script>
// import searchBox from '../Select-box/search-box.vue'
import { TransportService } from '@/services/transport.service'
import BreadcrumbStart from '../Components/Breadcrumbs_Start.vue'
import PurchaseNew from '../Purchase/Purchase_Motorbike.vue'
import PurchaseUsed from '../Purchase/Purchase_Used.vue'
import { VehicleService } from '@/services/vehicle.service'

export default {
  data () {
    return {
      motobikeMenu: [],
      typeTab: 'NEW',
      dataVehicleListNew: [],
      dataVehicleListUsed: []
    }
  },

  created () {
    // this.getTransportMenu()
  },

  mounted () {
    this.$refs.menuStart.getTransportMenu('transport_motorcycle')
    this.submitSearch()
    this.searchVehicleUsed()
  },

  methods: {
    async getTransportMenu () {
      try {
        const response = await TransportService.getListTransport({
          codeParent: 'transport_motorcycle'
        })
        this.motobikeMenu = response.data.transportListRes
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
          codeTransport: 'transport_motorcycle',
          limit: 20,
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
          codeTransport: 'transport_motorcycle',
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
  },

  components: {
    BreadcrumbStart,
    PurchaseNew,
    PurchaseUsed
  }
}
</script>

<style scoped></style>
