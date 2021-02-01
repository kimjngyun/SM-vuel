<template>
  <v-layout id="emotion">
    <div>
        <RwvCamera @pictureTaken='setImage($event)' />
        <v-btn
          id='snap'
          color="#222222"
          width="80px"
          height="48px"
          dark
          @click='
            setLoading();
            getEmotion();
          '
        >
            Snap
        </v-btn>
    </div>
    <RwvText v-bind:prediction='mood'></RwvText>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import RwvCamera from '@/components/TheCamera.vue'
import RwvText from '@/components/TheText.vue'
import * as tf from '@tensorflow/tfjs'
import * as faceapi from 'face-api.js'

const params = { // eslint-disable-line no-unused-vars
  minConfidence: 0.5
}

export default {
  name: 'Emotion',
  data () {
    return {
      mood: '',
      class: null,
      playlists: [],
      faceModel: null,
      emotionModel: null,
      image: null,
      show: false
    }
  },
  components: {
    RwvCamera,
    RwvText
    // RwvRecommendations
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      var self = this // eslint-disable-line no-unused-vars
      // load the face detection api & emotion detection model
      await faceapi.loadSsdMobilenetv1Model('/models/features/')
      await faceapi.loadFaceLandmarkModel('/models/features')
      await faceapi.loadFaceExpressionModel('/models/features')
      this.emotionModel = await tf.loadLayersModel(
        '/models/emotion/model.json'
      )
    },
    setLoading () {
      this.show = true
      console.log('Image taken')
    },
    async getEmotion () {
      var self = this // eslint-disable-line no-unused-vars
      const image = this.$children[0].$children[0].webcam.webcamElement
      const canvas = faceapi.createCanvasFromMedia(image) // eslint-disable-line no-unused-vars
      const userExpression = await faceapi
        .detectSingleFace(image)
        .withFaceLandmarks()
        .withFaceExpressions()
      if (typeof userExpression === 'undefined') {
        this.show = false
        this.$refs['error-modal'].show()
      } else {
        this.show = false
        var expression = Object.keys(userExpression.expressions).reduce(function (a, b) { return userExpression.expressions[a] > userExpression.expressions[b] ? a : b })
      }
      this.setMood(expression)
    },
    setMood (mood) {
      var self = this // eslint-disable-line no-unused-vars
      this.mood = mood
    },
    setImage (image) {
      console.log('picture taken')
      var self = this // eslint-disable-line no-unused-vars
      this.image = image
    }
  }
}
</script>

<style scoped>
#emotion {
  background: black;
  color: white;
  width: 100vw;
  height: 100vh;
}
</style>
