<script>
  export default {
    props:{
      dirIsV: {
        type: Boolean,
        required:true,
      },
      distance: {
        type: String,
        required: true
      }
    },
    mounted() {
      if(this.dirIsV == 'true'){
        this.$refs.divide.style.margin = `${this.distance} 0px ${this.distance} 0px`
      }else{
        this.$refs.divide.style.margin = `0px ${this.distance} 0px ${this.distance}`
      }
    }
  }
</script>

<template>
  <span ref="divide"></span>
</template>