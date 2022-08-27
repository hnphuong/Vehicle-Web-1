<template>
  <div>
    <!------ Compare Wrapper Start ------>
    <div class="impl_compare_wrapper" id="check1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="impl_heading">
                        <h1>Xác nhận đăng ký</h1>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div v-if="verifyNotiSuccess" class="d-flex text-success justify-content-center">{{ verifyNotiSuccess }}</div>
                    <div v-else-if="verifyError" class="d-flex text-danger justify-content-center">{{ verifyError }}</div>
                    <div class="compare_btn">
                        <button class="impl_btn" @click="confirmEmail">Xác nhận</button>
                        <!-- <button class="impl_btn">reset all</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { VehicleService } from '@/services/vehicle.service'
export default {
  data () {
    return {
      verifyRegister: this.$route.query.verifyRegister,
      verifyNotiSuccess: null,
      verifyError: null
    }
  },
  methods: {
    async confirmEmail () {
      try {
        const response = await VehicleService.verifyRegister(
          {
            verifyRegister: this.verifyRegister
          }
        )
        if (response.code === 1000) {
          this.verifyNotiSuccess = 'Xác nhận thành công'
        } else if (response.status == 500 || response.code === 1004) {
          this.verifyError = 'Xác nhận đã hết hạn'
        } else {
          this.verifyError = 'Đã có lỗi xảy ra'
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>