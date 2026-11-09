<script setup lang="ts">
</script>

<template>
  <!-- footer -->
  <div id="more" class="footer ">
    <div class="centered">
      <div class="footer-container">
        <div class="more-info">
          <div class="worki-hours">
            <span class="more-header">Working Hours</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
          </div>
          <div class="useful-link">
            <span class="more-header">Useful Links</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
          </div>
          <div class="destination">
            <span class="more-header">Destination</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
          </div>
          <div class="driver-cars">
            <span class="more-header"> Driver & Cars </span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
            <span> Lorem, ipsum dolor</span>
          </div>
        </div>

      </div>
    </div>
    <div class="moving-rhino">
      <div class="rhino-1 land"></div>
      <div class="rhino-2 land"></div>
      <div class="rhino-3 land"></div>
      <div class="rhino-4 land"></div>
    </div>
    <div class="footer-h">
      @2024 Madrasah Islahi. All Rights Reseved
    </div>
  </div>
</template>


<style scoped>
/* footer */
.footer {
  background-color: #393B3C;
  flex: 1;
}

/* */
.centered {
  width: 100%;
  display: flex;
  justify-content: center;
}

.more-info {
  display: flex;
  justify-content: center;
}

.more-info div>span {
  display: block;
  padding: 5px;
  margin: 0 5px;
  color: #fff;
  text-align: center;
}

.more-header {
  color: #fff;
  text-decoration: underline #fff 2.5px;
}

.footer-h {
  display: flex;
  justify-content: center;
  background-color: rgba(247, 147, 29, 0.5);
  height: 40px;
  color: #fff;
  align-items: center;
  font-size: 10px;
}

</style>