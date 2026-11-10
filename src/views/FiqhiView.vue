
<script setup>
import { ref } from 'vue'

const selectedTopic = ref(null)

const topics = [
  {
    id: 1,
    name: 'Twahara',
    arabic: 'الطهارة',
    subtitle: 'Usafi, udhu, josho na najisi.',
    image: 'https://images.openai.com/static-rsc-4/4qrWlkoo3lql82aLyra_YVuArvCw8KAZX6cMLR1eDrbFKWUQGSCN7s7j7aJri2anEB135ULI2Gxiq1gmyHsBv4rmN6OzmZ2LkZKZ1vsOqTzx6O2FBVDglIh10lHdKwBiLw1Alo1LgZXb8_P0KH9cm0ggMR_CDGhHQ6yRZgGF--w?purpose=inline',
    lessons: [
      'Maana ya Twahara',
      'Aina za maji na hukumu zake',
      'Udhu na namna ya kuutawadha',
      'Ghusl (Josho la kisharia)',
      'Tayammum',
      'Najisi na namna ya kujitwaharisha'
    ],
    description: 'Jifunze namna ya kujitwaharisha na kujiandaa kwa ibada mbalimbali katika Uislamu.',
    reference: 'Qurani 5:6'
  },
  {
    id: 2,
    name: 'Swalah',
    arabic: 'الصلاة',
    subtitle: 'Masharti, nguzo na Sunnah za Swalah.',
    image: 'https://images.openai.com/static-rsc-4/H3KW7dXGnPFh5m-2F0HwWG1Jn992rzVx9WfaJLMollsDPHNaoX4n9F4WDwxyiCRC54ruhr2azOV4EM_zNenVGiBOpt8ZOdo0vsfwJzZHbxlxBYa8IKGu660Q3Zk_eKi9BzGwqxkmZOP28C9d9OqONEpVZuNbGDf7bqQsT21Rb8?purpose=inline',
    lessons: [
      'Maana na umuhimu wa Swalah',
      'Nyakati za Swalah tano',
      'Masharti ya Swalah',
      'Nguzo za Swalah',
      'Sunnah za Swalah',
      'Mambo yanayobatilisha Swalah',
      'Swalah ya msafiri'
    ],
    description: 'Jifunze namna sahihi ya kuswali, kuanzia maandalizi mpaka kumaliza Swalah.',
    reference: 'Qurani 2:43'
  },
  {
    id: 3,
    name: 'Swawm',
    arabic: 'الصيام',
    subtitle: 'Funga, masharti na mambo yanayobatilisha.',
    image: 'https://images.openai.com/static-rsc-4/SidyznnQE-mf00E8aCJs7VFs2g09zit2m56CHgtHWZHb97e-QxL5DhuK4l3mkbAupbq9TyImaghN665sfYBuCMpoJB_w99kHqfk69VGjiNmGyl3deAFeWSbDqY4G-lhS_S_OqEMIALSg4bcWJfpyvyiPiyD1ZaJcJu1abMF5d9dGJScDieMUMLgJsq6vsStW?purpose=inline',
    lessons: [
      'Maana ya Swawm',
      'Funga ya Ramadhani',
      'Masharti ya funga',
      'Mambo yanayobatilisha funga',
      'Watu wanaoruhusiwa kutofunga',
      'Qadha, Fidya na Kaffarah',
      'Sunnah na adabu za mwenye kufunga'
    ],
    description: 'Elewa hukumu za funga, umuhimu wa Ramadhani na ibada zinazohusiana na Swawm.',
    reference: 'Qurani 2:183–187'
  },
  {
    id: 4,
    name: 'Zakah',
    arabic: 'الزكاة',
    subtitle: 'Hukumu na namna ya kutoa zaka.',
    image: 'https://images.openai.com/static-rsc-4/Ly9S8OoNvs1l5xw7GvVjwvO-G7fsGMbRrt_pM1dCNIeS9OEgtg3wtHiYmQSJIjKhrTqnfCsWfq8tZd_r2yQA3e8qM6rMn48ZqlIgjNeb5VkG8OIGeMkkE4CO4JA0BUfJb0ft34J6KTsJz1r6QU1V4h78G01CDCWwLGZzkRXhLnE?purpose=inline',
    lessons: [
      'Maana na umuhimu wa Zakah',
      'Masharti ya Zakah',
      'Nisab na Hawl',
      'Zakah ya fedha na biashara',
      'Zakah ya mifugo na mazao',
      'Makundi yanayostahili Zakah',
      'Tofauti kati ya Zakah na Sadaqah'
    ],
    description: 'Jifunze wajibu wa Zakah, mali zinazotolewa zaka na watu wanaostahili kupokea.',
    reference: 'Qurani 9:60'
  },
  {
    id: 5,
    name: 'Hajj na Umrah',
    arabic: 'الحج والعمرة',
    subtitle: 'Nguzo, masharti na taratibu.',
    image: 'https://images.openai.com/static-rsc-4/ypSgJLs9axMaeqOUuw_Y-i-6SY0jIBSfNwOLKBNd2VVMPkZwxT8lZQfLoox74X6QthRM_VDUVPCjpNTeA-i89uUzipWEeICHauxxOmeh0AIqOFnBd7SwhCpfHdihITy7kZR6z71RAAWuMEypzy0j-rqJMUWdg0IQN34pwUyEW9OSvw3Yz4Dla1Kj9Z9yPF4z?purpose=inline',
    lessons: [
      'Maana ya Hajj na Umrah',
      'Masharti ya Hajj',
      'Aina za Hajj',
      'Ihram na Miqat',
      'Tawaf na Saayi',
      'Kusimama Arafah',
      'Taratibu za Umrah'
    ],
    description: 'Jifunze hatua za kutekeleza Hajj na Umrah na umuhimu wa ibada hizi.',
    reference: 'Qurani 3:97'
  },
  {
    id: 6,
    name: 'Vitabu vya Fiqhi',
    arabic: 'كتب الفقه',
    subtitle: 'Vitabu na marejeo ya kujifunzia.',
    image: 'https://images.openai.com/static-rsc-4/qpkSMRruRcADgY_x_Reu7DmM4BPJi6NhmQgAQdfV6bNoJbj1mp2GBGt18I-B0tv-tFaDDpxPxJkkrLVJMQUyKWMna9cn1PGOtl1yQgWX3wVSF-z0gY7PVBUS9HVsehVr8LSwPruVD1WAqC64POMf5qZ_mm6tNlrH1-JrcJUMYKM?purpose=inline',
    lessons: [
      'Utangulizi wa elimu ya Fiqhi',
      'Misingi ya Fiqhi',
      'Madhehebu manne',
      'Vitabu vya Fiqhi kwa wanaoanza',
      'Usomaji wa Qurani na Sunnah',
      'Mbinu za kujifunza Fiqhi'
    ],
    description: 'Pata mwongozo wa vitabu na marejeo mbalimbali vya kujifunza Fiqhi kwa kina.',
    reference: 'Qurani 16:43'
  }
]

function openTopic(topic) {
  selectedTopic.value = topic
}

function closeTopic() {
  selectedTopic.value = null
}
</script>

<template>
  <main class="fiqhi-page">

    <!-- Hero section -->
    <section class="fiqhi-hero">
      <div class="hero-overlay">
        <span class="hero-label">MADRASAT ISLAHI</span>
        <h1 dir="rtl">الفقه الإسلامي</h1>
        <h2>Elimu ya Fiqhi</h2>
        <p>Jifunze hukumu za Kiislamu na misingi ya ibada.</p>
        <div class="hero-line"></div>
      </div>
    </section>

    <!-- Topics section -->
    <section class="fiqhi-container">

      <div class="section-heading">
        <span>JIFUNZE NA UFAHAMU</span>
        <h2>Masomo ya Fiqhi</h2>
        <p>
          Chagua mada unayotaka kujifunza na ongeza uelewa wako
          kuhusu ibada na maisha ya Kiislamu.
        </p>
      </div>

      <div class="topic-grid">
        <article
          v-for="topic in topics"
          :key="topic.id"
          class="topic-card"
        >
          <a
            class="image-link"
            :href="topic.image"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="'Fungua picha ya ' + topic.name"
          >
            <img
              :src="topic.image"
              :alt="topic.name"
              loading="lazy"
            />
          </a>

          <div class="card-content">
            <span class="topic-number">
              SOMO {{ String(topic.id).padStart(2, '0') }}
            </span>

            <h3 dir="rtl">{{ topic.arabic }}</h3>
            <h2>{{ topic.id }}. {{ topic.name }}</h2>

            <p>{{ topic.subtitle }}</p>

            <button
              class="learn-button"
              @click="openTopic(topic)"
            >
              Jifunze zaidi
              <span>→</span>
            </button>
          </div>
        </article>
      </div>

      <!-- Selected topic details -->
      <section
        v-if="selectedTopic"
        class="topic-details"
        aria-live="polite"
      >
        <button class="close-button" @click="closeTopic">
          ✕
        </button>

        <span class="detail-label">MAELEZO YA SOMO</span>
        <h2>{{ selectedTopic.name }}</h2>
        <h3 dir="rtl">{{ selectedTopic.arabic }}</h3>

        <p>{{ selectedTopic.description }}</p>

        <h3 class="lesson-title">Yaliyomo kwenye somo</h3>

        <ol class="lesson-list">
          <li
            v-for="(lesson, index) in selectedTopic.lessons"
            :key="index"
          >
            {{ lesson }}
          </li>
        </ol>

        <div class="reference-box">
          <strong>📖 Rejea ya kuanzia:</strong>
          {{ selectedTopic.reference }}
        </div>
      </section>

      <!-- Educational note -->
      <section class="fiqhi-note">
        <span class="note-icon">📚</span>
        <div>
          <h3>Elimu ni msingi wa ibada</h3>
          <p>
            Jifunze Fiqhi kwa kurejea Qurani Tukufu, Sunnah sahihi
            na maelezo ya wanazuoni wenye elimu. Baadhi ya masuala
            yana tofauti za kielimu kati ya madhehebu, hivyo ni muhimu
            kujifunza kwa mwalimu mwenye sifa zinazofaa.
          </p>
        </div>
      </section>

    </section>
  </main>
</template>

<style scoped>
.fiqhi-page {
  background: #f5f5f5;
  color: #292929;
  min-height: 100vh;
  padding-bottom: 55px;
}

/* Hero */
.fiqhi-hero {
  background: linear-gradient(135deg, #050a40, #101d5b);
  color: white;
  text-align: center;
  min-height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px 20px;
}

.hero-overlay {
  width: 100%;
  max-width: 850px;
}

.hero-label {
  color: #d8c58a;
  font-size: 12px;
  letter-spacing: 4px;
  font-weight: bold;
}

.fiqhi-hero h1 {
  font-size: clamp(38px, 6vw, 58px);
  margin: 15px 0 5px;
}

.fiqhi-hero h2 {
  font-size: 27px;
  margin: 8px 0;
}

.fiqhi-hero p {
  color: #e0e4f3;
  font-size: 16px;
}

.hero-line {
  width: 65px;
  height: 3px;
  background: #c6a65c;
  margin: 22px auto 0;
}

/* Main container */
.fiqhi-container {
  max-width: 1200px;
  margin: auto;
  padding: 45px 22px;
}

.section-heading {
  text-align: center;
  margin-bottom: 35px;
}

.section-heading > span {
  color: #a18437;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: bold;
}

.section-heading h2 {
  color: #080b46;
  font-size: 30px;
  margin: 10px 0;
}

.section-heading p {
  color: #777;
  max-width: 650px;
  margin: auto;
  line-height: 1.7;
}

/* Image cards */
.topic-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

.topic-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.07);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.topic-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 9px 24px rgba(0, 0, 0, 0.13);
}

.image-link {
  display: block;
  height: 215px;
  overflow: hidden;
  background: #e8e8e8;
}

.image-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.topic-card:hover .image-link img {
  transform: scale(1.06);
}

.card-content {
  padding: 22px;
}

.topic-number {
  color: #a18437;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2px;
}

.card-content h3 {
  color: #a18437;
  font-size: 25px;
  margin: 12px 0 5px;
}

.card-content h2 {
  color: #080b46;
  font-size: 21px;
  margin: 5px 0 10px;
}

.card-content p {
  color: #777;
  font-size: 14px;
  line-height: 1.7;
  min-height: 48px;
}

.learn-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  background: #080b46;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s ease;
}

.learn-button:hover {
  background: #a18437;
}

/* Selected topic */
.topic-details {
  position: relative;
  margin-top: 45px;
  padding: 30px;
  border-radius: 10px;
  background: white;
  border-top: 4px solid #b59b53;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);
}

.close-button {
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: #eee;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.detail-label {
  color: #a18437;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

.topic-details h2 {
  color: #080b46;
  font-size: 27px;
  margin-bottom: 5px;
}

.topic-details h3 {
  color: #a18437;
  font-size: 22px;
}

.topic-details > p {
  color: #555;
  line-height: 1.8;
}

.lesson-title {
  color: #080b46;
  margin-top: 25px;
}

.lesson-list {
  padding-left: 25px;
  line-height: 2.1;
  color: #555;
}

.reference-box {
  background: #f6f4ed;
  border-left: 4px solid #b59b53;
  padding: 16px;
  margin-top: 20px;
  line-height: 1.7;
}

/* Note */
.fiqhi-note {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-top: 45px;
  padding: 25px;
  background: white;
  border-radius: 10px;
  border-left: 4px solid #b59b53;
}

.note-icon {
  font-size: 30px;
}

.fiqhi-note h3 {
  color: #080b46;
  margin: 0 0 10px;
}

.fiqhi-note p {
  color: #666;
  line-height: 1.8;
  margin: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .topic-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .topic-grid {
    grid-template-columns: 1fr;
  }

  .fiqhi-container {
    padding: 30px 15px;
  }

  .image-link {
    height: 220px;
  }

  .fiqhi-hero {
    min-height: 250px;
  }

  .topic-details {
    padding: 22px 18px;
  }
}
</style>
