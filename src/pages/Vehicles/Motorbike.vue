<template>
  <div>
    <!------ Breadcrumbs Start ------>
    <BreadcrumbStart ref="menuStart" name="Xe máy" code="transport_motorcycle"></BreadcrumbStart>

   <!------ Featured Cars Start ------>
    <PurchaseNew ref="purchaseCar" typeTransportCode="transport_motorcycle"></PurchaseNew>

  </div>
</template>

<script>
// import searchBox from '../Select-box/search-box.vue'
import { TransportService } from '@/services/transport.service'
import BreadcrumbStart from '../Components/Breadcrumbs_Start.vue'
import PurchaseNew from '../Purchase/Purchase_Car.vue'
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
    // this.$refs.menuStart.getTransportMenu('transport_motorcycle')
    this.$refs.purchaseCar.searchCar('NEW')
    this.submitSearch()
    this.searchVehicleUsed()
  },

  methods: {
    async getTransportMenu () {
      try {
        const response = await TransportService.getListTransport({
          codeParent: 'transport_motorcycle',
          status: 'ACTIVE'
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
          status: 'ACTIVE',
          limit: 9,
          page: 1,
          statusVehicle : 'ACTIVE'
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
          limit: 9,
          page: 1,
          statusVehicle : 'ACTIVE'
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
    PurchaseNew
  }
}
</script>

<style scoped></style>
