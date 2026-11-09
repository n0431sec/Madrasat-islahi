import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const HadithView = ()=> import('@/views/HadithView.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/quran",
      name: "qur'aan",
      // route level code-splitting
      // this generates a separate chunk (qur'an.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ()=> import('@/views/QuraanView.vue')
      ,
      children:[
        {
          path: '/quran/Al-Fatihah',
          name: 'Al-Fatihah',
          component: ()=> import ('@/views/quran/SuratAlFatiha.vue')
        },
        {
          path: '/quran/Al-Baqarah',
          name: 'Al-Baqarah',
          component: ()=> import('@/views/quran/SuratAlBaqara.vue')
        },
        {
          path: '/quran/Al-Imraan',
          name: 'Al-Imraan',
          component: ()=> import('@/views/quran/SuratAlImrann.vue')
        },
        {
          path: '/quran/Al-Nisaa',
          name: 'Al-Nisaa',
          component: ()=> import('@/views/quran/SuratAlNisaa.vue')
        },
        {
          path: '/quran/Al-Maida',
          name: 'Maida',
          component: ()=> import('@/views/quran/SuratAlMaida.vue')
        },
        {
          path: '/quran/Al-Anaam',
          name: 'Al-Anaam',
          component: ()=> import('@/views/quran/SuratAlAnaam.vue')
        },
        {
          path: '/quran/Al-Araaf',
          name: 'Al-Araaf',
          component: ()=> import('@/views/quran/SuratAlAraaf.vue')
        },
        {
          path: '/quran/Al-Anfaal',
          name: 'Al-Anfaal',
          component: ()=> import('@/views/quran/SuratAlAnfaal.vue')
        },
        {
          path: '/quran/Tawba',
          name: 'Tawba',
          component: ()=> import('@/views/quran/SuratTawba.vue')
        },
        {
          path: '/quran/Yuunus',
          name: 'Yunus',
          component: ()=> import('@/views/quran/SuratYuunus.vue')
        },
        {
          path: '/quran/Huud',
          name: 'Huud',
          component: ()=> import('@/views/quran/SuratHuud.vue')
        },
        {
          path: '/quran/Yusuf',
          name: 'Yusuf',
          component: ()=> import('@/views/quran/SuratYusuf.vue')
        },
        {
          path: '/quran/Al-Raad',
          name: 'Al-Raad',
          component: ()=> import('@/views/quran/SuratAlRaad.vue')
        },
        {
          path: '/quran/Ibrahim',
          name: 'Ibrahim',
          component: ()=> import('@/views/quran/SuratIbrahim.vue')
        },
        {
          path: '/quran/Al-Hijri',
          name: 'Hijri',
          component: ()=> import('@/views/quran/SuratAlHijri.vue')
        },
        {
          path: '/quran/An Nahl',
          name: 'An Nahl',
          component: ()=> import('@/views/quran/SuratAnNahli.vue')
        },
      ]
    },
    {
      path: "/hadith",
      name: "hadith",
      component: HadithView
    },
    {
      path: "/lugha",
      name: "Lugha",
      component: ()=> import('@/views/Lugha.vue')
    },
   
    {
      path: "/fiqhi",
      name: "Fiqhi",
      component: ()=> import('@/views/FiqhiView.vue')
    },
    {
      path: "/more",
      name: "More",
      component: ()=> import('@/views/MoreView.vue')
    },
    {
      path: "/about",
      name: "About Us",
      component: ()=> import('@/views/AboutView.vue')
    },
  ]
})

export default router
