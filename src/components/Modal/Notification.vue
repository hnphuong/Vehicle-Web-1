<template>
  <div>
    <b-modal v-model="showModalNoti" class="modal-noti" title="Thông báo" centered>
      <div class="text-center">
        <b-icon v-if="notiSuccess" class="noti-icon" icon="check-circle-fill" variant="primary"></b-icon>
        <b-icon v-else icon="exclamation-circle-fill" class="noti-icon" variant="warning"></b-icon>
        <h5 class="text-noti mt-3 mb-2">{{ messNoti }}</h5>
      </div>
      <template #modal-footer="{}">
        <!-- <b-button size="sm" variant="primary" @click="confirm()">
          Xác nhận
        </b-button> -->
        <b-button size="sm" variant="light" @click="confirm()">
          Đóng
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props: ['showModalNoti', 'notiSuccess', 'messNoti'],
    methods: {
      confirm () {
        this.$emit('close')
      },
    }
  }
</script>

<style scoped>
::v-deep(.modal-title) {
  color: black !important ;
}
.text-noti {
  color: black;
}
.noti-icon {
  font-size: 60px;
  text-align: center;
  margin-top: 1rem;
}
</style>