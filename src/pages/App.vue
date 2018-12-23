<template>
  <div class="App">
    <video
      class="App__video--fullscreen"
      playsinline
      autoplay
      muted
      loop
    >
      <source :src="`/video/${video}`" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'App',

  computed: {
    video() {
      return this.isMobile ? 'bg-mobile.mp4' : 'bg-desktop.mp4';
    },
  },
}
</script>

<style lang="scss" scoped>
.App__video--fullscreen {
  position: fixed;
  top: 50%;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: 100%;
  z-index: -100;
  transform: translateY(-50%);
  background-color: $black;
  background-size: cover;
  transition: 1s opacity;
}
</style>
