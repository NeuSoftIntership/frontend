<script>
import Login from "./pages/Login.vue";
import NavSkeleton from "./pages/NavSkeleton.vue";
export default {
  created() {
    // this.$router.replace({
    //   path: "/"
    // })
    this.$router.push({
      // client-home
      // client-add2modify
      // /nav/client-orders
      // path: "/nav/add-order"
      name: "allot-courier-add2modify"
    });
  }
}
</script>

<template>
<!--  <Login></Login>-->
  <router-view></router-view>
</template>

<style scoped>

</style>
