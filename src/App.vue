<script setup lang="ts">
import { onMounted } from "vue"
import lnltchPlayer from "@lnltch-players/aliyun"
import "@lnltch-players/aliyun/dist/index.css"

onMounted(() => {
  new lnltchPlayer(
    "video",
    {
      licenseDomain: "localhost",
      licenseKey: "fPns7ih4YTqRoFcZOc6674e05f2854a6082e3dac2e1bfa961",
      memoryVideo:"bipbop_16x9_variant",
      sources:
        "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
      // url: "http://localhost/demo2.mp4"
    },
    () => {}
  )
})
</script>

<template>
  <div class="video-container" id="video"></div>
</template>

<style lang="css" scoped>
.video-container {
  width: 1200px;
  height: 800px;
}
</style>
