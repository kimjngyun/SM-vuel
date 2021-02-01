<template>
    <div class="wrapper">
        <div class="child">
            <div class="prediction">
                <div>
                    <h5 class="text-left">You are...</h5>
                    <br>
                    <h4 id="predicted-mood" class="text-left">{{ emoji[prediction] }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RwvText',
  props: {
    prediction: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      emoji: { happy: '😁', sad: '☹️', neutral: '😐', angry: '😡', surprised: '😲' }
    }
  }
}
</script>

<style scoped>
</style>
