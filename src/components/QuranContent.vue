<script setup>
function generateSurahNo() {
  var number = 1;
  while (number < 115) {
    surahNo.push(number)
    number++
  }
}



const surahNo = [];
const surahs = ['Al-Fatihah', 'Al-Baqarah', 'Al-Imraan', 'Al-Nisaa', 'Al-Maida', 'Al-Anaam', 'Al-Araaf', 'Al-Anfaal', 'Tawba', 'Yuunus', 'Huud', 'Yusuf', 'Al-Raad', 'Ibrahim', 'Al-Hijri', 'An Nahl']
generateSurahNo()

</script>
<template>
  <div class="qur-view">
    <div class="qtbl-content">
      <RouterLink class="qtbl-link" v-for="surah of surahs" :to="{ path: /quran/ + surah }" :key="surah">Surat {{ surah }}
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.qtbl-content {
  width: 10rem;
  padding: 1rem 0 1rem 1rem;
}

.qtbl-link {
  display: block;
  width: 100%;
  color: var(--vt-c-white);
}

.qtbl-link.router-link-exact-active {
   font-weight: 500;
  padding-left: 1rem;
  height: 40px;
  color: var(--nav-act-col);
   background-image: url('../assets/anchor_bg.svg');
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   display: flex;
   align-items: center;
}

.qtbl-link.router-link-exact-active:hover {
  color: #F7931D;
}

.qur-view{
  background-color: var(--nav-act-col);
}
</style>