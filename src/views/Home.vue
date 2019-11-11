<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <h1>{{ hobby }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    name: {
      type: String,
      default: "bad"
    },
    hobby: {
      type: String,
      default: "guess"
    }
  },

  mounted() {
    console.log("guess");
    console.log(this.$route);
  }
};
</script>
