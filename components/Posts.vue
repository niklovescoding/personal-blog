<template>
  <div class="posts text-gray-500 mb-20">
    <h3 class="posts__heading funky text-center">My Trash</h3>
    <ul class="list-disc list-inside text-center">
      <li class="mt-4 underline" v-for="post in posts" :key="post.title">
        <nuxt-link
          class="font-bold underline text-blue-500 hover:text-blue-800"
          :to="`${post._path}`"
          >{{ post.title }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    this.posts = await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const posts = await queryContent("/blog").find();
      return posts;
    },
  },
};
</script>
