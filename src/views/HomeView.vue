<script setup>
import TheImageCube from "@/components/TheImageCube.vue";
import TheVideoGallary from "@/components/TheVideoGallary.vue";
</script>

<template>
  <div class="home-view">
    <div class="home-header">
      <div class="section-header">
        Our Gallery!
      </div>
      <div class="image-container">
        <the-image-cube></the-image-cube>
      </div>
    </div>

    <div class="home-intro">
      <div class="section-header">
        Karibu Madrasat Islahi
      </div>
      <div>"Karibu katika Madrasat Islahi, shule inayojitolea kwa kutoa elimu bora ya Kiislamu na kuimarisha maadili mema kwa wanafunzi wake. Tunatoa mazingira salama na yenye kuhimiza ustawi wa kiroho na kiakili. Jiunge nasi leo na ujifunze kwa njia rahisi na yenye kufurahisha."
</div>
</div>

      <!--  -->
      <div class="home-services">
        <div class="section-header">
          Huduma Zetu:
        </div>
        <div>
Qur'an: Masomo ya kusoma na kuhifadhi Qur'an kwa ufasaha na usahihi.
Fiqhi: Uelewa wa sheria za Kiislamu na jinsi ya kuzitumia katika maisha ya kila siku.
Lugha ya Kiarabu: Kusoma, kuandika, na kuzungumza Kiarabu kwa urahisi.
Hadithi: Masomo ya hadithi za Mtume Muhammad (SAW) ili kujifunza mifano bora ya maisha.
Nahau: Uelewa wa sarufi ya Kiarabu kwa kuzingatia misingi ya Kiswahili.
"Pia, tunahifadhi Qur'an na kushiriki katika mashindano ya Qur'an mbalimbali kila mwaka, hivyo kuimarisha ujuzi wa wanafunzi wetu."
</div> </div>

<div class="home-services">
        <div class="section-header">
          Kwa Nini Kujiunga Nasi?:
        </div>
        <div>
<p>Walimu wenye ujuzi na uzoefu wa kielimu na kiroho.
Mazingira salama na yenye kuhimiza ustawi wa wanafunzi.
Mashindano ya Qur'an na matukio ya kielimu kila mwaka.
Ushirikiano wa karibu kati ya walimu, wanafunzi, na wazazi.
Jiunge nasi Sasa!</p>

<p>Je, unataka kuwa sehemu ya jumuiya inayojitolea kwa elimu bora ya Kiislamu? Jiunge nasi leo!</p>
<p>Tunatoa fursa ya kujifunza Qur'an, Fiqhi, na Lugha ya Kiarabu kwa njia rahisi na yenye kufurahisha.</p>
<p>Pata ujuzi wa kimsingi wa Sheria za Kiislamu na jinsi ya kuzitumia katika maisha yako ya kila siku.</p>
<p><strong>Karibu katika familia yetu ya Madrasat Islahi!</strong></p>

</div> </div>

      <!--  -->
      <div class="videos">
        <div class="section-header">
          Our Videos!
        </div>
        <div class="video-card image-container">
          <the-video-gallary/>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .video-card{
    display: flex;
    justify-content: center;
  }

  .home-view{
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  .home-intro > div {
    margin-bottom: 1rem;
  }  
  .home-intro {
    text-align: justify;
  }
  
</style>
