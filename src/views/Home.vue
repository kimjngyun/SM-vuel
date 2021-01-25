<template>
  <v-layout id="home">
    <v-container pa-16 justify="center">
      <h1>
        Smart Mirror Prototype
      </h1>
      <v-row class="spacer">
      </v-row>
      <v-row justify="space-around">
        <v-btn
          color="#222222"
          width="245px"
          height="48px"
          dark
          @click="camera"
          >
          Camera
        </v-btn>
        <v-btn
          color="#222222"
          width="245px"
          height="48px"
          dark
          @click="annyang"
          >
          Annyang!
        </v-btn>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  methods: {
    camera () { this.$router.push('/camera') },
    annyang () { this.$router.push('/speechtest') }
  }
}
</script>

<style scoped>
#home {
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: black;
  color: white;
}

.h1 {
  text-align: center;
}

#home > div {
  max-width: 960px;
}

.spacer {
  height: 5vh;
}
</style>
