export default {
  SET_LOADING (state, data) {
    state.loading = data.loading
  },
  CLEAR_LOADING (state, data) {
    state.loading = false
  }
}
