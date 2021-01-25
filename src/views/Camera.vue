<template>
<v-layout id="camera">
  <v-row align="center" justify="center">
    <!-- <h1>
      CameraPage
    </h1> -->
    <video id="video" autoplay>Failed</video>
  </v-row>
</v-layout>
</template>

<script>
export default {
  name: 'Camera',
  data: () => ({
  }),
  methods: {
    startup () {
      const video = document.getElementById('video')
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).then(stream => {
        video.srcObject = stream
      }).catch(console.error)
    }
  },
  mounted () {
    this.startup()
  }
}
</script>

<style scoped>
#camera {
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: black;
  color: white;
}
video {
  width: auto;
  height: auto;
}
</style>
