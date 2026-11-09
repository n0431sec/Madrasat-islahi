
<script setup>
const videoIds = [
  'p46Y0_DlSQA',
  'AD0WckqsZ_g',
  '2qe6Fesr9Rs',
  '4TbyS7QiTV0',
  'PkmnErbJ_GI',
  'b_VD_VvWS7E',
  'Z23EECwodM8',
  'CbnFXPhqI6w',
  'jSK_OH8r8is']

</script>

<template>
<div class="video-container">
  <iframe
      class="y-video"
       v-for="(video,index) in videoIds " :key="`youtube-video`+index"
      :src="'https://www.youtube.com/embed/' + video"
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
    ></iframe>
</div>
</template> 


<style scoped>

.video-container{
height: 100%;
width: 100%;
display: flex;
gap: 10px;
overflow-x: scroll;
justify-content: start;
scroll-behavior: smooth;
}

.video-container::-webkit-scrollbar {
display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}
.video-container::-moz-scrollbar {
display: none; /* Hide scrollbar for Firefox */
}

.y-video{
height: 300px;
width: 100%;
border-radius: 12px;
min-width: 300px;
background-color: rgb(27, 96, 156);
}
</style>
