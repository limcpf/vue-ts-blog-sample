<template>
  <div class="home">
    <a href="#" @click="move('/post/1')">Post test</a>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const move = (url: string) => {
  router.push(url);
};
</script>

<style></style>
