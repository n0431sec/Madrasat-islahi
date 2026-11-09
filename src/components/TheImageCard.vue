<script setup lang="js">
defineProps({
    pichaSource:{
        type:String,
    },
    text:{
      type:String,
    }
})
</script>
<template>
  <div class="img-cont">
    <img class="image" :src="pichaSource" alt="" />
    <div class="text" v-if="text"> <div>{{ text }}</div> </div>
  </div>
</template>

<style scoped>
.img-cont {
  height: 100%;
  width: 100%;
  position: relative;
}

.image {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.text {
  position: absolute;
  bottom: 20px;
  left: 0px;
  
  max-width: 100%;
  color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
 
}
.text div{
  background: #4D4D4D;
  padding: 10px 20px;
  border-radius: 12px;
  margin: 5px;
}
</style>
