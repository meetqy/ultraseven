<template>
  <div
    class="w-full m-auto h-full pb-10"
    style="max-height: 92vh"
    :class="curDevice.className"
  >
    <div
      class="bg-base-300 bg-opacity-60 w-full flex rounded-box 0 shadow-base-100 flex-col h-full overflow-hidden"
    >
      <div
        class="h-12 w-full px-4 flex justify-between items-center bg-base flex-shrink-0 shadow relative z-10"
      >
        <div class="flex h-full items-center w-14 justify-between">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
          <div class="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <div
          class="bg-base-200 w-96 h-8 flex items-center justify-center rounded"
        >
          <!-- <span class="cursor-pointer text-primary"> 移动端优先 </span> -->
          <span class="mx-4 text-base">
            &lt; <i class="text-primary">{{ curDevice.width }}px</i> &gt;
          </span>
          <!-- <span class="cursor-pointer text-base-content">PC端优先</span> -->
        </div>
        <div class="flex w-32 h-full justify-between items-center">
          <span
            @click="() => (curIndex = 0)"
            class="text-lg cursor-pointer"
            :class="[{ 'text-primary': curIndex === 0 }]"
          >
            <fa6-solid:desktop />
          </span>
          <span
            @click="() => (curIndex = 1)"
            class="text-xl cursor-pointer"
            :class="[{ 'text-primary': curIndex === 1 }]"
          >
            <fa6-solid:laptop />
          </span>
          <span
            @click="() => (curIndex = 2)"
            class="cursor-pointer"
            :class="[{ 'text-primary': curIndex === 2 }]"
          >
            <fa6-solid:tablet-screen-button />
          </span>
          <span
            @click="() => (curIndex = 3)"
            class="text-lg cursor-pointer"
            :class="[{ 'text-primary': curIndex === 3 }]"
          >
            <fa6-solid:mobile-screen-button />
          </span>
          <!-- <span
            class="text-lg"
            :class="[item.icon, { 'text-primary': index === curIndex }]"
            v-for="(item, index) in device"
            :key="item.icon"
            @click="() => (curIndex = index)"
          >
            <component :is="item.icon" />
          </span> -->
          <!-- <i
            class="i cursor-pointer text-lg"
            :class="[item.icon, { 'text-primary': index === curIndex }]"
            v-for="(item, index) in device"
            :key="item.icon"
            @click="() => (curIndex = index)"
          /> -->
        </div>
      </div>
      <iframe
        ref="iframe"
        id="iframe-editor"
        class="w-full h-full flex-1"
        frameborder="0"
        title="edit page"
        :src="`${baseUrl}iframe`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { iframeIo } from "@/views/iframe.io";
import { computed, reactive, ref, watch } from "vue";

const device = reactive([
  { icon: "fa6-solid:desktop", width: "1280", className: "max-w-screen-xl" },
  { icon: "fa6-solid:laptop", width: "1024", className: "max-w-screen-lg" },
  {
    icon: "fa6-solid:mobile",
    width: "768",
    className: "max-w-screen-md",
  },
  {
    icon: "fa6-solid:mobile-screen-button",
    width: "640",
    className: "max-w-screen-sm",
  },
]);

const curIndex = ref<number>(0);

const curDevice = computed(() => device[curIndex.value]);

watch(curDevice, () => {
  iframeIo.mainToEditor("notice");
});

const baseUrl = import.meta.env.BASE_URL;
</script>
