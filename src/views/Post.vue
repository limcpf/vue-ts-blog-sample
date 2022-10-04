<template>
  <section v-if="postStatus.valueOf() === POST_LOAD_STATUS.SUCCESS">
    <h1>
      {{ postObj.post?.title }}
    </h1>
    <hr />
    <div class="contents">
      <p v-html="postObj.post?.contents" />
    </div>
  </section>
  <section v-else>
    <article aria-busy="true" v-if="postStatus.valueOf() === POST_LOAD_STATUS.LOADING" />
    <div class="not-found" v-else>
      <h1>해당 게시글이 존재하지 않습니다.</h1>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import { getPost } from "../shared/api/api";
import { iPost, PostPageObject } from "../shared/api/interface/post.interface";
import { POST_LOAD_STATUS } from "../shared/constant/post.const";
import makrdown from "../shared/util/markdown";
// use Hook
const route = useRoute();

// reactive vars
const postStatus: Ref<string> = ref(POST_LOAD_STATUS.LOADING);
const postObj: PostPageObject = reactive({
  post: {
    id: 0,
    title: "",
    contents: "",
    show: 0,
    modifiedDate: "",
    createdDate: "",
  },
});

// mount
onBeforeMount(async () => {
  try {
    const p: iPost = await getPost(route.params.id);

    if (p) {
      p.contents = makrdown.render(p.contents.replaceAll("\\x3C", "<"));
      postObj.post = p;
      postStatus.value = POST_LOAD_STATUS.SUCCESS;
    }
  } catch (e) {
    console.log(e);
    postStatus.value = POST_LOAD_STATUS.FAIL;
  }
});
</script>

<style>
h1 {
  margin-block-end: 1rem;
}
.not-found {
  text-align: center;
}
</style>
