<template>
  <v-layout id="stt">
    <v-col align="center" justify="center">
    <h1>
      STT test page using Annyang.js
    </h1>
    <br>
    <div id='result'>
      결과가 없습니다.
    </div>
    <p>
      A "Smart Mirror" is a two-way mirror with a display behind it that is typically used to display useful information
    </p>
    <p>
      like the time and date, the weather, your calendar, and all sorts of other things! People use them for all kinds of purposes.
    </p>
    <p>
      You'll see them placed in the bathroom, in the kitchen, as a vanity, all over the place!
    </p>
    </v-col>
  </v-layout>
</template>
<script>

// annyang.start({ autoRestart: false, continuous: true })
// var recognition = annyang.getSpeechRecognizer()
// var finalTranscript = ''
// recognition.interimResults = true
// recognition.onresult = function (event) {
//   var interimTranscript = ''
//   finalTranscript = ''
//   for (var i = event.resultIndex; i < event.results.length; ++i) {
//     if (event.results[i].isFinal) {
//       finalTranscript += event.results[i][0].transcript
//       console.log('finalTranscript=' + finalTranscript)
//     } else {
//       interimTranscript += event.results[i][0].transcript
//       console.log('interimTranscript=' + interimTranscript)
//     }
//   }
//   document.getElementById('result').innerHTML = '중간값:=' + interimTranscript + '<br/>결과값=' + finalTranscript
//   console.log('interim=' + interimTranscript + '|final=' + finalTranscript)
// }

export default {
  name: 'SpeechTest'
}
</script>

<style scoped>
#stt {
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: black;
  color: white;
}
</style>
