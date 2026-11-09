<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const ayahs = ref()
const error = ref()
const name = ref()
const arabic = ref()
const meaning = ref()
const edition = ref()
const numberOfAyahs =ref()
const surahNo = ref()
const previAyah = 1901
const ineshushwa = ref()
const getSurah = async () => {
  const url = 'https://api.quranhub.com/v1/surah/16'
  try {
   await axios.get(url).then((response) => {

      ayahs.value = response.data.data.ayahs
      name.value = response.data.data.englishName
      meaning.value = response.data.data.englishNameTranslation
      arabic.value = response.data.data.name
      edition.value = response.data.data.edition
      numberOfAyahs.value = response.data.data.numberOfAyahs
      ineshushwa.value = response.data.data.revelationType
      surahNo.value = response.data.data.number
    }).catch((err) => {
        error.value = err['message'] +': Haiwezi kupakia Taarifa kuhusu surah husika'
      })
  }
  catch (erro) {
    error.value = erro['message']
  }
}

onMounted(() => {
  getSurah()
})


</script>
<template>
    <div class="sehem-kuras">
      <div class="bismillah">سْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
     <div v-if="ayahs" class="heading"><span>{{ 'Surat ' + name }} </span> <span class="noto-sans-arabic-quran">{{ arabic }}</span></div>
     <div v-if="ayahs" class="heading-eng">{{  meaning }}</div>
     <div v-if="ayahs" class="heading"><span>Surah namba: {{ surahNo }}</span><span>Idadi ya Ayah: {{ numberOfAyahs  }}</span><span>Imeshushwa: {{ ineshushwa }}</span></div>
     <div v-if="ayahs" class="quran-view">
       <span class="surah-page"  v-for="ayah in ayahs " :key="ayah">
         <span class="ayah">{{ ayah['text'] }}</span>
         <span class="number-circle">{{ ayah['number'] - previAyah }}</span>
       </span>
     </div>
     <div class="edition" v-if="edition">
       <div >{{edition['identifier']}}</div>
       <div >Language ({{edition['language']}}) Arabic</div>
       <div >{{edition['name']}}</div>
       <div >{{edition['englishName']}}</div>
     </div>
     <div class="error-occur" v-if="error">{{ error }}</div>
    </div>
   </template>
