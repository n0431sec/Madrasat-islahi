<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted, onUnmounted } from 'vue';
import IconMenu from './components/icons/IconMenu.vue';
import is_open from './stores/IsOpened';

 const screenWidth = ref(window.innerWidth);
const isMobile = computed(() => screenWidth.value < 660);

 onMounted(() => {
   window.addEventListener('resize', handleResize);
 });

 onUnmounted(() => {
   window.removeEventListener('resize', handleResize);
 });

 const handleResize = () => {
   screenWidth.value = window.innerWidth;
 }


</script>

<template>
  <div class="header-wrapper">
      <div class="header">
        <div class="heading-part">
          <img class="header-img" src="./assets/sun.svg">
          <h3 id="madrasah-name">Madrasat Islahi</h3>
          <icon-menu v-if="isMobile" />
          <img v-else class="logo" src="/Islahi-Logo.png" alt="">
        </div>
        <!--  -->
        <nav v-if="!isMobile">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/quran">Qur'aan</RouterLink>
          <RouterLink to="/hadith">Hadith</RouterLink>
          <RouterLink to="/fiqhi">Fiqhi</RouterLink>
          <RouterLink to="/lugha">Lugha</RouterLink> 
          <RouterLink to="/about">About Us</RouterLink> 
        </nav>
        <nav v-else class="drop-down" :class="is_open ? 'drop-down-now' : ''">
          <div class="heading-part">
          <img class="header-img" src="/src/Img/Islahi-Logo.png">
          <h3 id="madrasah-name">Madrasah Islahi</h3>
          <icon-menu v-if="isMobile" />
          <img v-else class="logo" src="/Islahi-Logo.png" alt="">
        </div>
         <div class="routes">
          <RouterLink  @click="is_open = !is_open"  to="/">Home</RouterLink>
          <RouterLink @click="is_open = !is_open"  to="/about">About Us</RouterLink>
          <RouterLink @click="is_open = !is_open"  to="/quran">Qur'aan</RouterLink>
          <RouterLink @click="is_open = !is_open"  to="/hadith">Hadith</RouterLink>
          <RouterLink @click="is_open = !is_open"  to="/lugha">Lugha</RouterLink>
          <RouterLink @click="is_open = !is_open"  to="/fiqhi">Fiqhi</RouterLink>
          <!--RouterLink to="/tawheed">Tawheed</RouterLink>
          <RouterLink to="/more">More</RouterLink> -->
         </div>
        </nav>
        <!--  -->
      </div>
    </div>
  <div class="wrapper">
    <RouterView />
  </div>
  <footer>
    <div class="footer">
      <p>© 2024 Madrasat Islahi.Haki zote zimehifadhiwa.</p>
      <p>Wasiliana nasi: <a href="tel:+255686820042">+255686820042</a></p>
    </div>
  </footer>
</template>

<style scoped>

.header{
  width: 100%;
}

.header-wrapper{
  background: rgb(0, 0, 69);
  padding-top: 1rem;
}

footer{
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100%;
  background: rgb(0, 0, 69);
}

.footer{
  padding: 1rem;
}

.footer a{
  color: #fff;
  text-decoration: none;
}
.header-img {
  width: 70px;
  object-fit: contain;
}

.header .heading-part {
  display: inline-flex;
  width: 100%;
  height: 51px;
  align-items: center;
  padding:0 clamp(1rem,2rem,4rem);
}

#madrasah-name {
  width: 100%;
  text-align: center;
  font-family: 'Bernard MT','Roboto Condensed';
  color: #fff;
}

.logo {
  width: 51px;
}

nav {
  width: 100%;
  display: flex;
  background-color: #4D4D4D;
  justify-content: center;
  height: max-content;
  padding: 0.5rem 0;
}

nav a.router-link-exact-active {
  color: var(--nav-act-col);
  background-color: #fff;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: var(--vt-c-text-dark-2);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border: 1px solid var(--color-border);
  margin: 1.5px 0 1.5px 5px;
  background-color: transparent;
  color: var(--vt-c-white);
}

nav a:first-of-type {
  border: 1px;
}

.drop-down {
  position: fixed;
  top: 0;
  left: -101%;
  width: 100%;
  display: block;
  z-index: 6;
  height: 100%;
  transition: left 380ms ease-in-out;
  background: transparent;
  padding: 0;
}

.drop-down .heading-part{
  background: rgb(0, 0, 69); 
  padding: 2rem 10px;
}
.drop-down .routes{
  padding: 2rem 14px;
  background: rgba(77,77,77,0.9);
  height: 100%;
}

.drop-down.drop-down-now {
  top: 0;
  left: 0;
}

.routes a{
  display: block;
  padding: 10px 0;
  border-radius:0 12px  0 12px ;
  text-align: center;
  margin: 10px 0;
  background: rgba(77,77,77);;
}

 .routes a.router-link-exact-active{
  background: #fff !important;
  color: #4D4D4D;
}

.routes a:hover{
  color: #F7931D;
}

.routes a.router-link-exact-active:hover{
  color: #F7931D;
}
@media (min-width: 1024px) {

  nav {
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
