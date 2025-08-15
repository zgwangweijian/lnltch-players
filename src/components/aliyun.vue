<script lang="ts" setup>
import { ref, onMounted } from "vue"
import lnltchPlayer from "@lnltch-players/aliyun"
import type { Options } from "@lnltch-players/aliyun"
import "@lnltch-players/aliyun/dist/index.css"
import audioAAC from "../assets/audio.aac"
import poster from "../assets/poster.jpg"

const player = ref<lnltchPlayer>()

const sources = ref<Options["sources"]>([])
const progress = ref<number>(0)

onMounted(async () => {
  //第一种方法，根据视频ID获取CDN地址和进度信息，一个接口返回地址和进度那就直接初始化就可以了
  getVideoCDNAndProgress("1")

  //第二种方法，两个接口一个返回地址一个返回进度，那就先请求地址然后请求进度都拿到后初始化
  // sources.value = await getVideoCDN("1")
  // progress.value = await getVideoProgress("1")
  // initVideoPlayer("1")

  //第三种方法，先获取播放地址，然后初始化后，在进行跳转
  // sources.value = await getVideoCDN("1")
  // initVideoPlayer("1")
  // progress.value = await getVideoProgress("1")
  // if (player.value) {
  //   player.value.seek(progress.value)
  // }
})
// cdn和进度分开返回
const getVideoCDN = (videoId: string): Promise<Options["sources"]> => {
  console.log(videoId, "=======get videoId CDN")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "1080p",
          url: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
        },
        {
          name: "720p",
          url: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
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
        name: "SD", // name:'1080p'
        url: "https://ckplayer-video.oss-cn-shanghai.aliyuncs.com/mp4/1_1920x1080.mp4"
      },
      {
        name: "LD",
        url: "https://ckplayer-video.oss-cn-shanghai.aliyuncs.com/mp4/1_1024x768.mp4"
      },
      {
        name: "FD",
        url: "https://ckplayer-video.oss-cn-shanghai.aliyuncs.com/mp4/1_640x480.mp4"
      }
    ]
    progress.value = 5
    initVideoPlayer(videoId)
  }, 300)
}

const getCDNSourceAndProgress = async (
  id: string
): Promise<{
  source: Array<{ name: string; url: string }> | string
  progress: number
}> => {
  const sources = await getVideoCDN(id)
  const progress = await getVideoProgress(id)
  return new Promise((resolve) => {
    resolve({
      source: sources,
      progress: progress
    })
  })
}

const initVideoPlayer = (videoId: string) => {
  player.value = new lnltchPlayer(
    "video",
    {
      // type: "audio",
      licenseDomain: "localhost",
      licenseKey: "fPns7ih4YTqRoFcZOc6674e05f2854a6082e3dac2e1bfa961",
      memoryVideo: videoId,
      // bulletText: "张三正在观看",
      sources: sources.value,
      // autoSize: false,
      autoplay: true,
      // skipStep: 5,
      // showPlayNext: true,
      // handlePlayNext: () => {
      //   console.log("点击触发下一集")
      // },
      watchStartTime: progress.value,
      saveTimeInterval: 15,
      saveTime: (memoryVideo, currentTime) => {
        console.log(memoryVideo, currentTime)
        //保存进度
      },
      playlist: [
        {
          id: "1",
          name: "第一集 播放器的安装和使用（1）",
          // poster: "http://localhost/poster.jpg",
          poster:poster,
          duration: 700
        },
        {
          id: "2",
          name: "第二集 播放器的安装和使用（2）",
          // poster: "http://localhost/poster.jpg",
          poster:poster,
          duration: 600
        }
      ],
      getCDNSourceAndProgress: getCDNSourceAndProgress
    },
    () => {
      //ready
    }
  )
}
const playAudio = () => {
  player.value?.dispose()
  player.value = new lnltchPlayer(
    "video",
    {
      type: "audio",
      licenseDomain: "localhost",
      licenseKey: "fPns7ih4YTqRoFcZOc6674e05f2854a6082e3dac2e1bfa961",
      memoryVideo: 'audio1',
      sources: audioAAC,
      autoSize: true,
      autoplay: true,
      skipStep: 5,
      showPlayNext: true,
      handlePlayNext: () => {
        console.log("点击触发下一集")
      },
      watchStartTime: progress.value,
      saveTimeInterval: 15,
      saveTime: (memoryVideo, currentTime) => {
        console.log(memoryVideo, currentTime)
        //保存进度
      },
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
    <div class="aliyun-player-method">
      <button @click="playAudio">播放音频</button>
    </div>
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
    height: 800px;
    .video-player {
      width: 100%;
      height: 100%;
    }
  }
  .aliyun-player-method {
    margin-left: 20px;
  }
}
</style>
