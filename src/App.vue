<script>
export default {
  created() {
    // this.$router.replace({
    //   path: "/"
    // })
    this.$router.push({
      name: "finance-allot-settle"
    });
  },
  mounted() {
    (() => {
      'use strict'
      const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
      })
    })()
  }
}
</script>

<template>
<!--  <Login></Login>-->
  <router-view></router-view>
</template>

<style scoped>

</style>
