<template>
<v-layout id='mirror'>
  <v-col align="center" justify="center">
    <h1>
      Title
    </h1>
    <h2>
      Subtitle
    </h2>
    <h3>
      Paragraph
    </h3>
  </v-col>
</v-layout>
</template>
<script>
export default {
  name: 'Mirror'
}
</script>
<style scoped>
#mirror {
  font-size: 60px;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  align-content: center;
  justify-content: center;
}
</style>
