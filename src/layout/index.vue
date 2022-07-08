<template>
  <div id='app'>
    <component :is='layout'>
      <transition name='fade'>
        <router-view></router-view>
      </transition>
    </component>

  </div>

</template>

<script>
const default_layout = 'default'

export default {
  name: 'AppLayout',
  mounted () {
    
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  },
  methods: {
    
  }
}
</script>
