<template>
  <div class="layout-default">
    <el-container>
      <el-header height>
        <my-header />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer height>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader/myHeader.vue";
import MyFooter from "@/components/myFooter/myFooter.vue";
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>