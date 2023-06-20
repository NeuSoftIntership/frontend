<script>
import OrderDetail from "../client/OrderDetail.vue";

export default {
  setup(){

  },
  components: {OrderDetail}
}
</script>

<template>
  <h5>任务单详情</h5>
  <OrderDetail></OrderDetail>
  <div class="align-content-center">
    <h5>配送任务</h5>
    <ul class="list-group list-group-horizontal-md _li-quarter">
      <li class="list-group-item">配送员</li>
      <li class="list-group-item">
        <select class="form-select" aria-label="Default select example" style="border: none">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </li>
      <li class="list-group-item">配送站点</li>
      <li class="list-group-item">
      </li>
    </ul>
    <ul class="list-group list-group-horizontal _li-quarter">
      <li class="list-group-item">配送开始日期</li>
      <li class="list-group-item">
      </li>
      <li class="list-group-item">配送截止日期</li>
      <li class="list-group-item">
      </li>
    </ul>
    <ul class="list-group list-group-horizontal _li-half">
      <li class="list-group-item">订单状态</li>
      <li class="list-group-item">
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>