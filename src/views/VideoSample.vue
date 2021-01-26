<template>
<v-layout id="vs">
  <v-contiainer>
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <!-- <button @click="playVideo">play</button> -->
    <br>
    <v-btn
      color="#222222"
      dark
      @click="mirror"
      >
      Mirror
    </v-btn>
  </v-contiainer>
</v-layout>
</template>

<script>
export default {
  name: 'VideoSample',
  data () {
    return {
      videoId: 'TomOQYxFnrU'
    }
  },
  methods: {
    playVideo () {
      this.player.playVideo()
    },
    playing () {
      console.log('Watching')
    },
    mirror () { this.$router.push('/mirror') }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style scoped>
#vs {
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: black;
  color: white;
  align-content: center;
}
.video {
  width: auto;
  height: auto;
}
</style>
