<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-17 20:12:17
 * @detail: 
 * @change: 
-->
<template>
  <div>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'qwHhelloworld',
  components: {},
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  destroyed() {}
};
</script>

<style scoped>
</style>
