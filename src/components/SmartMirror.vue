<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'SmartMirror',
  methods: {
    camera () {
      this.$router.push('/camera')
    }
  },
  mounted: {
  }
}
</script>

<style scoped>
p {
    background: black;
    color: white;
}
</style>
