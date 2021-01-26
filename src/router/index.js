import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Camera from '../views/Camera.vue'
import SpeechTest from '../views/SpeechTest.vue'
import VideoSample from '../views/VideoSample.vue'
import Mirror from '../views/Mirror.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera
  },
  {
    path: '/speechtest',
    name: 'SpeechTest',
    component: SpeechTest
  },
  {
    path: '/video',
    name: 'VideoSample',
    component: VideoSample
  },
  {
    path: '/mirror',
    name: 'Mirror',
    component: Mirror
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
