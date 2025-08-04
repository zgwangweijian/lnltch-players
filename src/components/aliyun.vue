<script lang="ts" setup>
import { ref, onMounted } from "vue"
import lnltchPlayer from "@lnltch-players/aliyun"
import type { Options } from "@lnltch-players/aliyun"
import "@lnltch-players/aliyun/dist/index.css"

const player = ref<lnltchPlayer>()

const sources = ref<Options["sources"]>([])
const progress = ref<number>(0)

onMounted(async () => {
  //第一种方法，根据视频ID获取CDN地址和进度信息，一个接口返回地址和进度那就直接初始化就可以了
  getVideoCDNAndProgress("1")

  //第二种方法，两个接口一个返回地址一个返回进度，那就先请求地址然后请求进度都拿到后初始化
  //   sources.value = await getVideoCDN("1")
  //   progress.value = await getVideoProgress("1")
  //   initVideoPlayer("1")

  //第三种方法，先获取播放地址，然后初始化后，在进行跳转
//   sources.value = await getVideoCDN("1")
//   initVideoPlayer("1")
//   setTimeout(async () => {
//     progress.value = await getVideoProgress("1")
//     if (player.value) {
//       player.value.seek(progress.value)
//     }
//   }, 500)
})
// cdn和进度分开返回
const getVideoCDN = (videoId: string): Promise<Options["sources"]> => {
  console.log(videoId, "=======get videoId CDN")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "1080p",
          url: "https://ckplayer-video.oss-cn-shanghai.aliyuncs.com/mp4/1_1920x1080.mp4"
        },
        {
          name: "720p",
          url: "https://ckplayer-video.oss-cn-shanghai.aliyuncs.com/mp4/1_1920x1080.mp4"
        }
      ])
    }, 500)
  })
  setTimeout(() => {}, 500)
}
const getVideoProgress = (videoId: string): Promise<number> => {
  console.log(videoId, "=======get videoId Progress")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5)
    }, 100)
  })
}

// cdn和进度合并返回
const getVideoCDNAndProgress = (videoId: string) => {
  setTimeout(() => {
    sources.value = [
      {
        name: "1080p",
        url: "https://ckplayer-video.oss-cn-shanghai.aliyuncs.com/mp4/1_1920x1080.mp4"
      },
      {
        name: "720p",
        url: "https://ckplayer-video.oss-cn-shanghai.aliyuncs.com/mp4/1_1920x1080.mp4"
      }
    ]
    progress.value = 5
    initVideoPlayer(videoId)
  }, 300)
}

const initVideoPlayer = (videoId: string) => {
  player.value = new lnltchPlayer(
    "video",
    {
      licenseDomain: "localhost",
      licenseKey: "fPns7ih4YTqRoFcZOc6674e05f2854a6082e3dac2e1bfa961",
      memoryVideo: videoId,
      bulletText: "张三正在观看",
      sources: sources.value,
      getTime: () => {
        return progress.value
      },
      saveTime: (memoryVideo, currentTime) => {
        //保存进度
      }
    },
    () => {
      //ready
    }
  )
}
</script>
<template>
  <div class="aliyun-player-wrapper">
    <div class="aliyun-player-container">
      <div id="video" class="video-player" ref="videoRef"></div>
    </div>
    <div class="aliyun-player-method"></div>
  </div>
</template>
<style lang="scss" scoped>
.aliyun-player-wrapper {
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  .aliyun-player-container {
    width: 800px;
    height: 600px;
    .video-player {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
