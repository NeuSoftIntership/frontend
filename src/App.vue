<script>
import Login from "./pages/Login.vue";
import NavSkeleton from "./pages/NavSkeleton.vue";
export default {
  created() {
    this.$router.replace({
      path: "/"
    })
  }
}
</script>

<template>
<!--  <Login></Login>-->
  <router-view></router-view>
</template>

<style scoped>

</style>
