<template>
  <div>
    <fs-input type="password" v-model="value" :clearable="true" :show-password="true"/>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    switchingThemes(back_color) {
      window.document.documentElement.setAttribute("css-themes", back_color);
    }
  }
};
</script>
<style scoped>
</style>