<template>
  <el-container style="font-size: 12px; line-height: 60px; display: flex;">
    <Header></Header>
  </el-container>
</template>
<script>

import {defineComponent} from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {Header}
})
</script>
<style scoped>

</style>