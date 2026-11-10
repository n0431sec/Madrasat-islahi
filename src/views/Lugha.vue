
<script setup>
const learningResources = [
  {
    name: 'Madinah Arabic',
    description: 'Learn Arabic alphabet, vocabulary, reading and grammar.',
    url: 'https://www.madinaharabic.com/'
  },
  {
    name: 'Al Jazeera Learning Arabic',
    description: 'Improve Arabic reading, listening and language skills.',
    url: 'https://learning.aljazeera.net/'
  },
  {
    name: 'We Learn Arabic',
    description: 'Practice Arabic vocabulary, pronunciation and exercises.',
    url: 'https://welearnarabic.com/'
  }
]
</script>

<template>
  <div class="lugha">
    <section class="hero">
      <h1>تعلم اللغة العربية</h1>
      <h2>Lughatul Arabia</h2>
      <p>Jifunze Lugha ya Kiarabu kupitia masomo na mazoezi mbalimbali.</p>
    </section>

    <section class="resources">
      <h2>Arabic Learning Resources</h2>

      <div class="resource-grid">
        <article
          v-for="resource in learningResources"
          :key="resource.name"
          class="resource-card"
        >
          <h3>{{ resource.name }}</h3>
          <p>{{ resource.description }}</p>

          <a
            :href="resource.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Learning →
          </a>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.lugha {
  min-height: 80vh;
  background: #f5f6fa;
  padding-bottom: 50px;
}

.hero {
  background: #080b46;
  color: white;
  text-align: center;
  padding: 65px 20px;
}

.hero h1 {
  font-size: 38px;
  margin-bottom: 10px;
}

.hero h2 {
  font-size: 25px;
}

.hero p {
  font-size: 16px;
}

.resources {
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 20px;
}

.resources > h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #080b46;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 22px;
}

.resource-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.08);
}

.resource-card h3 {
  color: #080b46;
}

.resource-card p {
  color: #555;
  line-height: 1.6;
  min-height: 65px;
}

.resource-card a {
  display: inline-block;
  background: #080b46;
  color: white;
  text-decoration: none;
  padding: 11px 18px;
  border-radius: 6px;
}

.resource-card a:hover {
  background: #173a85;
}
</style>
