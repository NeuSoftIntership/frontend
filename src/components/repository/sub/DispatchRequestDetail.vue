<script>
import OrderDetail from "../../client/sub/OrderDetail.vue";
import Divide from "../../common/Divide.vue";

export default {
  components: {Divide, OrderDetail}

}
</script>

<template>
  <OrderDetail></OrderDetail>
  <h5>出库信息</h5>
  <div class="input-group mb-3">
    <datalist id="class1">
      <option>1</option>
      <option>11</option>
      <option>111</option>
      <option>1111</option>
    </datalist>
    <span class="input-group-text" id="basic-addon1">调拨分站</span>
    <input type="text" class="form-control" list="class1" placeholder="Username" aria-label="Username"
           aria-describedby="basic-addon1">

    <datalist id="class2">
      <option>2</option>
      <option>22</option>
      <option>222</option>
      <option>2222</option>
    </datalist>
    <Divide distance="20px" dir-is-v="false"></Divide>
    <span class="input-group-text" id="basic-addon2">配货日期</span>
    <input type="date" class="form-control" list="class2" placeholder="Username" aria-label="Username"
           aria-describedby="basic-addon1">
    <span style="margin: 0 20px 0 20px"></span>
    <Divide distance="20px" dir-is-v="false"></Divide>
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">出库</button>
  </div>
</template>

<style scoped>

</style>