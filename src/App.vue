<script setup lang="ts">
import { ref } from "vue"
import AliyunPlayer from "./components/aliyun.vue"
import VideojsPlayer from "./components/videojs.vue"

const choosedPlayerKey = ref<string>("aliyun")

const choosePlayer = (key: string) => {
  if (choosedPlayerKey.value === key) {
    return
  }
  choosedPlayerKey.value = key
}
</script>

<template>
  <div class="app-container">
    <div class="video-player-choose">
      <div class="choose-item" @click="choosePlayer('aliyun')">
        阿里云播放器
      </div>
      <div class="choose-item" @click="choosePlayer('videojs')">
        videojs播放器
      </div>
    </div>
    <div class="video-player-container">
      <AliyunPlayer v-if="choosedPlayerKey === 'aliyun'"></AliyunPlayer>
      <VideojsPlayer v-else-if="choosedPlayerKey === 'videojs'"></VideojsPlayer>
    </div>
  </div>

  <div class="videojs"></div>
</template>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  position: relative;
  .video-player-choose {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    .choose-item {
      margin-left: 30px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .video-player-container {
    margin-top: 60px;
  }
}
</style>
