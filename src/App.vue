<template>
  <v-app id="APP">
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-btn
      color="#222222"
      dark
        @click="goBack"
      class="debug">
      back
    </v-btn>
  </v-app>
</template>

<script>
import router from '@/router'
export default {
  name: 'App',
  components: {
  },
  methods: {
    goBack () { router.go(-1) }
  },

  data: () => ({
    //
  })
}
</script>
<style scoped>
#APP {
  width: 100vw;
  height: 100vh;
}
.debug {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
::-webkit-scrollbar {
  display: none;
}

</style>
