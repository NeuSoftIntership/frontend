<script>
export default {
  created() {
    // this.$router.replace({
    //   path: "/"
    // })
    this.$router.push({
      name: "finance-allot-settle"
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
